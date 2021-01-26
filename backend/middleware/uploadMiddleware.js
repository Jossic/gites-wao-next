import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';
import fs from 'fs';
import shortid from 'shortid';
import Photo from '../models/photoModel.js';
import mongoose from 'mongoose';

dotenv.config();

AWS.config.getCredentials(function (err) {
	if (err) console.log(err.stack);
	// credentials not loaded
	else {
		console.log('Access key:', AWS.config.credentials.accessKeyId);
		console.log('Region: ', AWS.config.region);
	}
});

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

console.log(process.env.BUCKET_NAME);
const s3 = new AWS.S3({
	apiVersion: '2006-03-01',
	accessKeyId,
	secretAccessKey,
});

const uploadS3 = multer({
	storage: multerS3({
		s3: s3,
		bucket: process.env.BUCKET_NAME,
		acl: 'public-read',
		contentType: multerS3.AUTO_CONTENT_TYPE,
		metadata: function (req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function (req, file, cb) {
			cb(null, shortid.generate() + '-' + file.originalname);
		},
	}),
	limits: { fileSize: 5000000 }, // In bytes: 2000000 bytes = 5 MB
}).array('photos');

const uploadAWSS3 = async (req, res) => {
	// console.log(req.files.photos);
	let params;
	let photosLocation = [];
	let photo = new Photo();

	// const boucle = async (photosLocation) => {
	for (let i = 0; i < req.files.photos.length; i++) {
		params = {
			Bucket: 'gites-wao',
			Key: shortid.generate() + '-' + req.files.photos[i].name,
			Body: req.files.photos[i].data,
		};
		s3.upload(params, (err, data) => {
			if (err) {
				console.log('erreur =>', err);
				return;
			} else {
				photo.location = data.Location;
				photo.nom = req.files.photos[i].name;
				photo.save();
				photo = new Photo();
			}
		});
	}

	// console.log('photosLocation Array', photosLocation); // retourne []
	// const log = async (photosLocation) => {
	// 	await boucle();
	// };
	// log();
	// Photo.insertMany(photosLocation, (error, docs) => {
	// 	if (error) {
	// 		console.log(error);
	// 	} else {
	// 		return res.json({
	// 			message: 'images sauvegardées',
	// 		});
	// 	}
	// });
};

export { uploadAWSS3, uploadS3 };
