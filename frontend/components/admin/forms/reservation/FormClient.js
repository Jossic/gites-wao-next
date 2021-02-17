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
		width: '100%',
	},
	formControl: {
		margin: theme.spacing(1),
	},
	textField: {
		margin: theme.spacing(1),
	},
}));

const FormClient = ({ preloadedValues }) => {
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
				<Grid container justify='space-around'>
					<FormControl className={classes.formControl}>
						<InputLabel
							shrink
							id='demo-simple-select-placeholder-label-label'>
							Civilité
						</InputLabel>
						<Controller
							control={control}
							name='civilite'
							as={
								<Select id='civilite-select'>
									<MenuItem value='mmme'>M. & Mme</MenuItem>
									<MenuItem value='mme'>Mme</MenuItem>
									<MenuItem value='mlle'>Mlle</MenuItem>
									<MenuItem value='m'>M.</MenuItem>
									<MenuItem value='asso'>
										Association
									</MenuItem>
									<MenuItem value='ce'>
										Comité d'entreprise
									</MenuItem>
									<MenuItem value='soc'>Société</MenuItem>
									<MenuItem value='entr'>Entreprise</MenuItem>
									<MenuItem value='foyervie'>
										Foyer de vie
									</MenuItem>
									<MenuItem value='foyeracc'>
										Foyer d'accueil
									</MenuItem>
									<MenuItem value='famil'>Famille</MenuItem>
									<MenuItem value='autre'>Autres</MenuItem>
								</Select>
							}
						/>
					</FormControl>

					<TextField
						inputRef={register}
						name='nom'
						id='standard-number'
						label='Nom'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='prenom'
						id='standard-number'
						label='Prénom'
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>
				<Grid container justify='space-around'>
					<TextField
						inputRef={register}
						name='adresse'
						id='standard-number'
						label='Adresse'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='cp'
						id='standard-number'
						label='Code Postal'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='ville'
						id='standard-number'
						label='Ville'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<FormControl className={classes.formControl}>
						<InputLabel
							shrink
							id='demo-simple-select-placeholder-label-label'>
							Pays
						</InputLabel>

						<Controller
							control={control}
							name='pays'
							as={
								<Select id='pays-select'>
									<MenuItem value='france'>France</MenuItem>
									<MenuItem value=''>--------</MenuItem>
									<MenuItem value='autres'>Autres</MenuItem>
									<MenuItem value='allemagne'>
										Allemagne
									</MenuItem>
									<MenuItem value='angleterre'>
										Angleterre
									</MenuItem>
									<MenuItem value='belgique'>
										Belgique
									</MenuItem>
									<MenuItem value='hollande'>
										Hollande
									</MenuItem>
									<MenuItem value='luxembourg'>
										Luxembourg
									</MenuItem>
									<MenuItem value='suisse'>Suisse</MenuItem>
								</Select>
							}
						/>
					</FormControl>
				</Grid>
				<Grid container justify='space-around'>
					<TextField
						inputRef={register}
						name='tel'
						id='standard-number'
						label='Téléphone'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<TextField
						inputRef={register}
						name='mail'
						id='standard-number'
						label='Email'
						type='mail'
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

export default withRouter(FormClient);
