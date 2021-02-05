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
	const { titre, lien, categorie, actif } = req.body;

	const partenaire = await Partenaire.findById(req.params.id);
	if (partenaire) {
		titre && (partenaire.titre = titre);
		lien && (partenaire.lien = lien);
		categorie && (partenaire.categorie = categorie);
		actif && (partenaire.actif = actif);

		const updatedLien = await partenaire.save();
		res.json(updatedLien);
	} else {
		res.status(404);
		throw new Error('Lien non trouvée');
	}
});

export {
	updatePartenaire,
	removePartenaire,
	createPartenaire,
	getAllPartenaires,
	getPartenaireById,
	// getLiensByCategorie,
};
