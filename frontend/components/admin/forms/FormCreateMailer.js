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
	ListSubheader,
} from '@material-ui/core';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../../util/quill';
import { withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { getCookie } from '../../../actions/authActions';
import { createMailer } from '../../../actions/mailerActions';
import Router from 'next/router';
import { withSnackbar } from '../../HOC/Snackbar';

// function Alert(props) {
// 	return <MuiAlert elevation={6} variant='filled' {...props} />;
// }

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(1),
		marginTop: theme.spacing(2),
		width: '100%',
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

const FormCreateMailer = ({ snackbarShowMessage }) => {
	const token = getCookie('token');
	const classes = useStyles();
	const { control, register, handleSubmit } = useForm({
		// defaultValues: ,
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
		createMailer(data, token).then((result) => {
			console.log('result', result);
			if (result.error) {
				setValues({ ...values, error: result.error });
				// setOpen(true);
				snackbarShowMessage(`${result.error}`);
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
					message: result.message,
				});
				// setOpen(true);
				snackbarShowMessage(`${result.message}`, 'success');
				setTimeout(() => {
					Router.push('/admin/mailer', null, { shallow: true });
				}, 3000);
			}
		});
	};

	return (
		<>
			{loading && <CircularProgress />}

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

				<FormControl className={classes.formControl}>
					<InputLabel
						shrink
						id='demo-simple-select-placeholder-label-label'>
						"Corps du mail - Pour ajouter une variable, il faut
						l'ajouter dans les balises suivantes : ${}
						Liste des variables disponibles : client, reservation,
						gite
					</InputLabel>
					<Controller
						style={{ paddingTop: '30px' }}
						as={ReactQuill}
						control={control}
						name='corps'
						theme='snow'
						placeholder='Corps du mail ici...'
						modules={QuillModules}
						formats={QuillFormats}
					/>
				</FormControl>

				<FormControl className={classes.formControl}>
					<InputLabel
						shrink
						id='demo-simple-select-placeholder-label-label'>
						Déclencheur
					</InputLabel>
					<Controller
						control={control}
						name='declencheur'
						as={
							<Select
								id='declencheur-select'
								defaultValue='Envoi manuel'>
								<ListSubheader>Manuel</ListSubheader>
								<MenuItem value='Envoi manuel'>
									Envoi manuel
								</MenuItem>
								<ListSubheader>Date</ListSubheader>
								<MenuItem value='7 jours avant arrivée'>
									7 jours avant arrivée
								</MenuItem>
								<MenuItem value='7 jours après le départ'>
									7 jours après le départ
								</MenuItem>
								<ListSubheader>Action</ListSubheader>
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

				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'>
					<FormControlLabel
						control={
							<Switch
								inputRef={register}
								// checked={true}
								name='actif'
								defaultChecked
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
					Créer ce mailer
				</Button>
			</form>
		</>
	);
};

export default withRouter(withSnackbar(FormCreateMailer));
