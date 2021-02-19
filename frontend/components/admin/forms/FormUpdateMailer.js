import {
	Button,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Switch,
	FormControlLabel,
	TextField,
	Grid,
	ListSubheader,
	ButtonGroup,
} from '@material-ui/core';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../../util/quill';
import { withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { getCookie } from '../../../actions/authActions';
import { updateMailer } from '../../../actions/mailerActions';
import Router from 'next/router';
import { withSnackbar } from '../../HOC/Snackbar';

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

const FormUpdateMailer = ({ snackbarShowMessage, preloadedValues, router }) => {
	const token = getCookie('token');
	const classes = useStyles();
	const { control, register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		console.log(data);
		setLoading(true);
		updateMailer(data, router.query.id, token).then((result) => {
			console.log('result', result);
			if (result.error) {
				setLoading(false);
				snackbarShowMessage(`${result.error}`);
			} else {
				setLoading(false);
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
						<Grid container style={{ margin: '10px' }}>
							<Button variant='contained' color='primary'>
								client.name
							</Button>
							<Button variant='contained' color='primary'>
								client.firstname
							</Button>
							<Button variant='contained' color='primary'>
								client.address
							</Button>
							<Button variant='contained' color='primary'>
								client.zip
							</Button>
							<Button variant='contained' color='primary'>
								client.city
							</Button>
							<Button variant='contained' color='default'>
								booking.arrival
							</Button>
							<Button variant='contained' color='default'>
								booking.end
							</Button>
						</Grid>
					</InputLabel>
					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
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
					Modifier ce mailer
				</Button>
			</form>
		</>
	);
};

export default withRouter(withSnackbar(FormUpdateMailer));
