import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
	{
		client: { type: String, required: true, unique: true },
		note: { type: Number, required: true },
		commentaire: { type: String },
		giteConcerne: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
