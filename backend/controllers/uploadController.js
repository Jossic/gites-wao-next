import Photo from '../models/photoModel.js';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';
import stripHtml from 'string-strip-html';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';

// @desc      Add an Image
// @route     POST /api/upload-image
// @access    Private/Admin
const savePhoto = (req, res) => {
	console.log('req.files => ', req.files);
	console.log('req.body => ', req.body);
};

const saveFile = (req, res) => {
	//
};

export {
	getGites,
	getGiteByNom,
	deleteGite,
	createGite,
	updateGite,
	getGitesNoms,
	savePhoto,
	saveFile,
};
