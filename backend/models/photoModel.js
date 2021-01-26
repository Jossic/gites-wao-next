import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const photoSchema = mongoose.Schema(
	{
		data: {
			type: String,
		},
		nom: {
			type: String,
			unique: true,
		},
		alt: {
			type: String,
		},
		location: {
			type: String,
		},
		pageAssociee: {
			type: String,
		},
		sectionAssociee: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;
