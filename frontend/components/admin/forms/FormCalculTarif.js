import DateFnsUtils from '@date-io/date-fns';
import { useForm, Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);
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
	const [selectedDateDebut, setSelectedDateDebut] = React.useState();
	const [selectedDateFin, setSelectedDateFin] = React.useState();
	const [infos, setInfos] = React.useState({
		dateDebut: '',
		dateFin: '',
		giteSelec: '',
		nbChien: 0,
		nbEnf: 0,
		nbPers: 0,
		prixTotal: 0,
		prixSuppl: 0,
		dejaLoueMsg: '',
		nuitee: 0,
	});
	const [isVacances, setIsVacances] = React.useState();

	const handleDateChangeDebut = (date) => {
		setSelectedDateDebut(date);
	};

	const handleDateChangeFin = (date) => {
		setSelectedDateFin(date);
	};

	const onSubmit = (data) => {
		const { dateDebut, dateFin, giteSelec, nbChien, nbEnf, nbPers } = data;
		const dateD = dayjs(dateDebut);
		const dateF = dayjs(dateFin);
		console.log(dateD);
		getVacances(dateD, dateF).then((result) => {
			// console.log('result vaut', result);
			setIsVacances(result.vacances);
			// return result.vacances;
		});

		const nuitee = dateF.diff(dateD, 'day');

		setInfos({
			...infos,
			data,
			dateDebut: dateD,
			dateFin: dateF,
			nuitee,
		});

		for (const gite of gites) {
			if (gite.slug === giteSelec) {
				console.log(gite.nom);
				getDejaLoue(gite.calendarId, dateD, dateF).then((result) => {
					console.log(result);
					if (result.loue) {
						setInfos({
							...infos,
							dejaLoueMsg:
								'Il semble que ce gîte soit déjà loué aux dates indiquées',
						});
					} else {
						setInfos({
							...infos,
							dejaLoueMsg:
								"Ce gîte semble libre pour le moment, n'hésitez pas à faire une demande de location",
						});
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
							setInfos({
								...infos,
								prixTotal:
									gite.tarifParPersParNuitftMenage +
									gite.tarifDeBase +
									gite.coefficients.basseSaison +
									gite.coefficients.moyenneSaison +
									gite.coefficients.hauteSaison,
							});
						} else if (
							dayjs()
								.dayOfYear(358)
								.isBetween(dateD, dateF, null, '[]')
						) {
							console.log('on est à noel à la semaine');
							prixTotal =
								gite.tarifParPersParNuitftMenage +
								gite.tarifDeBase +
								gite.coefficients.basseSaison +
								gite.coefficients.moyenneSaison +
								gite.coefficients.hauteSaison +
								gite.coefficients.noel;
							setInfos({ ...infos, prixTotal });
						} else if (
							dayjs()
								.dayOfYear(365)
								.isBetween(dateD, dateF, null, '[]')
						) {
							console.log('on est au nouvel an à la semaine');

							setInfos({
								...infos,
								prixTotal:
									gite.tarifParPersParNuitftMenage +
									gite.tarifDeBase +
									gite.coefficients.basseSaison +
									gite.coefficients.moyenneSaison +
									gite.coefficients.hauteSaison +
									gite.coefficients.noel +
									gite.coefficients.nouvelAn,
							});
						} else {
							console.log(
								'On est dans le cas 7 nuitées en vacances scolaires moyenne saison'
							);
							//
							setInfos({
								...infos,
								prixTotal:
									gite.tarifParPersParNuitftMenage +
									gite.tarifDeBase +
									gite.coefficients.basseSaison +
									gite.coefficients.moyenneSaison,
							});
						}
					} else {
						console.log('Cas 7 nuitées hors vacances');
						//
						setInfos({
							...infos,
							prixTotal:
								gite.tarifParPersParNuitftMenage +
								gite.tarifDeBase +
								gite.coefficients.basseSaison,
						});
					}
				} else if (nuitee < 7) {
					console.log('Cas général : nuitées inférieure à 7');
					if (dayjs().day(6).isBetween(dateD, dateF, null, '[]')) {
						console.log('Cas en week-end moins de 7 nuits');
						if (nuitee === 1) {
							console.log(
								'Cas week-end 1 nuit + msg avertissement'
							);
							//
							setInfos({
								...infos,
								prixTotal:
									gite.tarifParPersParNuitftMenage +
									gite.tarifDeBase / 2 +
									gite.uneNuitee,
								avertissement:
									'En week end nous louons 2 nuitées, (très exceptionnelement 1 seule)',
							});
						} else if (nuitee === 2) {
							console.log('Cas week-end 2 nuits');
							//
							setInfos({
								...infos,
								prixTotal:
									gite.tarifParPersParNuitftMenage +
									gite.tarifDeBase,
							});
						} else if (nuitee === 3) {
							console.log('Cas week-end 3 nuits');
							//
							setInfos({
								...infos,
								prixTotal:
									gite.tarifParPersParNuitftMenage +
									gite.tarifDeBase +
									gite.troisNuitees,
							});
						} else if (nuitee === 4) {
							console.log('Cas week-end 4 nuits');
							//
							setInfos({
								...infos,
								prixTotal:
									gite.tarifParPersParNuitftMenage +
									gite.tarifDeBase +
									gite.quatreNuitees,
							});
						} else if (nuitee === 5) {
							console.log(
								'Cas week-end 5 nuits - Quel tarif ? Voir Maman'
							);
							//
							setInfos({ ...infos, prixTotal });
						} else if (nuitee === 6) {
							console.log(
								'Cas week-end 6 nuits - Quel tarif ? Voir Maman'
							);
							//
							setInfos({ ...infos, prixTotal });
						} else {
							console.log(
								'Autres cas week-end inférieur à 7 nuits - Peu probable...'
							);
						}
					} else {
						console.log(
							'Cas général : moins de 7 nuits et sans samedi'
						);
						if (isVacances) {
							console.log(
								'Cas général : hors WE moins de 7 nuits mais en vacances - Tarif sans tenir compte du plafond'
							);
							if (nuitee === 1) {
								console.log(
									'Cas hors week-end 1 nuit mais en vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												1,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												1,
										prixSuppl:
											nbPers * gite.supplementParPers * 1,
									});
								}
							} else if (nuitee === 2) {
								console.log(
									'Cas hors week-end 2 nuits mais en vacances'
								);
								//
								if (nbPers < gite.nPers) {
									console.log(`Moins de ${gite.nPers} pers`);
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												2,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												2,
										prixSuppl:
											nbPers * gite.supplementParPers * 2,
									});
								}
							} else if (nuitee === 3) {
								console.log(
									'Cas hors week-end 3 nuits mais en vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												3,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												3,
										prixSuppl:
											nbPers * gite.supplementParPers * 3,
									});
								}
							} else if (nuitee === 4) {
								console.log(
									'Cas hors week-end 4 nuits mais en vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												4,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												4,
										prixSuppl:
											nbPers * gite.supplementParPers * 4,
									});
								}
							} else if (nuitee === 5) {
								console.log(
									'Cas hors week-end 5 nuits mais en vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												5,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												5,
										prixSuppl:
											nbPers * gite.supplementParPers * 5,
									});
								}
							} else if (nuitee === 6) {
								console.log(
									'Cas hors week-end 6 nuits mais en vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												6,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												6,
										prixSuppl:
											nbPers * gite.supplementParPers * 6,
									});
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

								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												1,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											((gite.tarifParPersParNuitftMenage +
												gite.tarifDeBase +
												gite.coefficients.basseSaison +
												gite.coefficients
													.moyenneSaison -
												gite.tarifParPersParNuitftMenage) /
												7) *
												1 +
											gite.tarifParPersParNuitftMenage,
										prixSuppl:
											nbPers * gite.supplementParPers * 1,
									});
								}
							} else if (nuitee === 2) {
								console.log(
									'Cas hors week-end 2 nuits et hors vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												2,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											((gite.tarifParPersParNuitftMenage +
												gite.tarifDeBase +
												gite.coefficients.basseSaison +
												gite.coefficients
													.moyenneSaison -
												gite.tarifParPersParNuitftMenage) /
												7) *
												2 +
											gite.tarifParPersParNuitftMenage,
										prixSuppl:
											nbPers * gite.supplementParPers * 2,
									});
								}
							} else if (nuitee === 3) {
								console.log(
									'Cas hors week-end 3 nuits et hors vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												3,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											((gite.tarifParPersParNuitftMenage +
												gite.tarifDeBase +
												gite.coefficients.basseSaison +
												gite.coefficients
													.moyenneSaison -
												gite.tarifParPersParNuitftMenage) /
												7) *
												3 +
											gite.tarifParPersParNuitftMenage,
										prixSuppl:
											nbPers * gite.supplementParPers * 3,
									});
								}
							} else if (nuitee === 4) {
								console.log(
									'Cas hors week-end 4 nuits et hors vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												4,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											((gite.tarifParPersParNuitftMenage +
												gite.tarifDeBase +
												gite.coefficients.basseSaison +
												gite.coefficients
													.moyenneSaison -
												gite.tarifParPersParNuitftMenage) /
												7) *
												4 +
											gite.tarifParPersParNuitftMenage,
										prixSuppl:
											nbPers * gite.supplementParPers * 4,
									});
								}
							} else if (nuitee === 5) {
								console.log(
									'Cas hors week-end 5 nuits et hors vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												5,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											((gite.tarifParPersParNuitftMenage +
												gite.tarifDeBase +
												gite.coefficients.basseSaison +
												gite.coefficients
													.moyenneSaison -
												gite.tarifParPersParNuitftMenage) /
												7) *
												5 +
											gite.tarifParPersParNuitftMenage,
										prixSuppl:
											nbPers * gite.supplementParPers * 5,
									});
								}
							} else if (nuitee === 6) {
								console.log(
									'Cas hors week-end 6 nuits et hors vacances'
								);
								//
								if (nbPers < gite.nPers) {
									setInfos({
										...infos,
										prixTotal:
											gite.tarifParPersParNuitftMenage +
											nbPers *
												gite.tarifParPersParNuit *
												6,
									});
								} else {
									setInfos({
										...infos,
										prixTotal:
											((gite.tarifParPersParNuitftMenage +
												gite.tarifDeBase +
												gite.coefficients.basseSaison +
												gite.coefficients
													.moyenneSaison -
												gite.tarifParPersParNuitftMenage) /
												7) *
												6 +
											gite.tarifParPersParNuitftMenage,
										prixSuppl:
											nbPers * gite.supplementParPers * 6,
									});
								}
							}
						}
					}
				} else {
					console.log('Autres cas nuit > 7 et !== de 14 et 21');
					console.log('Gérer cas >30 ici');
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
			{infos && JSON.stringify(infos)}
		</form>
	);
};

export default FormCalculTarif;
