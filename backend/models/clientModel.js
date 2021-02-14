import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const clientSchema = mongoose.Schema(
	{
		civilite: { type: String },
		nom: { type: String, required: true },
		prenom: { type: String, required: true },
		adresse: { type: String, required: true },
		cp: { type: String, required: true },
		ville: { type: String, required: true },
		pays: { type: String, required: true },
		tel: { type: Number, required: true },
		mail: { type: String, required: true },
		nbVenu: { type: Number },
		commentaire: { type: String },
	},
	{
		timestamps: true,
	}
);

const Client = mongoose.model('Client', clientSchema);

export default Client;
