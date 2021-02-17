import asyncHandler from 'express-async-handler';
import Mailer from '../models/mailerModel.js';

// @desc      Fetch all Mailers
// @route     GET /api/mailer
// @access    PubPrivate/Adminlic
const getAllMailers = asyncHandler(async (req, res) => {
	const mailers = await Mailer.find({});
	res.json(mailers);
});

// @desc      Fetch one mailer by Id
// @route     GET /api/mailer/:id
// @access    Private/Admin
const getMailerById = asyncHandler(async (req, res) => {
	const mailer = await Mailer.findById(req.params.id);

	if (mailer) {
		res.json(mailer);
	} else {
		res.status(404);
		throw new Error('Mailer non trouvé');
	}
});

// @desc      Create a mailer
// @route     POST /api/mailer
// @access    Private/Admin
const createMailer = async (req, res) => {
	const {
		nom,
		description,
		sujet,
		corps,
		declencheurDate,
		declencheurAction,
		actif,
	} = req.body;

	const mailer = new Mailer({
		nom,
		description,
		sujet,
		corps,
		declencheurDate,
		declencheurAction,
		actif,
	});

	console.log('Mailer dans le back', mailer);

	mailer.save((error, mailer) => {
		if (error) return res.status(400).json({ error });
		if (mailer) {
			res.status(201).json({
				mailer,
				message:
					'Votre mailer à bien été créé, redirection en cours...',
			});
		}
	});
};

// @desc      Delete a mailer
// @route     GET /api/mailer
// @access    Private/Admin
const removeMailer = asyncHandler(async (req, res) => {
	const mailer = await Mailer.findById(req.params.id);
	if (mailer) {
		await mailer.remove();
		res.json({
			text: 'Mailer correctement supprimé',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      Add a response
// @route     PUT /api/mailer/:id
// @access    Private/Admin
const updateMailer = asyncHandler(async (req, res) => {
	const {
		nom,
		description,
		sujet,
		corps,
		declencheurDate,
		declencheurAction,
		actif,
	} = req.body;

	const mailer = await Mailer.findById(req.params.id);
	console.log('mailer apres requete', mailer);
	if (mailer) {
		nom && (mailer.nom = nom);
		description && (mailer.description = description);
		sujet && (mailer.sujet = sujet);
		corps && (mailer.corps = corps);
		declencheurDate && (mailer.declencheurDate = declencheurDate);
		declencheurAction && (mailer.declencheurAction = declencheurAction);
		actif && (mailer.actif = actif);

		const updatedMailer = await mailer.save();
		res.json({
			updatedMailer,
			message: 'Le mailer a bien été modifié, redirection en cours',
		});
	} else {
		res.status(404);
		throw new Error('Mailer non trouvée');
	}
});

export {
	getAllMailers,
	getMailerById,
	createMailer,
	removeMailer,
	updateMailer,
};
