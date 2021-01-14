import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const giteSchema = mongoose.Schema(
	{
		nom: {
			type: String,
			unique: true,
		},
		images: {
			data: Buffer,
			contentType: String,
		},
	},
	{
		timestamps: true,
	}
);

const Gite = mongoose.model('Gite', giteSchema);

export default Gite;
