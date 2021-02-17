import mongoose from 'mongoose';

const mailerSchema = mongoose.Schema(
	{
		nom: { type: String, required: true, unique: true },
		description: { type: String, required: true },
		sujet: { type: String, required: true },
		corps: { type: {}, required: true },
		declencheurDate: { type: Date },
		declencheurAction: { type: String },
		actif: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

const Mailer = mongoose.model('Mailer', mailerSchema);

export default Mailer;
