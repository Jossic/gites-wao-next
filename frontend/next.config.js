module.exports = {
	images: {
		domains: [
			'gites-wao.s3.amazonaws.com',
			'gites-wao.s3.eu-west-3.amazonaws.com',
		],
	},
	publicRuntimeConfig: {
		APP_NAME: 'Gites-Wao',
		API_DEVELOPMENT: 'http://localhost:8000/api',
		API_PRODUCTION: 'http://157.230.119.145/api',
		PRODUCTION: false,
		DOMAIN_DEVELOPMENT: 'http://localhost:3000',
		DOMAIN_PRODUCTION: 'http://157.230.119.145',
		RECAPTCHA_SECRET_KEY: '6Lc7RVEaAAAAAM-5Cz6jkoSTzGj5abKjMXuL8Yb5',
	},
};
