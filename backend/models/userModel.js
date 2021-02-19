import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			unique: true,
		},
		avatar: {
			type: String,
			require: true,
			default:
				'https://gites-wao.s3.eu-west-3.amazonaws.com/XtTtYYZ0fy-avatar-neutre-300x254.png',
		},
		password: {
			type: String,
			require: true,
		},
		isAdmin: {
			type: Boolean, //Ajouter 3 niveaux : 0-Admin, 1-salariés, 2-utilisateurs
			require: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.methods.matchPassword = async function (enteredPassord) {
	return await bcrypt.compare(enteredPassord, this.password);
};

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
