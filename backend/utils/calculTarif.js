import dayjs from 'dayjs';
import axios from 'axios';
import Gite from '../models/giteModel.js';
import isBetween from 'dayjs/plugin/isBetween.js';
dayjs.extend(isBetween);

export const calculTarifDeBase = async (
	gite,
	nbPers,
	dateArrivee,
	dateDepart,
	nbNuites
) => {
	const ceGite = await Gite.findOne({ slug: gite });
	// Si déjà loué, retourner res.json({message : "Ce gîte est déjà loué aux périodes indiquées"})

	const dateDAPI = dayjs(dateArrivee).format('YYYY-MM-DDT00:01:00Z');
	const dateFAPI = dayjs(dateDepart).format('YYYY-MM-DDT00:01:00Z');

	const dejaLoue = await axios
		.get(
			`http://localhost:8000/api/calendar/loue/${ceGite.calendarId}/${dateDAPI}/${dateFAPI}`
		)
		.then((result) => {
			console.log('dejaLoue vaut', result.data.loue);
		})
		.catch((err) => {
			console.log(err);
		});

	const isVacances = await axios
		.get(`http://localhost:8000/api/calendar/${dateDAPI}/${dateFAPI}`)
		.then((result) => {
			console.log('isVacances vaut', result.data.vacances);
		})
		.catch((err) => {
			console.log(err);
		});

	// Recup calendar pour déjà loué et pour vacances

	if (nbNuites === 7 || nbNuites === 14 || nbNuites === 21) {
		if (isVacances) {
			if (
				dayjs(dateArrivee).isBetween(
					dayjs().month(6),
					dayjs().month(7),
					null,
					'[]'
				)
			) {
				return (
					ceGite.ftMenage +
					ceGite.tarifDeBase +
					ceGite.coefficients.basseSaison +
					ceGite.coefficients.moyenneSaison +
					ceGite.coefficients.hauteSaison
				);
			} else if (
				dayjs()
					.dayOfYear(358)
					.isBetween(dateArrivee, dateDepart, null, '[]')
			) {
				return (
					ceGite.ftMenage +
					ceGite.tarifDeBase +
					ceGite.coefficients.basseSaison +
					ceGite.coefficients.moyenneSaison +
					ceGite.coefficients.hauteSaison +
					ceGite.coefficients.noel
				);
			} else if (
				dayjs()
					.dayOfYear(365)
					.isBetween(dateArrivee, dateDepart, null, '[]')
			) {
				return (
					ceGite.ftMenage +
					ceGite.tarifDeBase +
					ceGite.coefficients.basseSaison +
					ceGite.coefficients.moyenneSaison +
					ceGite.coefficients.hauteSaison +
					ceGite.coefficients.noel +
					ceGite.coefficients.nouvelAn
				);
			} else {
				return (
					ceGite.ftMenage +
					ceGite.tarifDeBase +
					ceGite.coefficients.basseSaison +
					ceGite.coefficients.moyenneSaison
				);
			}
		} else {
			return (
				ceGite.ftMenage +
				ceGite.tarifDeBase +
				ceGite.coefficients.basseSaison
			);
		}
	} else if (nbNuites < 7) {
		if (dayjs().day(6).isBetween(dateArrivee, dateDepart, null, '[]')) {
			if (nbNuites === 1) {
				return (
					ceGite.ftMenage + ceGite.tarifDeBase / 2 + ceGite.uneNuitee
				);
			} else if (nbNuites === 2) {
				return ceGite.ftMenage + ceGite.tarifDeBase;
			} else if (nbNuites === 3) {
				return (
					ceGite.ftMenage + ceGite.tarifDeBase + ceGite.troisNuitees
				);
			} else if (nbNuites === 4) {
				return (
					ceGite.ftMenage + ceGite.tarifDeBase + ceGite.quatreNuitees
				);
			} else if (nbNuites === 5) {
				console.log('Cas week-end 5 nuits - Quel tarif ? Voir Maman');
				return;
			} else if (nbNuites === 6) {
				console.log('Cas week-end 6 nuits - Quel tarif ? Voir Maman');
				return;
			} else {
				console.log(
					'Autres cas week-end inférieur à 7 nuits - Inpossible...'
				);
			}
		} else {
			if (isVacances) {
				if (nbNuites === 1) {
					return (
						((ceGite.tarifDeBase +
							ceGite.coefficients.basseSaison +
							ceGite.coefficients.moyenneSaison) /
							7) *
							1 +
						ceGite.ftMenage
					);
				} else if (nbNuites === 2) {
					return (
						((ceGite.tarifDeBase +
							ceGite.coefficients.basseSaison +
							ceGite.coefficients.moyenneSaison) /
							7) *
							2 +
						ceGite.ftMenage
					);
				} else if (nbNuites === 3) {
					return (
						((ceGite.tarifDeBase +
							ceGite.coefficients.basseSaison +
							ceGite.coefficients.moyenneSaison) /
							7) *
							3 +
						ceGite.ftMenage
					);
				} else if (nbNuites === 4) {
					return (
						((ceGite.tarifDeBase +
							ceGite.coefficients.basseSaison +
							ceGite.coefficients.moyenneSaison) /
							7) *
							4 +
						ceGite.ftMenage
					);
				} else if (nbNuites === 5) {
					return (
						((ceGite.tarifDeBase +
							ceGite.coefficients.basseSaison +
							ceGite.coefficients.moyenneSaison) /
							7) *
							5 +
						ceGite.ftMenage
					);
				} else if (nbNuites === 6) {
					return (
						((ceGite.tarifDeBase +
							ceGite.coefficients.basseSaison +
							ceGite.coefficients.moyenneSaison) /
							7) *
							6 +
						ceGite.ftMenage
					);
				} else {
					console.log(
						'Autres cas week-end inférieur à 7 nuits - Peu probable...'
					);
				}
			} else {
				if (nbNuites === 1) {
					return (
						ceGite.ftMenage +
						nbPers * ceGite.tarifParPersParNuit * 1
					);
				} else if (nbNuites === 2) {
					return (
						ceGite.ftMenage +
						nbPers * ceGite.tarifParPersParNuit * 2
					);
				} else if (nbNuites === 3) {
					return (
						ceGite.ftMenage +
						nbPers * ceGite.tarifParPersParNuit * 3
					);
				} else if (nbNuites === 4) {
					return (
						ceGite.ftMenage +
						nbPers * ceGite.tarifParPersParNuit * 4
					);
				} else if (nbNuites === 5) {
					return (
						ceGite.ftMenage +
						nbPers * ceGite.tarifParPersParNuit * 5
					);
				} else if (nbNuites === 6) {
					return (
						ceGite.ftMenage +
						nbPers * ceGite.tarifParPersParNuit * 6
					);
				}
			}
		}
	} else if (nbNuites > 30) {
		console.log('Gérer cas >30 ici');
	} else {
		console.log('Autres cas nuit > 7 et !== de 14 et 21');
	}
};
