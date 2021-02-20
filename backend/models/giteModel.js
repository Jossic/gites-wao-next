import mongoose from 'mongoose';

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
		capaciteMAx: {
			type: Number,
		},
		nbCouchage: {
			type: Number,
		},
		calendrierLink: {
			type: String,
		},
		//Elements calcul du tarif
		tarifDeBase: {
			//Ex 1135 sur brinchette
			type: Number,
		},
		ftMenage: {
			type: Number,
		},
		ftLit: {
			type: Number,
		},
		nPers: {
			type: Number,
			default: 15,
		},
		supplementParPers: {
			//Au dela de 15 personnes
			type: Number,
		},
		tarifParPersParNuit: {
			//hors WE et vacances scolaires
			type: Number,
		},
		coefficients: {
			troisNuitees: { type: Number, default: 220 },
			quatreNuitees: { type: Number, default: 430 },
			uneNuitee: { type: Number, default: 80 },
			basseSaison: { type: Number, default: 380 },
			moyenneSaison: { type: Number, default: 160 },
			hauteSaison: { type: Number, default: 180 },
			noel: { type: Number, default: 670 },
			nouvelAn: { type: Number, default: 200 },
		},
	},
	{
		timestamps: true,
	}
);

const Gite = mongoose.model('Gite', giteSchema);

export default Gite;
