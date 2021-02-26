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
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import puppeteer from 'puppeteer';

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
	const date = Date.now();
	const { _id } = req.body;
	console.log(_id);
	(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto(
			`http://localhost:3000/admin/reservation/${_id}/contract`,
			{
				waitUntil: 'networkidle2',
			}
		);
		await page.pdf({
			path: `contract-${date}.pdf`,
			format: 'A4',
			printBackground: true,
			displayHeaderFooter: true,
			footerTemplate: `
			<div class="footer" style="font-size: 6px;color: #999; position: relative; bottom: 15px; left: 20px;">
			<p>VOS INITIALES</p>
						</div>
						<div class="footer" style="font-size: 6px;color: #999; position: relative; bottom: 15px; left: 250px;">
			<p>CHOEUR D'ENFANTS DU HAINAUT 27/08/2021 PETIT NAY</p>
						</div>`,
			margin: {
				top: '20px',
				bottom: '150px',
				right: '25px',
				left: '25px',
			},
		});

		await browser.close();
	})();

	// const browser = await puppeteer.launch();
	// console.log('browser ok');
	// const page = await browser.newPage();
	// console.log('page ok');
	// await page.goto(
	// 	'http://localhost:3000/admin/reservation/60357e3e41545848acd00d01/contract'
	// );
	// console.log('goto ok');
	// await page.pdf({ path: `contract-${date}.pdf`, format: 'A4' });
	// console.log('pdf ok');
	// await browser.close();

	// 	const {
	// 		nbChien,
	// 		mtAnimaux,
	// 		totalTarifBase,
	// 		totalTarifSuppl,
	// 		taxeSejour,
	// 		remise,
	// 		mtCaution,
	// 		nbPers,
	// 		nbEnf,
	// 		dateArrivee,
	// 		heureArrivee,
	// 		dateDepart,
	// 		heureDepart,
	// 		nbNuites,
	// 		totalFtLit,
	// 		totalFtMenage,
	// 		nbPersSup,
	// 		resteAPayer,
	// 		gite,
	// 	} = req.body.reservation;
	// 	const {
	// 		nom,
	// 		prenom,
	// 		adresse,
	// 		civilite,
	// 		cp,
	// 		ville,
	// 		pays,
	// 		tel,
	// 		mail,
	// 	} = req.body.client;
	// 	// console.log(gite);
	// 	const ceGite = await Gite.findById(gite);
	// 	// console.log(req.body);
	// 	const {
	// 		ctDesignationTitre,
	// 		ctPrincipCarac,
	// 		ctSituLog,
	// 		ctDescLog,
	// 		nbKmDeLaMaison,
	// 		couleur1,
	// 	} = ceGite;
	// 	// console.log('ctPrincipCarac', ctPrincipCarac.ops);
	// 	const cfg = {
	// 		inlineStyles: true,
	// 	};
	// 	const converter1 = new QuillDeltaToHtmlConverter(ctPrincipCarac.ops, cfg);
	// 	const converter2 = new QuillDeltaToHtmlConverter(ctSituLog.ops, cfg);
	// 	const converter3 = new QuillDeltaToHtmlConverter(ctDescLog.ops, cfg);
	// 	const ctPrincipCaracConv = converter1.convert();
	// 	const ctSituLogConv = converter2.convert();
	// 	const ctDescLogConv = converter3.convert();
	// 	const date = Date.now();
	// 	const doc = new PDFDocument();
	// 	doc.pipe(fs.createWriteStream(`contract-${date}.pdf`)); // write to PDF
	// 	doc.pipe(res); // HTTP response
	// 	doc.image('test.jpg', 15, 10, { width: 85 });
	// 	doc.fontSize(15);
	// 	doc.text(`CONTRAT DE LOCATION EN MEUBLÉ SAISONNIER`, 110, 10, {
	// 		align: 'center',
	// 		width: 480,
	// 	});
	// 	doc.fontSize(8);
	// 	doc.text(
	// 		`Madame, Monsieur. Suite à votre demande, je vous adresse le présent contrat de location dont 1 exemplaire est à me retourner (par
	// 		courrier ou mail) revêtu de votre signature et accompagné du montant de l’acompte (virement ou courrier). En espérant avoir le plaisir
	// 		de vous accueillir prochainement, recevez mes sincères salutations.`,
	// 		110,
	// 		30,
	// 		{
	// 			align: 'left',
	// 			width: 480,
	// 		}
	// 	);
	// 	doc.rect(15, 80, 253, 118).fillAndStroke('#ddd', '#000');
	// 	doc.fill('#000').stroke();
	// 	doc.fontSize(10);
	// 	doc.text(`Entre la société : Siège social`, 16, 82, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.text(`SAS WAO`, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.text(`1 Route de Nouart`, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.text(`08240 Fossé, FRANCE`, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.text(`Courrier : contact@gites-wao.fr`, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.text(`Site internet : http://www.gites-wao.fr`, {
	// 		align: 'center',
	// 		width: 253,
	// 		link: 'http://www.gites-wao.fr',
	// 		underline: true,
	// 	});
	// 	doc.text(`Tel: +33 (0)3 24 30 08 95`, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.text(`IBAN : FR76 1020 6084 0398 3877 2925 093`, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.text(`BIC : AGRIFRPP802`, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.text(`TITULAIRE : SAS WAO`, {
	// 		align: 'center',
	// 		width: 253,
	// 	});
	// 	doc.rect(340, 80, 253, 118).fillAndStroke('#ddd', '#000');
	// 	doc.fill('#000').stroke();
	// 	doc.text(`Et le locataire :`, 341, 82, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`Qualité : ${civilite}`, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`Prénom et Nom : ${prenom} ${nom}`, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`Adresse : ${adresse}`, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`CP & Ville : ${cp} ${ville}`, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`Pays : ${pays}`, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`Téléphone : ${tel}`, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`Courriel : ${mail}`, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`Pour la taxe de séjour, nombre de personnes :`, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.text(`Taxables : ${nbPers - nbEnf}   Non taxables :${nbEnf} `, {
	// 		align: 'left',
	// 		width: 253,
	// 	});
	// 	doc.rect(15, 205, 579, 15).fillAndStroke('#ddd', '#000');
	// 	doc.fill('#000').stroke();
	// 	doc.text(`CONDITIONS DE LOCATION :`, 15, 208, {
	// 		align: 'center',
	// 		width: 579,
	// 	});
	// 	doc.rect(15, 222, 579, 15).fillAndStroke(`${couleur1}`, '#000');
	// 	doc.fill('#000').stroke();
	// 	doc.text(`Désignation des lieux et descriptif du logement`, 15, 225, {
	// 		align: 'center',
	// 		width: 579,
	// 	});
	// 	doc.text(`${ctDesignationTitre}`, 15, 240, {
	// 		align: 'left',
	// 		width: 560,
	// 	});
	// 	doc.moveDown(0.3);
	// 	doc.text(`Principales caractéristiques :`, {
	// 		underline: true,
	// 		align: 'left',
	// 		width: 560,
	// 	});
	// 	doc.moveDown(0.3);
	// 	doc.text(`${ctPrincipCaracConv}`, {
	// 		align: 'left',
	// 		width: 560,
	// 	});
	// 	doc.moveDown(0.3);
	// 	doc.text(`Situation du logement dans la localité :`, {
	// 		underline: true,
	// 		align: 'left',
	// 		width: 560,
	// 	});
	// 	doc.moveDown(0.3);
	// 	doc.text(`${ctSituLogConv}`, {
	// 		align: 'left',
	// 		width: 560,
	// 	});
	// 	doc.moveDown(0.3);
	// 	doc.text(`Descriptif du logement :`, {
	// 		underline: true,
	// 		align: 'left',
	// 		width: 560,
	// 	});
	// 	doc.moveDown(0.3);
	// 	doc.text(`${ctDescLogConv}`, {
	// 		align: 'left',
	// 		width: 560,
	// 	});
	// 	doc.text(`VOS INITIALES`, 15, 700, {
	// 		align: 'left',
	// 		width: 560,
	// 	});
	// 	doc.text(`${nom} ${prenom} DATE ${ceGite.nom}`, 15, 700, {
	// 		align: 'right',
	// 		width: 560,
	// 	});
	// 	doc.addPage();
	// 	doc.rect(15, 10, 579, 15).fillAndStroke(`${couleur1}`, `#000`);
	// 	doc.fill('#000').stroke();
	// 	doc.fontSize(12);
	// 	doc.text(`Durée de la location`, 15, 13, {
	// 		align: 'center',
	// 		width: 579,
	// 	});
	// 	doc.moveDown(0.3);
	// 	doc.fontSize(10);
	// 	doc.text(
	// 		`La présente location est consentie et acceptée pour une durée de : ${nbNuites} nuitées
	// 	Elle commence le ${dateArrivee} ${heureArrivee} et se terminera le ${dateDepart} ${heureDepart}
	// Elle ne pourra en aucun cas être prorogée, sauf accord écrit et préalable du propriétaire.
	// Pour nous permettre de nous organiser, (le gîte est à 4 km de l’habitation principale du propriétaire), vous devez nous avertir quelques jours à l'avance de votre heure d'arrivée (par mail ou téléphone).`,
	// 		{
	// 			align: 'left',
	// 			width: 579,
	// 		}
	// 	);
	// 	doc.rect(15, 80, 579, 15).fillAndStroke(`${couleur1}`, '#000');
	// 	doc.fill('#000').stroke();
	// 	doc.fontSize(12);
	// 	doc.text(`Prix en Euros`, 15, 82, {
	// 		align: 'center',
	// 		width: 579,
	// 	});
	// 	doc.fontSize(10);
	// 	doc.text(
	// 		`La présente location saisonnière a lieu moyennant la somme de (minimum fixe de base)`,
	// 		{
	// 			align: 'left',
	// 			width: 579,
	// 		}
	// 	);
	// 	doc.text(
	// 		`La présente location saisonnière a lieu moyennant la somme de (minimum fixe de base)`,
	// 		{
	// 			align: 'right',
	// 			width: 579,
	// 		}
	// 	);
	// 	doc.end();
	// 	// res.json({
	// 	// 	message: 'Ok !!!',
	// 	// });
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
