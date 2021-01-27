import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const qrSchema = mongoose.Schema(
	{
		question: {
			type: String,
			unique: true,
		},
		reponse: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const QR = mongoose.model('QR', qrSchema);

export default QR;
