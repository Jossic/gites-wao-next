import { google } from 'googleapis';

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarIdManola = process.env.CALENDAR_ID_MANOLA;
const calendarIdBrinchette = process.env.CALENDAR_ID_BRINCHETTE;
const calendarIdLauberoye = process.env.CALENDAR_ID_LAUBEROYE;
const calendarIdPetitNay = process.env.CALENDAR_ID_PETIT_NAY;
const calendarIdTest = process.env.CALENDAR_ID_TEST;

const SCOPES = 'https://www.googleapis.com/auth.calendar';
const calendar = google.calendar({ version: 'v3' });

const auth = new google.auth.JWT(
	CREDENTIALS.client_email,
	null,
	CREDENTIALS.private_key,
	SCOPES
);

const TIMEOFFSET = '+01:00';

const getEvents = async (dateDebut, dateFin) => {
	try {
		let response = await calendar.events.list({
			auth,
			calendarId: calendarIdTest,
			timeMin: dateDebut,
			timeMax: dateFin,
		});

		let items = response['data']['items'];
		return items;
	} catch (error) {
		console.log(error);
		return 0;
	}
};

export { getEvents };
