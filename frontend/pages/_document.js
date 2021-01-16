import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
	setGoogleTags() {
		if (publicRuntimeConfig.PRODUCTION) {
			return {
				__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-YZ51S1N4HZ');
				`,
			};
		}
	}

	render() {
		return (
			<Html lang='fr'>
				<Head>
					<meta charSet='UTF-8' />

					<link
						rel='stylesheet'
						href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
					/>
					{/* <link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
						integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
						crossOrigin='anonymous'
					/> */}
					<link rel='stylesheet' href='styles/globals.css' />
					<script
						async
						src='https://www.googletagmanager.com/gtag/js?id=G-YZ51S1N4HZ'></script>

					<script
						dangerouslySetInnerHTML={this.setGoogleTags()}></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
