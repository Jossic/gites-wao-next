import Partenaire from '../models/PartenaireModel.js';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';

// @desc      Fetch all partenaires
// @route     GET /api/divers/partenaires
// @access    Public
const getAllPartenaires = asyncHandler(async (req, res) => {
	const partenaires = await Partenaire.find({});
	res.json(partenaires);
});

// @desc      Fetch one partenaire by Id
// @route     GET /api/divers/partenaires/:id
// @access    Private/Admin
const getPartenaireById = asyncHandler(async (req, res) => {
	const partenaire = await Partenaire.findById(req.params.id);

	if (partenaire) {
		res.json(partenaire);
	} else {
		res.status(404);
		throw new Error('Partenaire non trouvé');
	}
});

// @desc      Create a partenaire
// @route     POST /api/divers/partenaire
// @access    Private/Admin
const createPartenaire = (req, res) => {
	const { nom, presPartenaire, actif } = req.body;

	const partenaire = new Partenaire({
		nom,
		slug: slugify(nom).toLowerCase(),
		presPartenaire,
		actif,
	});

	console.log('Partenaire dans le back', partenaire);
	partenaire.save((error, partenaire) => {
		if (error) return res.status(400).json({ error });
		if (partenaire) {
			res.status(201).json({
				partenaire,
				message: 'Le partenaire a bien été créé',
			});
		}
	});
};

// @desc      Delete a partenaire
// @route     GET /api/divers/partenaire/:id
// @access    Private/Admin
const removePartenaire = asyncHandler(async (req, res) => {
	const partenaire = await Partenaire.findById(req.params.id);
	if (partenaire) {
		await partenaire.remove();
		res.json({
			message: 'Partenaire correctement supprimé',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      Update a partenaire
// @route     GET /api/divers/partenaire/:id
// @access    Private/Admin
const updatePartenaire = asyncHandler(async (req, res) => {
	const { nom, presPartenaire, actif } = req.body;

	const partenaire = await Partenaire.findById(req.params.id);
	if (partenaire) {
		nom && (partenaire.nom = nom);
		presPartenaire && (partenaire.presPartenaire = presPartenaire);
		actif && (partenaire.actif = actif);

		const updatedPartenaire = await partenaire.save();
		res.json(updatedPartenaire);
	} else {
		res.status(404);
		throw new Error('Partenaire non trouvé');
	}
});

// <----------------Card--------------->

// @desc      Fetch all partenaires cards
// @route     GET /api/divers/partenaires/:id/card
// @access    Public
const getAllPartenaireCards = asyncHandler(async (req, res) => {
	const partenaire = await Partenaire.findById(req.params.id);
	const partenaireCards = partenaire.listePartenairesCards;
	res.json(partenaireCards);
});

// @desc      Fetch one partenaire cards by Id
// @route     GET /api/divers/partenaires/:id/card/:idCard
// @access    Private/Admin
const getPartenaireCardById = asyncHandler(async (req, res) => {
	const partenaire = await Partenaire.findById(req.params.id);

	if (partenaire) {
		res.json(partenaire);
	} else {
		res.status(404);
		throw new Error('Partenaire non trouvé');
	}
});

// @desc      Create a partenaire card
// @route     POST /api/divers/partenaire/:id/card
// @access    Private/Admin
const createPartenaireCard = asyncHandler(async (req, res) => {
	const { titre, mail, tel, adresse, texte, site, image, actif } = req.body;

	const partenaire = await Partenaire.findById(req.params.id);

	if (partenaire) {
		const card = {
			titre,
			mail,
			tel,
			adresse,
			texte,
			site,
			image,
			actif,
		};

		partenaire.listePartenairesCards.push(card);

		console.log('partenaire dans le back -', partenaire);
		await partenaire.save();
		res.status(201).json({ message: 'Carte ajoutée' });
	} else {
		res.status(404);
		throw new Error('Catégorie non trouvée');
	}
});

// @desc      Delete a partenaire card
// @route     GET /api/divers/partenaire/:id/card/:idCard
// @access    Private/Admin
const removePartenaireCard = asyncHandler(async (req, res) => {
	const partenaire = await Partenaire.findById(req.params.id);
	if (partenaire) {
		await partenaire.remove();
		res.json({
			message: 'Partenaire correctement supprimé',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      Update a partenaire card
// @route     GET /api/divers/partenaire/:id/card/:idCard
// @access    Private/Admin
const updatePartenaireCard = asyncHandler(async (req, res) => {
	const { nom, presPartenaire, actif } = req.body;

	const partenaire = await Partenaire.findById(req.params.id);
	if (partenaire) {
		nom && (partenaire.nom = nom);
		presPartenaire && (partenaire.presPartenaire = presPartenaire);
		actif && (partenaire.actif = actif);

		const updatedPartenaire = await partenaire.save();
		res.json(updatedPartenaire);
	} else {
		res.status(404);
		throw new Error('Partenaire non trouvé');
	}
});

export {
	updatePartenaire,
	removePartenaire,
	createPartenaire,
	getAllPartenaires,
	getPartenaireById,
	createPartenaireCard,
	getAllPartenaireCards,
	getPartenaireCardById,
	updatePartenaireCard,
	removePartenaireCard,
};
