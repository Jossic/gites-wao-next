import mongoose from 'mongoose';

const giteSchema = mongoose.Schema(
	{
		//Infos générales
		nom: {
			type: String,
			unique: true,
		},
		adresse: {
			type: String,
		},
		cp: {
			type: String,
		},
		ville: {
			type: String,
		},
		capaciteMax: {
			type: Number,
		},
		actif: {
			type: Boolean,
			default: false,
		},
		//Infos pages / SEO
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
		//Infos diverses
		videoLink: {
			type: String,
		},
		calendrierLink: {
			type: String,
		},
		calendarId: {
			type: String,
		},
		//Elements calcul du tarif
		tarifDeBase: {
			//Ex 1135 sur brinchette
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
		ftMenage: {
			type: Number,
		},
		ftLit: {
			type: Number,
		},
		caution: { type: Number, default: 350 },
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
