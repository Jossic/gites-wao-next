import Gite from '../models/giteModel.js';
import asyncHandler from 'express-async-handler';

// @desc      Fetch all gites
// @route     GET /api/gites
// @access    Public
const getGites = asyncHandler(async (req, res) => {
	const gites = await Gite.find({});
	res.json(gites);
});

// @desc      Fetch gite by nom
// @route     GET /api/gites/:nom
// @access    Public
const getGiteByNom = asyncHandler(async (req, res) => {
	const slug = req.params.slug;
	const gite = await Gite.findOne({ slug });
	res.json(gite);
});

export { getGites, getGiteByNom };
