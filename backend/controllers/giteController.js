import Gite from '../models/giteModel.js';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';
import stripHtml from 'string-strip-html';

// @desc      Fetch all gites
// @route     GET /api/gites
// @access    Public
const getGites = asyncHandler(async (req, res) => {
	const gites = await Gite.find({});
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

	if (gite) {
		await gite.remove();
		res.json({ message: 'Gite supprimé' });
	} else {
		res.status(404);
		throw new Error('Gite non trouvé');
	}
});

// @desc      Create a Gite
// @route     POST /api/gites
// @access    Private/Admin
const createGite = asyncHandler(async (req, res) => {
	const gite = await Gite({
		nom: '',
		mtitle: '',
		presGiteSEO: 'Présentation du gîte optimisé SEO',
		mdesc: '',
		slug: '',
		logoGite: {},
		imagesCarrousel: {},
		autresImages: {},
		couleur1: '',
		couleur2: '',
		vidéoLink: '',
		texte1: {},
		detailGite: {},
		reviews: [],
		capacite: 0,
		calendrierLink: '',
		pdf: ',',
	});

	const createdGite = await gite.save();
	res.status(201).json(createdGite);
});

// @desc      Update a Gite
// @route     PUT /api/gites/:slug
// @access    Private/Admin
const updateGite = asyncHandler(async (req, res) => {
	const {
		nom,
		mtitle,
		presGiteSEO,
		mdesc,
		logoGite,
		imagesCarrousel,
		autresImages,
		couleur1,
		couleur2,
		videoLink,
		texte1,
		detailGite,
		reviews,
		capacite,
		calendrierLink,
		pdf,
	} = req.body;

	const gite = await Gite.findById(req.params.id);

	if (gite) {
		gite.nom = nom;
		gite.mtitle = mtitle;
		gite.presGiteSEO = presGiteSEO;
		gite.mdesc = mdesc;
		gite.logoGite = logoGite;
		gite.imagesCarrousel = imagesCarrousel;
		gite.autresImages = autresImages;
		gite.couleur1 = couleur1;
		gite.couleur2 = couleur2;
		gite.videoLink = videoLink;
		gite.texte1 = texte1;
		gite.detailGite = detailGite;
		gite.reviews = reviews;
		gite.capacite = capacite;
		gite.calendrierLink = calendrierLink;
		gite.pdf = pdf;

		const updatedGite = await Gite.save();
		res.json(updatedGite);
	} else {
		res.status(404);
		throw new Error('Produit non trouvé');
	}
});

export { getGites, getGiteByNom, deleteGite, createGite, updateGite };
