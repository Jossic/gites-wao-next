import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const photoSchema = mongoose.Schema(
	{
		nom: {
			type: String,
			unique: true,
		},
		alt: {
			type: String,
		},
		lien: {
			type: String,
		},
		pageAssociée: {
			type: String,
		},
		sectionAssociée: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
