import Review from '../models/ReviewModel.js';
import asyncHandler from 'express-async-handler';

// @desc      Fetch all Reviews
// @route     GET /api/review
// @access    Private/Admin
const getAllReviews = asyncHandler(async (req, res) => {
	const reviews = await Review.find({});
	res.json(reviews);
});

// @desc      Fetch one Review by Id
// @route     GET /api/review/:id
// @access    Private/Admin
const getReviewById = asyncHandler(async (req, res) => {
	const review = await Review.findById(req.params.id);

	if (review) {
		res.json(review);
	} else {
		res.status(404);
		throw new Error('Review non trouvé');
	}
});

// @desc      Create a Review
// @route     POST /api/review
// @access    Private/Admin
const createReview = (req, res) => {
	const { client, note, commentaire, gite } = req.body;

	// console.log('req', req);
	console.log('question', question);
	console.log('reponse', reponse);
	const review = new Review({
		client,
		note,
		commentaire,
		giteConcerne: gite,
	});

	console.log('review dans le back', review);

	review.save((error, review) => {
		if (error) return res.status(400).json({ error });
		if (review) {
			res.status(201).json({
				review,
				message: 'La review a bien été créée',
			});
		}
	});
};

// @desc      Delete a Review
// @route     GET /api/review
// @access    Private/Admin
const removeReview = asyncHandler(async (req, res) => {
	const review = await Review.findById(req.params.id);
	if (review) {
		await review.remove();
		res.json({
			message: 'Review correctement supprimée',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      Update a Review
// @route     GET /api/review
// @access    Private/Admin
const updateReview = asyncHandler(async (req, res) => {
	const { client, note, commentaire, gite } = req.body;

	const review = await Review.findById(req.params.id);

	if (review) {
		review.client = client;
		review.note = note;
		review.commentaire = commentaire;
		review.gite = gite;

		const updatedReview = await review.save();
		res.json(updatedReview);
	} else {
		res.status(404);
		throw new Error('Review non trouvée');
	}
});

export {
	updateReview,
	removeReview,
	createReview,
	getAllReviews,
	getReviewById,
};
