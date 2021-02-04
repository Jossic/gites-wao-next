import mongoose from 'mongoose';

const alentoursSchema = mongoose.Schema(
	{
		titre: { type: String, required: true, unique: true },
		lien: { type: String, required: true },
		categorie: { type: String, required: true },
		actif: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

const Alentours = mongoose.model('Alentours', alentoursSchema);

export default Alentours;
