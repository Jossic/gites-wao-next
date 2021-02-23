import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween.js';
dayjs.extend(isBetween);

export const calculTarifDeBase = (
	gite,
	nbPers,
	dateArrivee,
	dateDepart,
	nbNuites
) => {
	// Si déjà loué, retourner res.json({message : "Ce gîte est déjà loué aux périodes indiquées"})
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
					gite.ftMenage +
					gite.tarifDeBase +
					gite.coefficients.basseSaison +
					gite.coefficients.moyenneSaison +
					gite.coefficients.hauteSaison
				);
			} else if (
				dayjs()
					.dayOfYear(358)
					.isBetween(dateArrivee, dateDepart, null, '[]')
			) {
				return (
					gite.ftMenage +
					gite.tarifDeBase +
					gite.coefficients.basseSaison +
					gite.coefficients.moyenneSaison +
					gite.coefficients.hauteSaison +
					gite.coefficients.noel
				);
			} else if (
				dayjs()
					.dayOfYear(365)
					.isBetween(dateArrivee, dateDepart, null, '[]')
			) {
				return (
					gite.ftMenage +
					gite.tarifDeBase +
					gite.coefficients.basseSaison +
					gite.coefficients.moyenneSaison +
					gite.coefficients.hauteSaison +
					gite.coefficients.noel +
					gite.coefficients.nouvelAn
				);
			} else {
				return (
					gite.ftMenage +
					gite.tarifDeBase +
					gite.coefficients.basseSaison +
					gite.coefficients.moyenneSaison
				);
			}
		} else {
			return (
				gite.ftMenage + gite.tarifDeBase + gite.coefficients.basseSaison
			);
		}
	} else if (nbNuites < 7) {
		if (dayjs().day(6).isBetween(dateArrivee, dateDepart, null, '[]')) {
			if (nbNuites === 1) {
				return gite.ftMenage + gite.tarifDeBase / 2 + gite.uneNuitee;
			} else if (nbNuites === 2) {
				return gite.ftMenage + gite.tarifDeBase;
			} else if (nbNuites === 3) {
				return gite.ftMenage + gite.tarifDeBase + gite.troisNuitees;
			} else if (nbNuites === 4) {
				return gite.ftMenage + gite.tarifDeBase + gite.quatreNuitees;
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
						((gite.tarifDeBase +
							gite.coefficients.basseSaison +
							gite.coefficients.moyenneSaison) /
							7) *
							1 +
						gite.ftMenage
					);
				} else if (nbNuites === 2) {
					return (
						((gite.tarifDeBase +
							gite.coefficients.basseSaison +
							gite.coefficients.moyenneSaison) /
							7) *
							2 +
						gite.ftMenage
					);
				} else if (nbNuites === 3) {
					return (
						((gite.tarifDeBase +
							gite.coefficients.basseSaison +
							gite.coefficients.moyenneSaison) /
							7) *
							3 +
						gite.ftMenage
					);
				} else if (nbNuites === 4) {
					return (
						((gite.tarifDeBase +
							gite.coefficients.basseSaison +
							gite.coefficients.moyenneSaison) /
							7) *
							4 +
						gite.ftMenage
					);
				} else if (nbNuites === 5) {
					return (
						((gite.tarifDeBase +
							gite.coefficients.basseSaison +
							gite.coefficients.moyenneSaison) /
							7) *
							5 +
						gite.ftMenage
					);
				} else if (nbNuites === 6) {
					return (
						((gite.tarifDeBase +
							gite.coefficients.basseSaison +
							gite.coefficients.moyenneSaison) /
							7) *
							6 +
						gite.ftMenage
					);
				} else {
					console.log(
						'Autres cas week-end inférieur à 7 nuits - Peu probable...'
					);
				}
			} else {
				if (nbNuites === 1) {
					return (
						gite.ftMenage + nbPers * gite.tarifParPersParNuit * 1
					);
				} else if (nbNuites === 2) {
					return (
						gite.ftMenage + nbPers * gite.tarifParPersParNuit * 2
					);
				} else if (nbNuites === 3) {
					return (
						gite.ftMenage + nbPers * gite.tarifParPersParNuit * 3
					);
				} else if (nbNuites === 4) {
					return (
						gite.ftMenage + nbPers * gite.tarifParPersParNuit * 4
					);
				} else if (nbNuites === 5) {
					return (
						gite.ftMenage + nbPers * gite.tarifParPersParNuit * 5
					);
				} else if (nbNuites === 6) {
					return (
						gite.ftMenage + nbPers * gite.tarifParPersParNuit * 6
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
