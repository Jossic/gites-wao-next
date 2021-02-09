import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
	{
		nom: { type: String, required: true },
		mail: { type: String, required: true },
		msg: { type: String, required: true },
		tel: { type: Number },
		vu: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
