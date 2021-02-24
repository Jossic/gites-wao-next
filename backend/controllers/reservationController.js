import Reservation from '../models/ReservationModel.js';
import asyncHandler from 'express-async-handler';
import validateHuman from '../utils/validateHuman.js';
import Client from '../models/clientModel.js';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween.js';
dayjs.extend(isBetween);
import Gite from '../models/giteModel.js';
import sendEmailWithNodemailer from '../utils/email.js';
import { calculTarifDeBase } from '../utils/calculTarif.js';
import PDFDocument from 'pdfkit';
import fs from 'fs';

// @desc      Fetch all reservations
// @route     GET /api/reservation
// @access    Private/Admin
const getAllReservations = asyncHandler(async (req, res) => {
	const reservations = await Reservation.find({});
	res.json(reservations);
});

// @desc      Fetch one Reservation by Id
// @route     GET /api/Reservation/:id
// @access    Private/Admin
const getReservationById = asyncHandler(async (req, res) => {
	const reservation = await Reservation.findById(req.params.id);

	if (reservation) {
		res.json(reservation);
	} else {
		res.status(404);
		throw new Error('Reservation non trouvé');
	}
});

// @desc      Count number of new reservation
// @route     GET /api/reservation/count
// @access    Public
const getNumberOfNewReservation = asyncHandler(async (req, res) => {
	const reservation = await Reservation.find({
		status: 'Nouvelle réservation',
	});

	// console.log('reservation ', reservation);
	// console.log('reservation taille ', reservation.length);
	if (reservation.length === 0) {
		res.json(0);
	} else if (reservation.length > 0) {
		res.json(reservation.length);
	} else {
		res.status(404);
		throw new Error('Pas de reservation trouvé');
	}
});

// @desc      Create a Reservation
// @route     POST /api/Reservation
// @access    Public
const createReservation = async (req, res) => {
	const {
		gite,
		nbPers,
		nbEnf,
		dateArrivee,
		dateDepart,
		nbChien,
		contactMail,
		contactTel,
		contactAbritel,
		contactLeboncoin,
		contactAutre,
		litFait,
		infoCompl,
		nom,
		prenom,
		adresse,
		civilite,
		cp,
		ville,
		pays,
		tel,
		mail,
		newsletter,
		token,
	} = req.body;
	// console.log('req.body vaut =>', req.body);

	console.log(newsletter);
	const human = await validateHuman(token);
	if (!human) {
		res.status(400);
		res.json({ error: 'Vous avez été reconnu en tant que robot' });
		return;
	}

	const dejaClient = await Client.findOne({ mail });

	if (dejaClient) {
		dejaClient.nbReserv = dejaClient.nbReserv + 1;
		newsletter && (dejaClient.newsletter = newsletter);
		await dejaClient.save();
	} else {
		const client = new Client({
			nom,
			prenom,
			adresse,
			civilite,
			cp,
			ville,
			pays,
			tel,
			mail,
			nbVenu: Number(0),
			nbReserv: Number(0),
			newsletter,
		});
		// console.log('client dans le back', client);
		client.save((error, client) => {
			// console.log('error', error);
			// console.log('client', client);
			if (error) return res.status(400).json({ error });
			if (client) {
				console.log('client enregistré');
			}
		});
	}

	const ceGite = await Gite.findOne({ slug: gite });
	const nouveauClient = await Client.findOne({ mail });

	//Vérifier si le client n'a pas déjà réservé avec les mêmes paramètres

	const dateD = dayjs(dateArrivee);
	const dateF = dayjs(dateDepart);

	const reservation = new Reservation({
		gite: ceGite._id,
		client: nouveauClient._id,
		nbPers,
		nbEnf,
		dateArrivee,
		dateDepart,
		nbNuites: dateF.diff(dateD, 'day'),
		nbChien,
		mtAnimaux: nbChien * 3,
		contactMail,
		contactTel,
		contactAbritel,
		contactLeboncoin,
		contactAutre,
		litFait,
		infoCompl,
		taxeSejour: 0,
		dateRes: Date.now(),
	});

	reservation.caution = ceGite.caution;
	litFait && (reservation.totalFtLit = nbPers * ceGite.ftLit);

	reservation.totalTfMenage = ceGite.ftMenage;

	reservation.nPers = ceGite.nPers;
	reservation.nbPersSup =
		nbPers > reservation.nPers ? nbPers - reservation.nPers : 0;

	reservation.totalTarifSuppl =
		reservation.nbPersSup * ceGite.supplementParPers * reservation.nbNuites;

	reservation.totalTarifBase = await calculTarifDeBase(
		gite,
		nbPers,
		dateArrivee,
		dateDepart,
		reservation.nbNuites
	);
	console.log('totalTarifBase', reservation.totalTarifBase);

	reservation.resteAPayer =
		reservation.totalTarifBase +
		reservation.totalTarifSuppl +
		reservation.totalFtLit +
		reservation.taxeSejour;
	// console.log('resteAPayer', reservation.resteAPayer);
	const dejaReserve = await Reservation.findOne({
		gite: reservation.gite,
		client: reservation.client,
		dateArrivee: reservation.dateArrivee,
		dateDepart: reservation.dateDepart,
	});

	// // console.log('dejaReserve =>', dejaReserve);
	// // console.log('Reservation dans le back', reservation);

	if (dejaReserve) {
		// console.log('deja Reservé');
		// throw new Error(
		// 	'Il semble que vous ayez déjà effectué une réservation pour ce gîte à ces dates'
		// );
		return res.status(400).json({
			dejaReserveMessage:
				'Il semble que vous ayez déjà effectué une réservation pour ce gîte à ces dates',
		});
	} else {
		reservation.save((error, reservation) => {
			if (error) return res.status(400).json({ error });
			if (reservation) {
				res.status(201).json({
					reservation,
					message:
						'Votre reservation à bien été envoyé, nous reviendrons vers vous rapidement, redirection en cours...',
				});
			}
		});
	}

	//Envoi du mail venant de soi-même au client
	const emailData = {
		from: process.env.NODE_MAILER_USER,
		to: process.env.NODE_MAILER_USER,
		subject: `${process.env.APP_NAME} | Demande de réservation gîte ${ceGite._id}`,
		html: `
			<h3>A faire :</h3>
			<p>Lister les éléments de la location</p>
			<hr />
		`,
	};

	sendEmailWithNodemailer(req, res, emailData);
};

