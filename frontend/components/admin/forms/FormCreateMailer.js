import {
	Button,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Snackbar,
	Switch,
	FormControlLabel,
	TextField,
	Grid,
} from '@material-ui/core';
import { withRouter } from 'next/router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { getCookie } from '../../../actions/authActions';
import { createMailer } from '../../../actions/mailerActions';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
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
		width: '80%',
	},
}));

const FormCreateMailer = () => {
	const token = getCookie('token');
	const classes = useStyles();
	const { control, register, handleSubmit } = useForm({
		// defaultValues: ,
	});

	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

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
		createMailer(data, token).then((result) => {
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
				<div className={classes.root}>
					<Snackbar
						open={open}
						autoHideDuration={6000}
						onClose={handleClose}>
						<Alert onClose={handleClose} severity='success'>
							{message}
						</Alert>
					</Snackbar>
				</div>
			)}
			{error && (
				<div className={classes.root}>
					<Snackbar
						open={open}
						autoHideDuration={6000}
						onClose={handleClose}>
						<Alert onClose={handleClose} severity='error'>
							{error}
						</Alert>
					</Snackbar>
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className={classes.textField}
					inputRef={register}
					name='nom'
					id='standard-number'
					label='Nom'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					className={classes.textField}
					inputRef={register}
					name='description'
					id='standard-number'
					label='Description'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					className={classes.textField}
					inputRef={register}
					name='sujet'
					id='standard-number'
					label='Sujet'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					className={classes.textField}
					inputRef={register}
					name='corps'
					id='standard-number'
					label='Corps'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'>
					<Grid item>
						<FormControl className={classes.formControl}>
							<InputLabel
								shrink
								id='demo-simple-select-placeholder-label-label'>
								Déclencheur (date)
							</InputLabel>
							<Controller
								control={control}
								name='declencheurDate'
								as={
									<Select id='civilite-select'>
										<MenuItem value='7 jours avant arrivée'>
											7 jours avant arrivée
										</MenuItem>
										<MenuItem value='7 jours après le départ'>
											7 jours après le départ
										</MenuItem>
									</Select>
								}
							/>
						</FormControl>
					</Grid>

					<Grid item>
						<FormControl className={classes.formControl}>
							<InputLabel
								shrink
								id='demo-simple-select-placeholder-label-label'>
								Déclencheur (action)
							</InputLabel>
							<Controller
								control={control}
								name='declencheurAction'
								as={
									<Select id='civilite-select'>
										<MenuItem value='à la validation du contrat'>
											à la validation du contrat
										</MenuItem>
										<MenuItem value='Autre exemple'>
											Autre exemple
										</MenuItem>
									</Select>
								}
							/>
						</FormControl>
					</Grid>
				</Grid>
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'>
					<FormControlLabel
						control={
							<Switch
								inputRef={register}
								checked={true}
								name='actif'
								color='primary'
							/>
						}
						label='Actif'
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

export default withRouter(FormCreateMailer);
