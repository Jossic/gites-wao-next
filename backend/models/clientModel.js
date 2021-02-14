import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const clientSchema = mongoose.Schema(
	{
		nom: { type: String, required: true },
		prenom: { type: String, required: true },
		adresse: { type: String },
		cp: { type: String },
		ville: { type: String },
		pays: { type: String },
		tel: { type: Number },
		mail: { type: String },
		nbVenu: { type: Number },
		Note: { type: String },
	},
	{
		timestamps: true,
	}
);

const Client = mongoose.model('Client', clientSchema);

export default Client;
