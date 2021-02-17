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

const FormContrat = ({ preloadedValues }) => {
	console.log(preloadedValues);
	const token = getCookie('token');
	const classes = useStyles();
	const { control, register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [values, setValues] = useState({
		heureArrivee: 'à partir de 17h',
		heureDepart: 'à partir de 17h',
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
				<Grid container justify='space-around'>
					<TextField
						inputRef={register}
						name='mtRes'
						id='standard-number'
						label='Montant de la réservation (sans suppl.)'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>
				<Grid container justify='space-around'>
					<TextField
						inputRef={register}
						name='remise'
						id='standard-number'
						label='Remise ou supplément (en €)'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<FormControl className={classes.formControl}>
						<InputLabel
							shrink
							id='demo-simple-select-placeholder-label-label'>
							Motif de la remise
						</InputLabel>
						<Controller
							control={control}
							name='heureArrivee'
							defaultValue=''
							as={
								<Select id='heureArrivee-select'>
									<MenuItem value='Remise exceptionnelle'>
										Remise exceptionnelle
									</MenuItem>
									<MenuItem value='Remise pour plusieurs séjours'>
										Remise pour plusieurs séjours
									</MenuItem>
									<MenuItem value='Remise pour enfants'>
										Remise pour enfants
									</MenuItem>
									<MenuItem value='Ménage offert'>
										Ménage offert
									</MenuItem>
									<MenuItem value='Ménage offert et remise enfant(s)'>
										Ménage offert et remise enfant(s)
									</MenuItem>
									<MenuItem value='Ménage offert et chien(s) gratuit(s)'>
										Ménage offert et chien(s) gratuit(s)
									</MenuItem>
									<MenuItem value='Chien(s) gratuit(s)'>
										Chien(s) gratuit(s)
									</MenuItem>
									<MenuItem value='Remise fidélité'>
										Remise fidélité
									</MenuItem>
									<MenuItem value='Ajustement taxes diverses'>
										Ajustement taxes diverses
									</MenuItem>
									<MenuItem value='Complément pour arrivée en matinée'>
										Complément pour arrivée en matinée
									</MenuItem>
									<MenuItem value='Remise diverse'>
										Remise diverse
									</MenuItem>
									<MenuItem value='Ajout divers'>
										Ajout divers
									</MenuItem>
									<MenuItem value='Complément'>
										Complément
									</MenuItem>
									<MenuItem value='Offre spéciale'>
										Offre spéciale
									</MenuItem>
								</Select>
							}
						/>
					</FormControl>
				</Grid>

				<Grid container justify='space-around'>
					<TextField
						inputRef={register}
						name='mtTaxesDiverses'
						id='standard-number'
						label='Montant des taxes diverses'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='mtSuppl'
						id='standard-number'
						label='Montant total suppl. /nuit/pers'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='caution'
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

export default withRouter(FormContrat);
