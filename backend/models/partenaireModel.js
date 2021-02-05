import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const cardSchema = mongoose.Schema(
	{
		titre: { type: String, required: true },
		mail: { type: String },
		tel: { type: Number },
		adresse: { type: String },
		texte: { type: String },
		site: { type: String },
		image: { type: ObjectId, ref: 'Photo', required: true },
		actif: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

const partenaireSchema = mongoose.Schema(
	{
		nom: { type: String, required: true, unique: true },
		slug: { type: String, unique: true },
		presPartenaire: { type: String },
		actif: { type: Boolean, default: false },
		listePartenairesCards: [cardSchema],
	},
	{
		timestamps: true,
	}
);

const Partenaire = mongoose.model('Partenaire', partenaireSchema);

export default Partenaire;