// @desc      Generate a contract
// @route     GET /api/reservation/contract/:reservation
// @access    Private/Admin
const createContract = asyncHandler(async (req, res) => {
	const reservation = await Reservation.findById(req.params.id);
	// console.log(req.body);
	const doc = new PDFDocument();

	const date = Date.now();
	doc.pipe(fs.createWriteStream(`contract-${date}.pdf`)); // write to PDF
	doc.pipe(res); // HTTP response

	doc.fontSize(10);
	doc.text(`Entre la société : Siège social`, 16, 82, {
		align: 'center',
		width: 253,
	});
	doc.text(`SAS WAO`, {
		align: 'center',
		width: 253,
	});
	doc.text(`1 Route de Nouart`, {
		align: 'center',
		width: 253,
	});
	doc.text(`08240 Fossé, FRANCE`, {
		align: 'center',
		width: 253,
	});
	doc.rect(15, 80, 253, 118).stroke();
	doc.fill('grey');

	doc.rect(340, 80, 253, 118).stroke();
	doc.fill('grey');
	// doc.addPage();

	doc.end();

	// res.json({
	// 	message: 'Ok !!!',
	// });
});

// @desc      Delete a reservation
// @route     GET /api/reservation
// @access    Private/Admin
const removeReservation = asyncHandler(async (req, res) => {
	const reservation = await Reservation.findById(req.params.id);
	if (reservation) {
		await reservation.remove();
		res.json({
			message: 'Reservation correctement supprimé',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      Add a response
// @route     PUT /api/reservation/:id
// @access    Private/Admin
const updateReservation = asyncHandler(async (req, res) => {
	const { reponse } = req.body;

	const reservation = await Reservation.findById(req.params.id);
	console.log('reservation apres requete', reservation);
	if (reservation) {
		reponse && (reservation.reponse = reponse);
		reservation.dateReponse = Date.now();
		reservation.repondu = true;
		console.log('reservation avant save', reservation);

		const updatedReservation = await reservation.save();
		res.json({
			updatedReservation,
			text: 'Le mail a bien été envoyé, une copie vous sera envoyée',
		});
	} else {
		res.status(404);
		throw new Error('Reservation non trouvée');
	}
});

export {
	createReservation,
	createContract,
	getNumberOfNewReservation,
	getAllReservations,
	getReservationById,
	removeReservation,
	updateReservation,
};
