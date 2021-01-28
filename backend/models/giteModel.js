import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const reviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
);

const giteSchema = mongoose.Schema(
	{
		nom: {
			type: String,
			unique: true,
		},
		mtitle: {
			type: String,
		},
		presGiteSEO: {
			type: String,
		},
		mdesc: {
			type: {},
		},
		slug: {
			type: String,
			unique: true,
			index: true,
		},

		couleur1: {
			type: String,
		},
		couleur2: {
			type: String,
		},
		videoLink: {
			type: String,
		},
		texteExterieur: {
			type: {},
			min: 20,
			max: 2000000,
		},
		equipementExterieur: {
			type: [],
		},
		texteInterieur: {
			type: {},
			min: 20,
			max: 2000000,
		},
		equipementInterieur: {
			type: [],
		},
		textePiscine: {
			type: {},
			min: 20,
			max: 2000000,
		},
		equipementPiscine: {
			type: [],
		},
		texte: {
			type: {},
			min: 20,
			max: 2000000,
		},
		detailGite: {
			type: {},
			min: 20,
			max: 2000000,
		},
		reviews: [reviewSchema],
		capacite: {
			type: Number,
		},
		calendrierLink: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Gite = mongoose.model('Gite', giteSchema);

export default Gite;
