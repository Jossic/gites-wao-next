import {
	Button,
	Checkbox,
	CircularProgress,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Snackbar,
	Switch,
	TextareaAutosize,
	TextField,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import dayjs from 'dayjs';
import { withRouter } from 'next/router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { updateReservation } from '../../../../actions/reservationActions';
import { getCookie } from '../../../../actions/authActions';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
		marginTop: theme.spacing(2),
		width: '100%',
	},
	formControl: {
		margin: theme.spacing(1),
	},
	textField: {
		margin: theme.spacing(1),
	},
}));

const FormLocation = ({ preloadedValues }) => {
	const [selectedDateArrivee, setSelectedDateArrivee] = React.useState();
	const [selectedDateDepart, setSelectedDateDepart] = React.useState();

	const handleDateChangeArrivee = (date) => {
		setSelectedDateArrivee(date);
	};

	const handleDateChangeDepart = (date) => {
		setSelectedDateDepart(date);
	};

	const token = getCookie('token');
	const classes = useStyles();
	const { control, register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [values, setValues] = useState({
		dateArrivee: dayjs(preloadedValues.dateArrivee).format('yyyy-MM-dd'),
		dateDepart: preloadedValues.dateDepart,
		loading: false,
		success: '',
		error: '',
		message: '',
	});
	const {
		success,
		loading,
		error,
		message,
		dateArrivee,
		dateDepart,
	} = values;

	const onSubmit = async (data) => {
		console.log(data);
		setValues({ ...values, loading: true });
		updateReservation(data, router.query.id, token).then((result) => {
			if (result.error) {
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
					message: result.message,
				});
				// setTimeout(() => {
				// 	Router.push('/admin/gestionDivers/partenaires');
				// }, 3000);
			}
		});
	};

	return (
		<>
			{loading && <CircularProgress />}
			{success && (
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}>
					<Alert onClose={handleClose} severity='success'>
						{message}
					</Alert>
				</Snackbar>
			)}
			{error && (
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}>
					<Alert onClose={handleClose} severity='error'>
						{error}
					</Alert>
				</Snackbar>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container justify='space-around'>
					<TextField
						inputRef={register}
						name='nbPers'
						id='standard-number'
						label='Nombre de personnes total'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='nbEnf'
						id='standard-number'
						label='Enfants de moins de 18 ans'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='nbChien'
						id='standard-number'
						label='Nombre de chien '
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='nbPersSup'
						id='standard-number'
						label='Nombre de personnes > 15 '
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>

				<Grid container justify='space-around'>
					<FormControl className={classes.formControl}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								inputRef={register}
								disableToolbar
								variant='inline'
								name='dateArrivee'
								format='MM/dd/yyyy'
								margin='normal'
								id='date-picker-inline'
								label='Date de début'
								value={selectedDateArrivee}
								onChange={handleDateChangeArrivee}
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
								name='dateDepart'
								format='MM/dd/yyyy'
								margin='normal'
								id='date-picker-inline'
								label='Date de début'
								value={selectedDateDepart}
								onChange={handleDateChangeDepart}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</MuiPickersUtilsProvider>
					</FormControl>
				</Grid>
				<Grid container justify='space-around'>
					<FormControl className={classes.formControl}>
						<InputLabel
							shrink
							id='demo-simple-select-placeholder-label-label'>
							Heure d'arrivée
						</InputLabel>
						<Controller
							control={control}
							name='heureArrivee'
							defaultValue='à partir de 17h'
							as={
								<Select id='heureArrivee-select'>
									<MenuItem value='en matinée'>
										en matinée
									</MenuItem>
									<MenuItem value='à partir de 9h'>
										à partir de 9h
									</MenuItem>
									<MenuItem value='à partir de 10h'>
										à partir de 10h
									</MenuItem>
									<MenuItem value='à partir de 10h30'>
										à partir de 10h30
									</MenuItem>
									<MenuItem value='à partir de 11h'>
										à partir de 11h
									</MenuItem>
									<MenuItem value='à partir de 11h30'>
										à partir de 11h30
									</MenuItem>
									<MenuItem value='au plus tard 11h'>
										au plus tard 11h
									</MenuItem>
									<MenuItem value='a partir de midi'>
										a partir de midi
									</MenuItem>
									<MenuItem value='à partir de 13h'>
										à partir de 13h
									</MenuItem>
									<MenuItem value='à partir de 14h'>
										à partir de 14h
									</MenuItem>
									<MenuItem value='à partir de 14h30'>
										à partir de 14h30
									</MenuItem>
									<MenuItem value='à partir de 15h'>
										à partir de 15h
									</MenuItem>
									<MenuItem value='à partir de 16h'>
										à partir de 16h
									</MenuItem>
									<MenuItem value='à partir de 16h30'>
										à partir de 16h30
									</MenuItem>
									<MenuItem value='à partir de 17h'>
										à partir de 17h
									</MenuItem>
									<MenuItem value='à partir de 17h30'>
										à partir de 17h30
									</MenuItem>
									<MenuItem value='à partir de 18h'>
										à partir de 18h
									</MenuItem>
									<MenuItem value='à partir de 18h30'>
										à partir de 18h30
									</MenuItem>
									<MenuItem value='à partir de 19h'>
										à partir de 19h
									</MenuItem>
									<MenuItem value='à partir de 19h30'>
										à partir de 19h30
									</MenuItem>
									<MenuItem value='à partir de 20h'>
										à partir de 20h
									</MenuItem>
									<MenuItem value='en soirée'>
										en soirée
									</MenuItem>
								</Select>
							}
						/>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel
							shrink
							id='demo-simple-select-placeholder-label-label'>
							Heure de départ
						</InputLabel>
						<Controller
							control={control}
							name='heureDepart'
							defaultValue='au plus tard 17h'
							as={
								<Select id='heureDepart-select'>
									<MenuItem value='en matinée'>
										en matinée
									</MenuItem>
									<MenuItem value='au plus tard 11h'>
										au plus tard 11h
									</MenuItem>
									<MenuItem value='au plus tard 11h'>
										au plus tard 11h
									</MenuItem>
									<MenuItem value='au plus tard midi'>
										a partir de midi
									</MenuItem>
									<MenuItem value='au plus tard 13h'>
										au plus tard 13h
									</MenuItem>
									<MenuItem value='au plus tard 13h30'>
										au plus tard 13h30
									</MenuItem>
									<MenuItem value='au plus tard 14h'>
										au plus tard 14h
									</MenuItem>
									<MenuItem value='au plus tard 15h'>
										au plus tard 15h
									</MenuItem>
									<MenuItem value='au plus tard 16h'>
										au plus tard 16h
									</MenuItem>
									<MenuItem value='au plus tard 16h30'>
										au plus tard 16h30
									</MenuItem>
									<MenuItem value='au plus tard 17h'>
										au plus tard 17h
									</MenuItem>
									<MenuItem value='au plus tard 19h'>
										au plus tard 19h
									</MenuItem>
									<MenuItem value='en soirée'>
										en soirée
									</MenuItem>
								</Select>
							}
						/>
					</FormControl>
				</Grid>
				<Grid container justify='space-around'>
					<FormControl
						component='fieldset'
						className={classes.formControl}>
						<FormLabel component='legend'>Contact par :</FormLabel>
						<FormGroup>
							<Grid container justify='space-around'>
								<FormControlLabel
									control={
										<Checkbox
											name='contactMail'
											inputRef={register}
											defaultValue={false}
										/>
									}
									label='Mail'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='contactTel'
											inputRef={register}
											defaultValue={false}
										/>
									}
									label='Téléphone'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='contactAbritel'
											inputRef={register}
											defaultValue={false}
										/>
									}
									label='Abritel'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='contactLeboncoin'
											inputRef={register}
											defaultValue={false}
										/>
									}
									label='Leboncoin'
								/>
								<FormControlLabel
									control={
										<Checkbox
											name='contactAutre'
											inputRef={register}
											defaultValue={false}
										/>
									}
									label='Autre'
								/>
							</Grid>
						</FormGroup>
						{/* <FormHelperText>Be careful</FormHelperText> */}
					</FormControl>
				</Grid>
				<Grid container justify='space-around'>
					<TextField
						inputRef={register}
						name='ftLit'
						id='standard-number'
						label='Montant forfait lit'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='ftMenage'
						id='standard-number'
						label='Montant forfait ménage'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='mtAnimaux'
						id='standard-number'
						label='Montant animaux'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.button}>
					Valider les modifications
				</Button>
			</form>
		</>
	);
};

export default withRouter(FormLocation);
