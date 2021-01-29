import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
	{
		client: { type: String, required: true },
		note: { type: Number, required: true },
		commentaire: { type: String, required: true },
		giteConcerné: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
