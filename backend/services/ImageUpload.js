import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
const s3 = new aws.S3();

aws.config.update({
	secretAccessKey: process.env.S3_ACCESS_SECRET,
	accessKeyId: process.env.S3_ACCESS_KEY,
	region: 'eu-west-3',
});

const upload = multer({
	storage: multerS3({
		acl: 'public-read',
		s3,
		bucket: process.env.BUCKET_NAME,
		metadata: function (req, file, cb) {
			cb(null, { fieldName: 'TESTING_METADATA' });
		},
		key: function (req, file, cb) {
			cb(null, Date.now().toString());
		},
	}),
});

export { upload };
