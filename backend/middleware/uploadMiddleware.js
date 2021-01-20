import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';
import shortid from 'shortid';

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
	accessKeyId,
	secretAccessKey,
});

const uploadS3 = multer({
	storage: multerS3({
		s3: s3,
		bucket: process.env.BUCKET_NAME,
		acl: 'public-read',
		metadata: function (req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function (req, file, cb) {
			cb(null, shortid.generate() + '-' + file.originalname);
		},
	}),
});

export { uploadS3 };
