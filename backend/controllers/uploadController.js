import Photo from '../models/photoModel.js';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';
import stripHtml from 'string-strip-html';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';
import { uploadAWSS3 } from '../middleware/uploadMiddleware.js';

// @desc      Update an image after added it
// @route     PUT /api/save-images-data/:nom
// @access    Private/Admin
const savePhotosData = asyncHandler(async (req, res) => {
	// console.log('req.body', req.body.items);
	const photos = req.body.items;
	photos.map(async (photo, index) => {
		const { nom, alt, page, section, titreCarousel, texteCarousel } = photo;
		const image = await Photo.findOne({ nom });
		if (image) {
			image.nom = nom;
			image.alt = alt;
			image.pageAssociee = page;
			image.sectionAssociee = section;
			image.titreCarousel = titreCarousel;
			image.texteCarousel = texteCarousel;

			const updatedImage = await image.save();
		} else {
			res.status(404);
			throw new Error('Image non trouvée');
		}

		// for (const i in photo) {
		// 	console.log(
		// 		`photo à l'index ${index} => ${photo} - ${i} : ${photo[i]}`
		// 	);
	});
	res.json({
		message: 'Images envoyées',
	});
});

const saveFile = (req, res) => {
	//
};

export { savePhotosData, saveFile };
