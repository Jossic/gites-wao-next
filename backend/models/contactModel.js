import mongoose from 'mongoose';

const contactSchema = mongoose.Schema(
	{
		nom: { type: String, required: true },
		mail: { type: String, required: true },
		message: { type: String, required: true },
		tel: { type: Number },
		// actif: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
