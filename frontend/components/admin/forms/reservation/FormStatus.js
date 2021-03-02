import {
	Button,
	CircularProgress,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Snackbar,
	TextareaAutosize,
	TextField,
	Typography,
} from '@material-ui/core';
import { withRouter } from 'next/router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { updateReservation } from '../../../../actions/reservationActions';
import { getCookie } from '../../../../actions/authActions';

import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';

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
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: '100%',
	},
	textField: {
		margin: theme.spacing(1),
		width: '25ch',
	},
}));

const FormStatus = ({ preloadedValues, generateContract }) => {
	const [selectedDateRes, setSelectedDateRes] = React.useState();
	const [selectedDateContrat, setSelectedDateContrat] = React.useState();
	console.log(preloadedValues.dateContrat);
	const handleDateChangeRes = (date) => {
		setSelectedDateRes(date);
	};

	const handleDateChangeContrat = (date) => {
		setSelectedDateContrat(date);
	};
	const token = getCookie('token');
	const classes = useStyles();

	const { control, register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [values, setValues] = useState({
		loading: false,
		success: '',
		error: '',
		message: '',
	});
	const { success, loading, error, message } = values;

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
				<Grid container>
					<FormControl className={classes.formControl}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								inputRef={register}
								disableToolbar
								variant='inline'
								name='dateRes'
								format='MM/dd/yyyy'
								margin='normal'
								id='date-picker-inline'
								label='Date de réservation'
								value={selectedDateRes}
								onChange={handleDateChangeRes}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</MuiPickersUtilsProvider>
					</FormControl>

					<FormControl className={classes.formControl}>
						<InputLabel
							shrink
							id='demo-simple-select-placeholder-label-label'>
							Status de la réservation
						</InputLabel>

						<Controller
							control={control}
							name='status'
							as={
								<Select id='status-select'>
									<MenuItem value='Nouvelle réservation'>
										Nouvelle réservation
									</MenuItem>
									<MenuItem value='Contrat envoyé'>
										Contrat envoyé
									</MenuItem>
									<MenuItem value='Acompte/Contrat reçu'>
										Acompte/Contrat reçu
									</MenuItem>
									<MenuItem value='Relance contrat non reçu'>
										Relance contrat non reçu
									</MenuItem>
									<MenuItem value='Reservation terminée'>
										Reservation terminée
									</MenuItem>
									<MenuItem value='Reservation/Contrat annulée'>
										Reservation/Contrat annulée
									</MenuItem>
								</Select>
							}
						/>
					</FormControl>

					{preloadedValues.status === 'Acompte/Contrat reçu' && (
						<FormControl className={classes.formControl}>
							<InputLabel
								shrink
								id='demo-simple-select-placeholder-label-label'>
								Contrat reçu par :
							</InputLabel>

							<Controller
								control={control}
								name='contratRemisPar'
								as={
									<Select id='status-select'>
										<MenuItem value='Mail'>Mail</MenuItem>
										<MenuItem value='Main propre'>
											Main propre
										</MenuItem>
										<MenuItem value='Courrier'>
											Courrier
										</MenuItem>
										<MenuItem value='Autre'>Autre</MenuItem>
									</Select>
								}
							/>
						</FormControl>
					)}

					<FormControl className={classes.formControl}>
						<TextField
							inputRef={register}
							name='infoCompl'
							id='standard-number'
							label='Message du locataire'
							multiline
							rows={3}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</FormControl>

					<FormControl className={classes.formControl}>
						<TextField
							inputRef={register}
							name='commentaire'
							id='standard-number'
							label='Note spécifique'
							multiline
							rows={2}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</FormControl>

					{preloadedValues.dateContrat ? (
						<FormControl className={classes.formControl}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									inputRef={register}
									disableToolbar
									variant='inline'
									name='dateContrat'
									disabled
									format='dd/MM/yyyy'
									margin='normal'
									id='date-picker-inline'
									label='Date de génération du contrat'
									value={selectedDateContrat}
									onChange={handleDateChangeContrat}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
								/>
							</MuiPickersUtilsProvider>
						</FormControl>
					) : (
						<Button
							onClick={generateContract}
							variant='contained'
							color='secondary'>
							Générer le contrat
						</Button>
					)}
				</Grid>

				<Button
					type='submit'
					variant='contained'
					color='primary'
					style={{ width: '100%' }}
					className={classes.button}>
					Valider les modifications
				</Button>
			</form>
		</>
	);
};

export default withRouter(FormStatus);
