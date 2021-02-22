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
	const [infos, setInfos] = React.useState();
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

		getDejaLoue(gite.calendarId, dateD, dateF).then((result) => {
			console.log(result);
		});

		// console.log('Vacances vaut =>', isVacances);
		let prixTotal;

		const nuitee = dateF.diff(dateD, 'day');
		// Si nuitée > 30 - erreur
		// Si vacances - quelles vacances c'est ? - été puis noel puis nvl an

		for (const gite of gites) {
			if (gite.slug === giteSelec) {
				// On récupère le gîte selectionné
				if (nuitee === 7 || nuitee === 14 || nuitee === 21) {
					if (isVacances) {
						console.log('on est en vancances');
						if (
							dayjs(dateD).isBetween(
								dayjs().month(6),
								dayjs().month(7),
								null,
								'[]'
							)
						) {
							console.log('on est en haute saison à la semaine');
							return (prixTotal =
								ftMenage +
								gite.tarifDeBase +
								gite.coefficients.basseSaison +
								gite.coefficients.moyenneSaison +
								gite.coefficients.hauteSaison);
						} else if (
							dayjs()
								.dayOfYear(358)
								.isBetween(dateD, dateF, null, '[]')
						) {
							console.log('on est à noel à la semaine');
							return (prixTotal =
								ftMenage +
								gite.tarifDeBase +
								gite.coefficients.basseSaison +
								gite.coefficients.moyenneSaison +
								gite.coefficients.hauteSaison +
								gite.coefficients.noel);
						} else if (
							dayjs()
								.dayOfYear(365)
								.isBetween(dateD, dateF, null, '[]')
						) {
							console.log('on est au nouvel an à la semaine');
							return (prixTotal =
								ftMenage +
								gite.tarifDeBase +
								gite.coefficients.basseSaison +
								gite.coefficients.moyenneSaison +
								gite.coefficients.hauteSaison +
								gite.coefficients.noel +
								gite.coefficients.nouvelAn);
						} else {
							console.log(
								'On est dans le cas 7 nuitées en vacances scolaires moyenne saison'
							);
						}
					} else {
						console.log('Cas 7 nuitées hors vacances');
					}
				} else if (nuitee < 7) {
					console.log('Cas nuitées inférieure à 7');
					if (dayjs().day(6).isBetween(dateD, dateF, null, '[]')) {
						console.log('Cas en week-end moins de 7 nuits');
						if (nuitee === 1) {
							console.log(
								'Cas week-end 1 nuit + msg avertissement'
							);
						} else if (nuitee === 2) {
							console.log('Cas week-end 2 nuits');
						} else if (nuitee === 3) {
							console.log('Cas week-end 3 nuits');
						} else if (nuitee === 4) {
							console.log('Cas week-end 4 nuits');
						} else if (nuitee === 5) {
							console.log('Cas week-end 5 nuits');
						} else if (nuitee === 6) {
							console.log('Cas week-end 6 nuits');
						} else {
							console.log(
								'Autres cas week-end inférieur à 7 nuits - Peu probable...'
							);
						}
					} else {
						console.log('Cas moins de 7 nuits et sans samedi');
						if (isVacances) {
							console.log(
								'Cas hors WE moins de 7 nuits mais en vacances - Tarif sans tenir compte du plafond'
							);
						} else {
							console.log(
								'Cas hors WE moins de 7 nuits mais en vacances - Tarif avec plafond'
							);
						}
					}
				} else {
					console.log('Autres cas nuit > 7 et !== de 14 et 21');
				}

				// getCalendarById(gite.calendarId, dateD, dateF).then(
				// 	(result) => {
				// 		console.log(result);
				// 	}
				// );
				const tarifDeBase = gite.tarifDeBase;
				// console.log(tarifDeBase);
				// tarif = tarifDeBase * nuitee;
				// console.log(tarif);
				// setInfos({ ...infos, nuitee, tarif });
			} else {
				// console.log(false);
			}
		}
		// setInfos({ ...infos, nuitee, tarif });
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
