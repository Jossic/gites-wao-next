import Photo from '../models/photoModel.js';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';
import stripHtml from 'string-strip-html';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';
import { uploadAWSS3 } from '../middleware/uploadMiddleware.js';

// @desc      Add an Image
// @route     POST /api/upload-image
// @access    Private/Admin
const savePhotos = asyncHandler(async (req, res) => {
	// console.log('req.files', req.files);
	// console.log('req.body', req.body);
	// uploadAWSS3(req, res, (error, photoLoc) => {
	// 	const files = req.files;
	// 	console.log('files', req.files);
	// 	console.log('req', req);
	// 	console.log(photoLoc);
	// 	// console.log('req', req);
	// 	// console.log('res', res);
	// 	if (error) {
	// 		console.log('errors', error);
	// 		res.status(500).json({
	// 			status: 'fail',
	// 			error: error,
	// 		});
	// 	} else {
	// 		// If File not found
	// 		if (files === undefined) {
	// 			console.log('uploadProductsImages Error: No File Selected!');
	// 			res.status(500).json({
	// 				status: 'fail',
	// 				message: 'Error: No File Selected',
	// 			});
	// 		} else {
	// 			// If Success
	// 			let fileArray = files.photos,
	// 				fileLocation;
	// 			console.log('file Array length =>', fileArray.length);
	// 			const images = [];
	// 			for (let i = 0; i < fileArray.length; i++) {
	// 				fileLocation = fileArray[i].location;
	// 				console.log('filenm', fileLocation);
	// 				images.push(fileLocation);
	// 			}
	// 			// console.log('locationArray', fileLocation);
	// 			const photo = new Photo({
	// 				location: fileLocation,
	// 			});
	// 			const result = await photo.insertMany(fileLocation, {
	// 				ordered: true,
	// 			});
	// 			// Save the file name into database
	// 			res.status(200).json({
	// 				status: 'ok',
	// 				filesArray: fileArray,
	// 				locationArray: images,
	// 			});
	// 		}
	// 	}
	// });
	// const photo = new Photo({
	// 	data: img,
	// 	nom,
	// 	alt,
	// 	pageAssociee: page,
	// 	sectionAssociee: section,
	// });
	// console.log('photo dans le back', photo);
	// photo.save((error, image) => {
	// 	if (error) return res.status(400).json({ error });
	// 	if (image) {
	// 		res.status(201).json({
	// 			image,
	// 			message: 'La photo a bien été ajoutée',
	// 		});
	// 	}
	// });
});

const saveFile = (req, res) => {
	//
};

export { savePhotos, saveFile };
