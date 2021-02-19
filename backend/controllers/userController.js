import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /api/admin/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Identifiants et/ou mot de passe incorrects');
	}
});

// @desc    Register a new user
// @route   POST /api/admin
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error('Cet utilisateur existe déjà');
	}

	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error('Données invalides');
	}
});

const logout = (req, res) => {
	res.clearCookie('token');
	res.json({
		message: 'Vous êtes maintenant deconnecté.',
	});
};

// @desc      Fetch all users
// @route     GET /api/user
// @access    Private/Admin
const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

// @desc      Fetch one User by Id
// @route     GET /api/user/:id
// @access    Private/Admin
const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		res.json(user);
	} else {
		res.status(404);
		throw new Error('User non trouvé');
	}
});

// @desc      Create a user
// @route     POST /api/user
// @access    Private/Admin
const createUser = async (req, res) => {
	const { name, email, avatar, password, isAdmin } = req.body;

	const user = new User({
		name,
		email,
		avatar,
		password,
		isAdmin: false,
	});

	console.log('User dans le back', user);

	user.save((error, user) => {
		if (error) return res.status(400).json({ error });
		if (user) {
			res.status(201).json({
				user,
				message: 'Utilisateur créé, redirection en cours...',
			});
		}
	});
};

// @desc      Delete a user
// @route     GET /api/user/:id
// @access    Private/Admin
const removeUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (user) {
		await user.remove();
		res.json({
			text: 'Utilisateur correctement supprimé',
		});
	} else {
		return res.json({
			error: err,
		});
	}
});

// @desc      update a user
// @route     PUT /api/user/:id
// @access    Private/Admin
const updateUser = asyncHandler(async (req, res) => {
	const { reponse } = req.body;

	const user = await User.findById(req.params.id);
	console.log('user apres requete', user);
	if (user) {
		reponse && (user.reponse = reponse);

		const updatedUser = await user.save();
		res.json({
			updatedUser,
			message: 'User bien ajouté',
		});
	} else {
		res.status(404);
		throw new Error('User non trouvée');
	}
});

export {
	authUser,
	registerUser,
	logout,
	createUser,
	updateUser,
	removeUser,
	getAllUsers,
	getUserById,
};
