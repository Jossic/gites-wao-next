import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const reservationSchema = mongoose.Schema(
	{
		gite: { type: ObjectId, ref: 'Gite', required: true },
		client: { type: ObjectId, ref: 'Client', required: true },
		nbPers: { type: Number, required: true },
		nbPersSup: { type: Number },
		nbEnf: { type: Number, required: true },
		dateRes: { type: Date },
		dateContrat: { type: Date },
		dateArrivee: { type: Date, required: true },
		heureArrivee: { type: Date },
		dateDepart: { type: Date, required: true },
		heureDepart: { type: Date },
		nbNuites: { type: Number },
		status: { type: String, default: 'Nouvelle réservation' },
		nbChien: { type: Number, default: 0 },
		mtAnimaux: { type: Number, default: 0 },
		contactMail: { type: Boolean },
		contactTel: { type: Boolean },
		contactAbritel: { type: Boolean },
		contactLeboncoin: { type: Boolean },
		contactAutre: { type: Boolean },
		totalTarifBase: { type: Number, default: 0 },
		totalTarifSuppl: { type: Number, default: 0 },
		resteAPayer: { type: Number },
		taxeSejour: { type: Number, default: 0 },
		remise: { type: Number, default: 0 },
		labelRemise: { type: String },
		infoCompl: { type: String },
		litFait: { type: Boolean, default: false },
		totalFtLit: { type: Number },
		totalTfMenage: { type: Number },
		mtCaution: { type: Number, default: 350 },
		commentaire: { type: String },
		pdfLink: { type: String },
	},
	{
		timestamps: true,
	}
);

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
