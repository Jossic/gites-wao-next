import Gite from '../models/giteModel.js';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';
import stripHtml from 'string-strip-html';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';

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
// @route     POST /api/gites
// @access    Private/Admin
const createGite = asyncHandler(async (req, res) => {
	let form = new formidable.IncomingForm();
	form.keepExtensions = true;
	form.parse(req, async (err, fields, files) => {
		if (err) {
			return res.status(400).json({
				error: "Impossible d'uploader l'image",
			});
		}

		const {
			nom,
			mtitle,
			presGiteSEO,
			logoGite,
			imagesCarrousel,
			autresImages,
			couleur1,
			couleur2,
			vidéoLink,
			texte1,
			detailGite,
			reviews,
			capacite,
			calendrierLink,
			pdf,
		} = fields;

		let gite = new Gite();

		gite.nom = nom;
		gite.mtitle = mtitle;
		gite.presGiteSEO = presGiteSEO;
		gite.mdesc = stripHtml(presGiteSEO.substring(0, 160));
		gite.slug = slugify(nom).toLowerCase();
		gite.logoGite = logoGite;
		gite.imagesCarrousel = imagesCarrousel;
		gite.autresImages = autresImages;
		gite.couleur1 = couleur1;
		gite.couleur2 = couleur2;
		gite.vidéoLink = vidéoLink;
		gite.texte1 = texte1;
		gite.detailGite = detailGite;
		gite.reviews = reviews;
		gite.capacite = capacite;
		gite.calendrierLink = calendrierLink;
		gite.pdf = pdf;

		if (files.logoGite) {
			if (files.logoGite.size > 10000000) {
				return res.status(400).json({
					error: "L'image est trop lourde (>1Mb)",
				});
			}
			gite.logoGite.data = fs.readFileSync(files.logoGite.path);
			gite.logoGite.contentType = files.logoGite.type;
		}

		if (files.imagesCarrousel) {
			if (files.imagesCarrousel.size > 10000000) {
				return res.status(400).json({
					error: "L'image est trop lourde (>1Mb)",
				});
			}
			gite.imagesCarrousel.data = fs.readFileSync(
				files.imagesCarrousel.path
			);
			gite.imagesCarrousel.contentType = files.imagesCarrousel.type;
		}
		if (files.autresImages) {
			if (files.autresImages.size > 10000000) {
				return res.status(400).json({
					error: "L'image est trop lourde (>1Mb)",
				});
			}
			gite.autresImages.data = fs.readFileSync(files.autresImages.path);
			gite.autresImages.contentType = files.autresImages.type;
		}

		const createdGite = await gite.save();
		res.status(201).json(createdGite);
	});
});

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
			if (files.logoGite) {
				if (files.logoGite.size > 10000000) {
					return res.status(400).json({
						error: "L'image est trop lourde (>1Mb)",
					});
				}
				ancienGite.logoGite.data = fs.readFileSync(files.logoGite.path);
				ancienGite.logoGite.contentType = files.logoGite.type;
			}

			if (files.imagesCarrousel) {
				if (files.imagesCarrousel.size > 10000000) {
					return res.status(400).json({
						error: "L'image est trop lourde (>1Mb)",
					});
				}
				ancienGite.imagesCarrousel.data = fs.readFileSync(
					files.imagesCarrousel.path
				);
				ancienGite.imagesCarrousel.contentType =
					files.imagesCarrousel.type;
			}
			if (files.autresImages) {
				if (files.autresImages.size > 10000000) {
					return res.status(400).json({
						error: "L'image est trop lourde (>1Mb)",
					});
				}
				ancienGite.autresImages.data = fs.readFileSync(
					files.autresImages.path
				);
				ancienGite.autresImages.contentType = files.autresImages.type;
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

export {
	getGites,
	getGiteByNom,
	deleteGite,
	createGite,
	updateGite,
	getGitesNoms,
};
