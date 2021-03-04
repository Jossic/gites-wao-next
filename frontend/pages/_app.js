import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import darkTheme from './darkTheme';

export default function App({ Component, pageProps }) {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>

				{/* Swiper */}
				<link
					rel='stylesheet'
					href='https://unpkg.com/swiper/swiper-bundle.css'
				/>
				<link
					rel='stylesheet'
					href='https://unpkg.com/swiper/swiper-bundle.min.css'
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
			<ThemeProvider theme={darkTheme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>

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
			{/* Swiper */}
			<script src='https://unpkg.com/swiper/swiper-bundle.js'></script>
			<script src='https://unpkg.com/swiper/swiper-bundle.min.js'></script>
		</>
	);
}

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
