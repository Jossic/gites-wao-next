// pages/_app.js
import React from 'react';
import Head from 'next/head';
// import { Provider } from 'react-redux';
// import { useStore } from '../store';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
	// const store = useStore(pageProps.initialReduxState);
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>

				<link rel='stylesheet' href='/styles/globals.css' />
				<link
					rel='stylesheet'
					href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
					integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
					crossOrigin='anonymous'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
			</Head>
			<Component {...pageProps} />

			<script
				src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
				integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
				crossOrigin='anonymous'></script>
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx'
				crossOrigin='anonymous'></script>
			<link
				rel='stylesheet'
				href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
				integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
				crossOrigin='anonymous'
			/>
		</>
	);
}
