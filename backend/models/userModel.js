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
				'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F13%2F12%2F07%2Favatar-159236_640.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Ffr%2Fvectors%2Favatar-personne-neutre-l-homme-159236%2F&tbnid=aNt5NedUVkah_M&vet=12ahUKEwjmtaT2qqvuAhWq1eAKHfmaAz0QMygLegUIARC8AQ..i&docid=6yTXo7scPGG6-M&w=640&h=570&q=avatar%20image&ved=2ahUKEwjmtaT2qqvuAhWq1eAKHfmaAz0QMygLegUIARC8AQ',
		},
		password: {
			type: String,
			require: true,
		},
		isAdmin: {
			type: Boolean,
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
