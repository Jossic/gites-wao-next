import Reservation from '../models/ReservationModel.js';
import asyncHandler from 'express-async-handler';
import validateHuman from '../utils/validateHuman.js';
import Client from '../models/clientModel.js';
import Gite from '../models/giteModel.js';

// @desc      Fetch all reservations
// @route     GET /api/reservation
// @access    Public
const getAllReservations = asyncHandler(async (req, res) => {
	const reservations = await Reservation.find({});
	res.json(reservations);
});

// @desc      Fetch one Reservation by Id
// @route     GET /api/Reservation/:id
// @access    Public
const getReservationById = asyncHandler(async (req, res) => {
	const reservation = await Reservation.findById(req.params.id);

	if (reservation) {
		res.json(reservation);
	} else {
		res.status(404);
		throw new Error('Reservation non trouvé');
	}
});

// @desc      Create a Reservation
// @route     POST /api/Reservation
// @access    Private/Admin
const createReservation = async (req, res) => {
	const {
		gite,
		nbPers,
		nbEnf,
		dateArrivee,
		dateDepart,
		nbChien,
		contactPar,
		litFait,
		nom,
		prenom,
		adresse,
		civilite,
		cp,
		ville,
		pays,
		tel,
		mail,
	} = req.body;
	console.log('req.body vaut =>', req.body);

	// const human = await validateHuman(token);
	// if (!human) {
	// 	res.status(400);
	// 	res.json({ error: 'Vous avez été reconnu en tant que robot' });
	// 	return;
	// }

	//Checker l'adresse mail du client

	const dejaClient = await Client.findOne({ mail });
	// console.log('après requete dejaClient vaut :', dejaClient);

	if (dejaClient) {
		dejaClient.nbReserv = dejaClient.nbReserv + 1;
		const clientModifie = await dejaClient.save();

		// res.json({
		// 	clientModifie,
		// 	// messageClient: 'il semble que vous soyez déjà venu',
		// });
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
		});
		console.log('client dans le back', client);
		client.save((error, client) => {
			if (error) return res.status(400).json({ error });
			if (client) {
				console.log('client enregistré');
				res.status(201).json({
					client,
					message: 'client enregistré',
				});
			}
		});
	}

	const ceGite = await Gite.findOne({ slug: gite });

	const nouveauClient = await Client.findOne({ mail });

	const reservation = new Reservation({
		gite: ceGite._id,
		client: nouveauClient._id,
		nbPers,
		nbEnf,
		dateArrivee,
		dateDepart,
		nbChien,
		contactPar,
		litFait,
	});

	console.log('Reservation dans le back', reservation);

	reservation.save((error, reservation) => {
		console.log('error vaut : ', error);
		if (error) return res.status(400).json({ error });
		if (reservation) {
			res.status(201).json({
				reservation,
				message:
					'Votre reservation à bien été envoyé, nous reviendrons vers vous rapidement, redirection en cours...',
			});
		}
	});
};

// @desc      Delete a reservation
// @route     GET /api/reservation
// @access    Private/Admin
const removeReservation = asyncHandler(async (req, res) => {
	const reservation = await Reservation.findById(req.params.id);
	if (reservation) {
		await reservation.remove();
		res.json({
			text: 'Reservation correctement supprimé',
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
	getAllReservations,
	getReservationById,
	removeReservation,
	updateReservation,
};
