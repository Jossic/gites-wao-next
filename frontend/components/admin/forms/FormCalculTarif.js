import DateFnsUtils from '@date-io/date-fns';
import { useForm, Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);
import Link from 'next/link';
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import {
	getCalendar,
	getCalendarById,
	getDejaLoue,
	getVacances,
} from '../../../actions/calendarActions';
import { getCookie } from '../../../actions/authActions';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '70%',
		margin: theme.spacing(2),
	},
	root: {
		width: '80%',
	},
	button: {
		margin: theme.spacing(2),
		width: '80%',
	},
	formControl: {
		margin: theme.spacing(1),
		width: '80%',
	},
	textField: {
		margin: theme.spacing(1),
		width: '80%',
	},
}));

const FormCalculTarif = ({ gites }) => {
	const { control, register, handleSubmit } = useForm();
	const classes = useStyles();
	const token = getCookie('token');
	const [selectedDateDebut, setSelectedDateDebut] = useState();
	const [selectedDateFin, setSelectedDateFin] = useState();
	const [dateDebut, setDateDebut] = useState();
	const [dateFin, setDateFin] = useState();
	const [giteSelec, setGiteSelec] = useState();
	const [nbChien, setNbChien] = useState();
	const [nbEnf, setNbEnf] = useState();
	const [nbPers, setNbPers] = useState();
	const [nuitee, setNuitee] = useState();
	const [isVacances, setIsVacances] = useState();
	const [isWeekEnd, setIsWeekEnd] = useState(false);
	const [dejaLoue, setDejaLoue] = useState();
	const [prixTotal, setPrixTotal] = useState();
	const [prixSuppl, setPrixSuppl] = useState();
	const [isSubmited, setIsSubmited] = useState(false);
	const [erreur, setErreur] = useState(false);

	const handleDateChangeDebut = (date) => {
		setSelectedDateDebut(date);
	};

	const handleDateChangeFin = (date) => {
		setSelectedDateFin(date);
	};

	const onSubmit = (data) => {
		setDateDebut();
		setDateFin();
		setNuitee();
		setGiteSelec();
		setNbChien();
		setNbEnf();
		setNbPers();
		setDejaLoue(false);
		setIsSubmited(true);
		const { dateDebut, dateFin, giteSelec, nbChien, nbEnf, nbPers } = data;
		const dateD = dayjs(dateDebut);
		const dateF = dayjs(dateFin);
		getVacances(dateD, dateF).then((result) => {
			// console.log('result vaut', result);
			setIsVacances(result.vacances);
			// return result.vacances;
		});

		const nuitee = dateF.diff(dateD, 'day');
		setDateDebut(dateDebut);
		setDateFin(dateFin);
		setNuitee(nuitee);
		setGiteSelec(giteSelec);
		setNbChien(nbChien);
		setNbEnf(nbEnf);
		setNbPers(nbPers);

		for (const gite of gites) {
			if (gite.slug === giteSelec) {
				getDejaLoue(gite.calendarId, dateD, dateF).then((result) => {
					if (result.loue) {
						setDejaLoue(true);
					} else {
						setDejaLoue(false);
					}
				});
				// On récupère le gîte selectionné
				if (nuitee === 7 || nuitee === 14 || nuitee === 21) {
					if (isVacances) {
						console.log('Cas général : on est en vancances');
						if (
							dayjs(dateD).isBetween(
								dayjs().month(6),
								dayjs().month(7),
								null,
								'[]'
							)
						) {
							console.log('on est en haute saison à la semaine');
							setPrixTotal(
								gite.ftMenage +
									gite.tarifDeBase +
									gite.coefficients.basseSaison +
									gite.coefficients.moyenneSaison +
									gite.coefficients.hauteSaison
							);
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						} else if (
							dayjs()
								.dayOfYear(358)
								.isBetween(dateD, dateF, null, '[]')
						) {
							console.log('on est à noel à la semaine');
							setPrixTotal(
								gite.ftMenage +
									gite.tarifDeBase +
									gite.coefficients.basseSaison +
									gite.coefficients.moyenneSaison +
									gite.coefficients.hauteSaison +
									gite.coefficients.noel
							);
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						} else if (
							dayjs()
								.dayOfYear(365)
								.isBetween(dateD, dateF, null, '[]')
						) {
							console.log('on est au nouvel an à la semaine');
							setPrixTotal(
								gite.ftMenage +
									gite.tarifDeBase +
									gite.coefficients.basseSaison +
									gite.coefficients.moyenneSaison +
									gite.coefficients.hauteSaison +
									gite.coefficients.noel +
									gite.coefficients.nouvelAn
							);
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						} else {
							console.log(
								'On est dans le cas 7 nuitées en vacances scolaires moyenne saison'
							);
							//
							setPrixTotal(
								gite.ftMenage +
									gite.tarifDeBase +
									gite.coefficients.basseSaison +
									gite.coefficients.moyenneSaison
							);
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						}
					} else {
						console.log('Cas 7 nuitées hors vacances');
						//
						setPrixTotal(
							gite.ftMenage +
								gite.tarifDeBase +
								gite.coefficients.basseSaison
						);
						if (nbPers > gite.nPers) {
							setPrixSuppl(
								(nbPers - gite.nPers) *
									gite.supplementParPers *
									nuitee
							);
						}
					}
				} else if (nuitee < 7) {
					console.log('Cas général : nuitées inférieure à 7');
					if (dayjs().day(6).isBetween(dateD, dateF, null, '[]')) {
						setIsWeekEnd(true);
						console.log('Cas en week-end moins de 7 nuits');
						if (nuitee === 1) {
							console.log(
								'Cas week-end 1 nuit + msg avertissement'
							);
							//
							setPrixTotal(
								gite.ftMenage +
									gite.tarifDeBase / 2 +
									gite.uneNuitee
							);
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
							setAvertissement({
								message:
									'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)',
							});
						} else if (nuitee === 2) {
							console.log('Cas week-end 2 nuits');
							//
							setPrixTotal(gite.ftMenage + gite.tarifDeBase);
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						} else if (nuitee === 3) {
							console.log('Cas week-end 3 nuits');
							//
							setPrixTotal(
								gite.ftMenage +
									gite.tarifDeBase +
									gite.troisNuitees
							);
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						} else if (nuitee === 4) {
							console.log('Cas week-end 4 nuits');
							//
							setPrixTotal(
								gite.ftMenage +
									gite.tarifDeBase +
									gite.quatreNuitees
							);
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						} else if (nuitee === 5) {
							console.log(
								'Cas week-end 5 nuits - Quel tarif ? Voir Maman'
							);
							//
							setPrixTotal();
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						} else if (nuitee === 6) {
							console.log(
								'Cas week-end 6 nuits - Quel tarif ? Voir Maman'
							);
							//
							setPrixTotal();
							if (nbPers > gite.nPers) {
								setPrixSuppl(
									(nbPers - gite.nPers) *
										gite.supplementParPers *
										nuitee
								);
							}
						} else {
							console.log(
								'Autres cas week-end inférieur à 7 nuits - Inpossible...'
							);
						}
					} else {
						console.log(
							'Cas général : moins de 7 nuits et sans samedi'
						);
						if (isVacances) {
							console.log(
								'Cas général : hors WE moins de 7 nuits mais en vacances - Tarif sans tenir compte du plafond (tarifs remis par nuitée)'
							);
							if (nuitee === 1) {
								console.log(
									'Cas hors week-end 1 nuit mais en vacances'
								);
								//

								setPrixTotal(
									((gite.tarifDeBase +
										gite.coefficients.basseSaison +
										gite.coefficients.moyenneSaison) /
										7) *
										1 +
										gite.ftMenage
								);

								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 2) {
								console.log(
									'Cas hors week-end 2 nuits mais en vacances'
								);
								//

								setPrixTotal(
									((gite.tarifDeBase +
										gite.coefficients.basseSaison +
										gite.coefficients.moyenneSaison) /
										7) *
										2 +
										gite.ftMenage
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 3) {
								console.log(
									'Cas hors week-end 3 nuits mais en vacances'
								);
								//

								setPrixTotal(
									((gite.tarifDeBase +
										gite.coefficients.basseSaison +
										gite.coefficients.moyenneSaison) /
										7) *
										3 +
										gite.ftMenage
								);

								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 4) {
								console.log(
									'Cas hors week-end 4 nuits mais en vacances'
								);
								//

								setPrixTotal(
									((gite.tarifDeBase +
										gite.coefficients.basseSaison +
										gite.coefficients.moyenneSaison) /
										7) *
										4 +
										gite.ftMenage
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 5) {
								console.log(
									'Cas hors week-end 5 nuits mais en vacances'
								);
								//

								setPrixTotal(
									((gite.tarifDeBase +
										gite.coefficients.basseSaison +
										gite.coefficients.moyenneSaison) /
										7) *
										5 +
										gite.ftMenage
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 6) {
								console.log(
									'Cas hors week-end 6 nuits mais en vacances'
								);
								//

								setPrixTotal(
									((gite.tarifDeBase +
										gite.coefficients.basseSaison +
										gite.coefficients.moyenneSaison) /
										7) *
										6 +
										gite.ftMenage
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else {
								console.log(
									'Autres cas week-end inférieur à 7 nuits - Peu probable...'
								);
							}
						} else {
							console.log(
								'Cas général : hors WE moins de 7 nuits mais en vacances - Tarif avec plafond'
							);
							//
							if (nuitee === 1) {
								console.log(
									'Cas hors week-end 1 nuit et hors vacances'
								);
								//

								setPrixTotal(
									gite.ftMenage +
										nbPers * gite.tarifParPersParNuit * 1
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 2) {
								console.log(
									'Cas hors week-end 2 nuits et hors vacances'
								);
								//

								setPrixTotal(
									gite.ftMenage +
										nbPers * gite.tarifParPersParNuit * 2
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 3) {
								console.log(
									'Cas hors week-end 3 nuits et hors vacances'
								);
								//

								setPrixTotal(
									gite.ftMenage +
										nbPers * gite.tarifParPersParNuit * 3
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 4) {
								console.log(
									'Cas hors week-end 4 nuits et hors vacances'
								);
								//

								setPrixTotal(
									gite.ftMenage +
										nbPers * gite.tarifParPersParNuit * 4
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 5) {
								console.log(
									'Cas hors week-end 5 nuits et hors vacances'
								);
								//

								setPrixTotal(
									gite.ftMenage +
										nbPers * gite.tarifParPersParNuit * 5
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							} else if (nuitee === 6) {
								console.log(
									'Cas hors week-end 6 nuits et hors vacances'
								);
								//

								setPrixTotal(
									gite.ftMenage +
										nbPers * gite.tarifParPersParNuit * 6
								);
								if (nbPers > gite.nPers) {
									setPrixSuppl(
										(nbPers - gite.nPers) *
											gite.supplementParPers *
											nuitee
									);
								}
							}
						}
					}
				} else if (nuitee > 30) {
					console.log('Gérer cas >30 ici');
					setErreur({
						erreur: true,
						message:
							'Nous ne louons pas sur des durées de plus de 30 jours',
					});
				} else {
					console.log('Autres cas nuit > 7 et !== de 14 et 21');
					setErreur({
						erreur: true,
						message:
							'Pour des cas spécifiques, merci de nous contacter',
					});
				}
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
			<FormControl className={classes.formControl}>
				<InputLabel
					shrink
					id='demo-simple-select-placeholder-label-label'>
					Gite
				</InputLabel>
				<Controller
					control={control}
					name='giteSelec'
					as={
						<Select id='declencheur-select' defaultValue=''>
							{gites.map((gite) => (
								<MenuItem value={gite.slug} key={gite.slug}>
									{gite.nom}
								</MenuItem>
							))}
						</Select>
					}
				/>
			</FormControl>
			<FormControl className={classes.formControl}>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						inputRef={register}
						margin='normal'
						id='date-picker-dialog'
						name='dateDebut'
						label='Date de début'
						format='MM/dd/yyyy'
						defaultValue=''
						value={selectedDateDebut}
						onChange={handleDateChangeDebut}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
					<KeyboardDatePicker
						inputRef={register}
						// disableToolbar
						name='dateFin'
						format='MM/dd/yyyy'
						margin='normal'
						defaultValue='02/25/2021'
						id='date-picker-inline'
						label='Date de fin'
						value={selectedDateFin}
						onChange={handleDateChangeFin}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
				</MuiPickersUtilsProvider>
			</FormControl>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='nbPers'
				type='number'
				defaultValue='10'
				id='standard-number'
				label='Nombre de personnes au total'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='nbEnf'
				type='number'
				defaultValue='2'
				id='standard-number'
				label="Nombre d'enfants -18 ans"
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='nbChien'
				type='number'
				defaultValue='0'
				id='standard-number'
				label='Chiens (3€/j/animal)'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<Button
				type='submit'
				variant='contained'
				color='primary'
				className={classes.button}>
				Calculer le tarif
			</Button>
			{!erreur ? (
				isSubmited && (
					<>
						<p>
							{dejaLoue ? (
								'Il semble que ce gîte soit déjà loué aux dates indiquées'
							) : (
								<p>
									Ce gîte semble libre pour le moment aux
									dates indiquées, n'hésitez pas à faire une
									demande de location
									{
										<Button
											variant='contained'
											color='secondary'
											className={classes.button}>
											<Link href='/reservation'>
												<a>Je reserve</a>
											</Link>
										</Button>
									}
								</p>
							)}
						</p>
						<p>
							Location du {dateDebut} au {dateFin} pour le gîte{' '}
							{giteSelec} pour {nbPers} personnes dont {nbEnf}{' '}
							enfants et {nbChien} animaux
						</p>
						<p>
							Total de {nuitee} nuitées{' '}
							{isVacances
								? 'en période de vacances'
								: 'hors vacances'}{' '}
							et {isWeekEnd ? 'en week-end' : ' hors week-end'}
						</p>
						<p>Montant de base : {prixTotal}</p>
						<p>Montant supplémentaire : {prixSuppl}</p>
					</>
				)
			) : (
				<p>{erreur.message}</p>
			)}
		</form>
	);
};

export default FormCalculTarif;
