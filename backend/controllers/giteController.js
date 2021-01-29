import Gite from '../models/giteModel.js';
import Photo from '../models/photoModel.js';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';
import stripHtml from 'string-strip-html';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';
import QR from '../models/QRModel.js';

// @desc      Fetch all gites
// @route     GET /api/gites
// @access    Public
const getGites = asyncHandler(async (req, res) => {
	const gites = await Gite.find({});
	res.json(gites);
});

// @desc      Fetch all gites name
// @route     GET /api/gites/noms
// @access    Public
const getGitesNoms = asyncHandler(async (req, res) => {
	const gites = await Gite.find({}).select('nom slug');
	res.json(gites);
});

// @desc      Fetch gite by nom
// @route     GET /api/gites/:slug
// @access    Public
const getGiteByNom = asyncHandler(async (req, res) => {
	const slug = req.params.slug;
	const gite = await Gite.findOne({ slug });
	res.json(gite);
});

// @desc      Fetch photos by nom
// @route     GET /api/photo/:nom
// @access    Public
const getPhotosByNom = asyncHandler(async (req, res) => {
	const nom = req.params.nom;
	const gite = await Photo.find({ pageAssociee: nom });
	res.json(gite);
});

// @desc      Delete a Gite
// @route     DELETE /api/gites/:slug
// @access    Private/Admin
const deleteGite = asyncHandler(async (req, res) => {
	const slug = req.params.slug.toLowerCase();
	const gite = await Gite.findOne({ slug });
	console.log(gite);

	if (gite) {
		await gite.remove();
		res.json({ message: 'Ce gîte a bien été supprimé' });
	} else {
		res.status(404);
		throw new Error('Gite non trouvé');
	}
});

// @desc      Create a Gite
// @route     POST /api/gite
// @access    Private/Admin
const createGite = (req, res) => {
	const {
		nom,
		mtitle,
		presGiteSEO,
		couleur1,
		couleur2,
		videoLink,
		texteExterieur,
		equipementExterieur,
		texteInterieur,
		equipementInterieur,
		textePiscine,
		equipementPiscine,
		texte,
		detailGite,
		reviews,
		capacite,
		calendrierLink,
	} = req.body;

	let arrayOfEquipementExterieur =
		equipementExterieur && equipementExterieur.split(',');
	let arrayOfEquipementInterieur =
		equipementInterieur && equipementInterieur.split(',');
	let arrayOfEquipementPiscine =
		equipementPiscine && equipementPiscine.split(',');

	const gite = new Gite({
		nom,
		mtitle,
		presGiteSEO,
		mdesc: stripHtml(presGiteSEO.substring(0, 160)),
		slug: slugify(nom).toLowerCase(),
		couleur1,
		couleur2,
		videoLink,
		texteExterieur,
		equipementExterieur: arrayOfEquipementExterieur,
		texteInterieur,
		equipementInterieur: arrayOfEquipementInterieur,
		textePiscine,
		equipementPiscine: arrayOfEquipementPiscine,
		texte,
		detailGite,
		reviews,
		capacite,
		calendrierLink,
	});

	console.log('gite dans le back', gite);

	gite.save((error, gite) => {
		if (error) return res.status(400).json({ error });
		if (gite) {
			res.status(201).json({ gite, message: 'Le gîte a bien été créé' });
		}
	});
};

// @desc      Update a Gite
// @route     PUT /api/gites/:slug
// @access    Private/Admin
const updateGite = asyncHandler(async (req, res) => {
	const slug = req.params.slug.toLowerCase();

	Gite.findOne({ slug }).exec((err, ancienGite) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}

		let form = new formidable.IncomingForm();
		form.keepExtensions = true;

		form.parse(req, (err, fields, files) => {
			if (err) {
				return res.status(400).json({
					error: "Impossible d'uploader l'image",
				});
			}

			let slugBeforeMerge = ancienGite.slug;
			ancienGite = _.merge(ancienGite, fields);

			ancienGite.slug = slugBeforeMerge;

			const { nom, presGiteSEO } = fields;

			if (presGiteSEO) {
				ancienGite.mdesc = stripHtml(presGiteSEO.substring(0, 160));
			}

			if (nom) {
				ancienGite.slug = slugify(nom).toLowerCase();
			}

			ancienGite.save((err, result) => {
				if (err) {
					return res.status(400).json({
						error: err,
					});
				}
				res.json(result);
			});
		});
	});
});

// @desc      Fetch all photos
// @route     GET /api/photos
// @access    Private/Admin
const getAllPhotos = asyncHandler(async (req, res) => {
	const photos = await Photo.find({});
	res.json(photos);
});

// @desc      Fetch all QR
// @route     GET /api/qr
// @access    Private/Admin
const getAllQR = asyncHandler(async (req, res) => {
	const qrs = await QR.find({});
	res.json(qrs);
});

// @desc      Fetch one QR by Id
// @route     GET /api/qr/:id
// @access    Private/Admin
const getQRById = asyncHandler(async (req, res) => {
	const qr = await QR.findById(req.params.id);

	if (qr) {
		res.json(qr);
	} else {
		res.status(404);
		throw new Error('Q/R non trouvé');
	}
});

// @desc      Create a QR
// @route     POST /api/qr
// @access    Private/Admin
const createQR = (req, res) => {
	const { question, reponse } = req.body;

	// console.log('req', req);
	console.log('question', question);
	console.log('reponse', reponse);
	const qr = new QR({
		question,
		reponse,
	});

	console.log('QR dans le back', qr);

	qr.save((error, qr) => {
		if (error) return res.status(400).json({ error });
		if (qr) {
			res.status(201).json({
				qr,
				message: 'La Question/Réponse a bien été créée',
			});
		}
	});
};

// @desc      Delete a QR
// @route     GET /api/qr
// @access    Private/Admin
const removeQR = asyncHandler(async (req, res) => {
	const qr = await QR.findById(req.params.id);
	if (qr) {
		await qr.remove();
		res.json({
			message: 'Q/R correctement supprimée',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      Update a QR
// @route     GET /api/qr
// @access    Private/Admin
const updateQR = asyncHandler(async (req, res) => {
	const { question, reponse } = req.body;

	const qr = await QR.findById(req.params.id);

	if (qr) {
		question && (review.question = question);
		reponse && (review.reponse = reponse);

		const updatedQr = await qr.save();
		res.json(updatedQr);
	} else {
		res.status(404);
		throw new Error('Q/R non trouvée');
	}
});

export {
	getGites,
	getGiteByNom,
	deleteGite,
	createGite,
	updateGite,
	getGitesNoms,
	getAllPhotos,
	getQRById,
	getAllQR,
	createQR,
	removeQR,
	updateQR,
	getPhotosByNom,
};
