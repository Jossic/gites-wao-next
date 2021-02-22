import { google } from 'googleapis';
import asyncHandler from 'express-async-handler';
import dayjs from 'dayjs';

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarIdVacances = process.env.CALENDAR_ID_VACANCES;

const SCOPES = 'https://www.googleapis.com/auth/calendar';

const auth = new google.auth.JWT(
	CREDENTIALS.client_email,
	null,
	CREDENTIALS.private_key,
	SCOPES
);

const calendar = google.calendar({ version: 'v3', auth });

auth.authorize(function (err, tokens) {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log('Successfully connected!');
	}
});

const getVacances = asyncHandler(async (req, res) => {
	try {
		let response = await calendar.events.list({
			calendarId: calendarIdVacances,
			timeMin: dayjs(req.params.dateDebut).format('YYYY-MM-DDT00:01:00Z'),
			timeMax: dayjs(req.params.dateFin).format('YYYY-MM-DDT23:59:00Z'),
			timeZone: 'GMT+01:00',
		});

		let items = response['data']['items'];

		if (items.length === 0) {
			console.log(false);
			res.json({ vacances: false });
			return false;
		} else {
			console.log(true);
			res.json({ vacances: true });
			return true;
		}

		// return items;
	} catch (error) {
		console.log(error);
		return 0;
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

export { getEvents, getVacances };
