import DateFnsUtils from '@date-io/date-fns';
import { useForm, Controller } from 'react-hook-form';
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';

const FormCalculTarif = ({ gites }) => {
	const [selectedDateDebut, setSelectedDateDebut] = React.useState();
	const [selectedDateFin, setSelectedDateFin] = React.useState();

	const handleDateChangeDebut = (date) => {
		setSelectedDateDebut(date);
	};

	const handleDateChangeFin = (date) => {
		setSelectedDateFin(date);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormControl className={classes.formControl}>
				<InputLabel
					shrink
					id='demo-simple-select-placeholder-label-label'>
					Déclencheur
				</InputLabel>
				<Controller
					control={control}
					name='gite'
					as={
						<Select
							id='declencheur-select'
							defaultValue='Envoi manuel'>
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
						disableToolbar
						variant='inline'
						name='dateDebut'
						format='MM/dd/yyyy'
						margin='normal'
						id='date-picker-inline'
						label='Date de réservation'
						value={selectedDateDebut}
						onChange={handleDateChangeDebut}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
				</MuiPickersUtilsProvider>
			</FormControl>

			<FormControl className={classes.formControl}>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						inputRef={register}
						disableToolbar
						variant='inline'
						name='dateFin'
						format='MM/dd/yyyy'
						margin='normal'
						id='date-picker-inline'
						label='Date de réservation'
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
				name='npPers'
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
				id='standard-number'
				label='Chiens (3€/j/animal)'
				InputLabelProps={{
					shrink: true,
				}}
			/>

			<Button>Calculer le tarif</Button>
		</form>
	);
};

export default FormCalculTarif;
