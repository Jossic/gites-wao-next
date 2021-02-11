import Message from '../models/MessageModel.js';
import asyncHandler from 'express-async-handler';
import validateHuman from '../utils/validateHuman.js';

// @desc      Fetch all Messages
// @route     GET /api/messages
// @access    Public
const getAllMessages = asyncHandler(async (req, res) => {
	const messages = await Message.find({});
	res.json(messages);
});

// @desc      Fetch one Message by Id
// @route     GET /api/Message/:id
// @access    Public
const getMessageById = asyncHandler(async (req, res) => {
	const message = await Message.findById(req.params.id);

	if (message) {
		res.json(message);
	} else {
		res.status(404);
		throw new Error('Message non trouvé');
	}
});

// @desc      Count number of new message
// @route     GET /api/message/count
// @access    Public
const getNumberOfNewMessage = asyncHandler(async (req, res) => {
	const message = await Message.find({ vu: false });

	// console.log('message ', message);
	// console.log('message taille ', message.length);
	if (message.length === 0) {
		res.json(0);
	} else if (message.length > 0) {
		res.json(message.length);
	} else {
		res.status(404);
		throw new Error('Pas de message trouvé');
	}
});

// @desc      Create a Message
// @route     POST /api/Message
// @access    Private/Admin
const createMessage = async (req, res) => {
	const { nom, mail, msg, tel, vu, token } = req.body;

	const human = await validateHuman(token);
	if (!human) {
		res.status(400);
		res.json({ error: 'Vous avez été reconnu en tant que robot' });
		return;
	}

	const message = new Message({
		nom,
		mail,
		msg,
		tel,
		vu,
		token,
	});

	console.log('Message dans le back', message);

	message.save((error, message) => {
		if (error) return res.status(400).json({ error });
		if (message) {
			res.status(201).json({
				message,
				text:
					'Votre message à bien été envoyé, nous reviendrons vers vous rapidement, redirection en cours...',
			});
		}
	});
};

// @desc      Delete a Message
// @route     GET /api/message
// @access    Private/Admin
const removeMessage = asyncHandler(async (req, res) => {
	const message = await Message.findById(req.params.id);
	if (message) {
		await message.remove();
		res.json({
			text: 'Message correctement supprimé',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      Add a response
// @route     PUT /api/message/:id
// @access    Private/Admin
const messageResponse = asyncHandler(async (req, res) => {
	const { reponse } = req.body;

	const message = await Message.findById(req.params.id);
	console.log('message apres requete', message);
	if (message) {
		reponse && (message.reponse = reponse);
		message.dateReponse = Date.now();
		message.repondu = true;
		console.log('message avant save', message);

		const updatedMessage = await message.save();
		res.json(updatedMessage);
	} else {
		res.status(404);
		throw new Error('Message non trouvée');
	}
});
// @desc      Set Vu = true
// @route     PUT /api/message/:id/vu
// @access    Private/Admin
const setVu = asyncHandler(async (req, res) => {
	const message = await Message.findById(req.params.id);
	if (message) {
		message.vu = true;

		const updatedMessage = await message.save();
		res.json(updatedMessage);
	} else {
		res.status(404);
		throw new Error('Message non trouvée');
	}
});

export {
	getAllMessages,
	getMessageById,
	createMessage,
	removeMessage,
	getNumberOfNewMessage,
	messageResponse,
	setVu,
};
