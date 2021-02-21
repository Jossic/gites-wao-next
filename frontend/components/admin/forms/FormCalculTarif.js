import DateFnsUtils from '@date-io/date-fns';
import { useForm, Controller } from 'react-hook-form';
import dayjs from 'dayjs';
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
	const [selectedDateDebut, setSelectedDateDebut] = React.useState();
	const [selectedDateFin, setSelectedDateFin] = React.useState();
	const [data, setData] = React.useState();

	const handleDateChangeDebut = (date) => {
		setSelectedDateDebut(date);
	};

	const handleDateChangeFin = (date) => {
		setSelectedDateFin(date);
	};

	const onSubmit = (data) => {
		const { dateDebut, dateFin, giteSelec, nbChien, nbEnf, nbPers } = data;
		const dateD = dayjs(dateDebut);
		let tarif;

		const dateF = dayjs(dateFin);
		const nuitee = dateF.diff(dateD, 'day');
		for (const gite of gites) {
			// console.log(gite.slug);
			// console.log(giteSelec);
			if (gite.slug === giteSelec) {
				const tarifDeBase = gite.tarifDeBase;
				// console.log(tarifDeBase);
				tarif = tarifDeBase * nuitee;
				// console.log(tarif);
				setData({ ...data, nuitee, tarif });
			} else {
				// console.log(false);
			}
		}
		setData({ ...data, nuitee, tarif });
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
			{data && JSON.stringify(data)}
		</form>
	);
};

export default FormCalculTarif;
