import axios from 'axios';

const validateHuman = async (token) => {
	const secret = process.env.RECAPTCHA_SECRET_KEY;
	const response = await axios.post(
		`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
	);
	const data = await response;
	// console.log('data validateHuman', data);
	return data.data.success;
};

export default validateHuman;
