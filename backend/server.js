import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

import gitesRoutes from './routes/gitesRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api', gitesRoutes);
app.use('/api', userRoutes);

// app.get('/api/config/paypal', (req, res) =>
// 	res.send(process.env.PAYPAL_CLIENT_ID)
// );

// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running...');
	});
}

const PORT = process.env.PORT || 8000;

app.listen(
	PORT,
	console.log(
		`Server runnning in ${process.env.NODE_ENV} on port ${PORT}...`.yellow
			.bold
	)
);
