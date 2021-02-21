import { google } from 'googleapis';
import dayjs from 'dayjs';

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarIdManola = process.env.CALENDAR_ID_MANOLA;
const calendarIdBrinchette = process.env.CALENDAR_ID_BRINCHETTE;
const calendarIdLauberoye = process.env.CALENDAR_ID_LAUBEROYE;
const calendarIdPetitNay = process.env.CALENDAR_ID_PETIT_NAY;
const calendarIdTest = process.env.CALENDAR_ID_TEST;

const SCOPES = 'https://www.googleapis.com/auth/calendar';

const auth = new google.auth.JWT(
	CREDENTIALS.client_email,
	null,
	CREDENTIALS.private_key,
	SCOPES
);

const calendar = google.calendar({ version: 'v3', auth });
const TIMEOFFSET = 'Europe/Paris';

// const dateTimeForCalendar = () => {
// 	let date = new Date();

// 	let year = date.getFullYear();
// 	let month = date.getMonth() + 1;
// 	if (month < 10) {
// 		month = `0${month}`;
// 	}
// 	let day = date.getDate();
// 	if (day < 10) {
// 		day = `0${day}`;
// 	}
// 	let hour = date.getHours();
// 	if (hour < 10) {
// 		hour = `0${hour}`;
// 	}
// 	let minute = date.getMinutes();
// 	if (minute < 10) {
// 		minute = `0${minute}`;
// 	}

// 	let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`;

// 	let event = new Date(Date.parse(newDateTime));

// 	let startDate = event;
// 	let endDate = new Date(
// 		new Date(startDate).setHours(startDate.getHours() + 1)
// 	);

// 	return {
// 		start: startDate,
// 		end: endDate,
// 	};
// };

auth.authorize(function (err, tokens) {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log('Successfully connected!');
	}
});

const getEvents = async (req, res) => {
	// console.log(req.params);
	try {
		let response = await calendar.events.list({
			calendarId: req.params.calendarId,
			timeMin: dayjs(req.params.dateDebut).format('YYYY-MM-DDT00:01:00Z'),
			timeMax: dayjs(req.params.dateFin).format('YYYY-MM-DDT23:59:00Z'),
			timeZone: 'GMT+01:00',
		});

		let items = response['data']['items'];
		console.log(items);
		return items;
	} catch (error) {
		console.log(error);
		return 0;
	}
};

export { getEvents };
