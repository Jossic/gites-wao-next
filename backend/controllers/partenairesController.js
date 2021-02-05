import Alentours from '../models/AlentoursModel.js';
import asyncHandler from 'express-async-handler';

// @desc      Fetch all Liens
// @route     GET /api/divers/alentours
// @access    Public
const getAllPartenaires = asyncHandler(async (req, res) => {
	const liens = await Alentours.find({});
	res.json(liens);
});

// // @desc      Fetch all liens by categorie
// // @route     GET /api/divers/alentourss/:id
// // @access    Public
// const getLiensByCategorie = asyncHandler(async (req, res) => {
// 	const categorie = req.params.categorie;
// 	const liens = await Alentours.find({ categorie: categorie });
// 	res.json(liens);
// });

// @desc      Fetch one Lien by Id
// @route     GET /api/divers/alentours/:id
// @access    Private/Admin
const getPartenaireById = asyncHandler(async (req, res) => {
	const lien = await Alentours.findById(req.params.id);

	if (lien) {
		res.json(lien);
	} else {
		res.status(404);
		throw new Error('Lien non trouvé');
	}
});

// @desc      Create a lien
// @route     POST /api/divers/alentours
// @access    Private/Admin
const createPartenaire = (req, res) => {
	const { titre, lien, categorie, actif } = req.body;

	const link = new Alentours({
		titre,
		lien,
		categorie,
		actif,
	});

	console.log('Lien dans le back', link);
	link.save((error, link) => {
		if (error) return res.status(400).json({ error });
		if (link) {
			res.status(201).json({
				link,
				message: 'Le lien a bien été ajouté',
			});
		}
	});
};

// @desc      Delete a Review
// @route     GET /api/divers/alentours/:id
// @access    Private/Admin
const removePartenaire = asyncHandler(async (req, res) => {
	const lien = await Alentours.findById(req.params.id);
	if (lien) {
		await lien.remove();
		res.json({
			message: 'Lien correctement supprimé',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      Update a lien
// @route     GET /api/divers/alentours/:id
// @access    Private/Admin
const updatePartenaire = asyncHandler(async (req, res) => {
	const { titre, lien, categorie, actif } = req.body;

	const link = await Alentours.findById(req.params.id);
	if (link) {
		titre && (link.titre = titre);
		lien && (link.lien = lien);
		categorie && (link.categorie = categorie);
		actif && (link.actif = actif);

		const updatedLien = await link.save();
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
