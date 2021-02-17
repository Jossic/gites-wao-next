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
} from '@material-ui/core';
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

const FormStatus = ({ preloadedValues }) => {
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
				<Grid
					container
					direction='column'
					justify='space-around'
					alignItems='stretch'>
					<Grid item>
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
					</Grid>
					<Grid item>
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
					</Grid>
					<Grid item>
						<FormControl className={classes.formControl}>
							<TextField
								inputRef={register}
								name='dateContrat'
								id='standard-number'
								label='Date de génération du contrat'
								type='date'
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</FormControl>
					</Grid>

					<Button
						type='submit'
						variant='contained'
						color='primary'
						className={classes.button}>
						Valider
					</Button>
				</Grid>
			</form>
		</>
	);
};

export default withRouter(FormStatus);
