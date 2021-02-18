import Client from '../models/ClientModel.js';
import asyncHandler from 'express-async-handler';
import Mailer from '../models/mailerModel.js';
import sendEmailWithNodemailer from '../utils/email.js';

// @desc      Fetch all clients
// @route     GET /api/client
// @access    Private/Admin
const getAllClients = asyncHandler(async (req, res) => {
	const clients = await Client.find({});
	res.json(clients);
});

// @desc      Fetch one Client by Id
// @route     GET /api/client/:id
// @access    Private/Admin
const getClientById = asyncHandler(async (req, res) => {
	const client = await Client.findById(req.params.id);

	if (client) {
		res.json(client);
	} else {
		res.status(404);
		throw new Error('Client non trouvé');
	}
});

// @desc      Delete a client
// @route     GET /api/client/:id
// @access    Private/Admin
const removeClient = asyncHandler(async (req, res) => {
	const client = await Client.findById(req.params.id);
	if (client) {
		await client.remove();
		res.json({
			text: 'Client correctement supprimé',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      update a client
// @route     PUT /api/client/:id
// @access    Private/Admin
const updateClient = asyncHandler(async (req, res) => {
	const { reponse } = req.body;

	const client = await Client.findById(req.params.id);
	console.log('client apres requete', client);
	if (client) {
		reponse && (client.reponse = reponse);

		const updatedClient = await client.save();
		res.json({
			updatedClient,
			message: 'Client bien ajouté',
		});
	} else {
		res.status(404);
		throw new Error('Client non trouvée');
	}
});

// @desc      update a client
// @route     PUT /api/client/:id
// @access    Private/Admin
const sendEmail = asyncHandler(async (req, res) => {
	const mailer = await Mailer.findById('602ecbcf578176230cc2a670');
	console.log(mailer);
	// console.log(req);
	// console.log(res);
	//Envoi du mail venant de soi-même au client
	const emailData = {
		from: process.env.NODE_MAILER_USER,
		to: process.env.NODE_MAILER_USER,
		subject: `${mailer.sujet}`,
		html: `${mailer.corps}`,
	};

	sendEmailWithNodemailer(req, res, emailData);
	res.json({
		message: 'Mail envoyé',
	});
});

export { getAllClients, getClientById, removeClient, updateClient, sendEmail };
