import {
	Button,
	CircularProgress,
	Switch,
	FormControlLabel,
	TextField,
	Grid,
} from '@material-ui/core';
import { withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCookie } from '../../../actions/authActions';
import Router from 'next/router';
import { withSnackbar } from '../../HOC/Snackbar';
import { createUser } from '../../../actions/userActions';

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

const FormCreateUser = ({ snackbarShowMessage }) => {
	const token = getCookie('token');
	const classes = useStyles();
	const { register, handleSubmit } = useForm({
		// defaultValues: ,
	});

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		console.log(data);
		setLoading(true);
		createUser(data, token).then((result) => {
			console.log('result', result);
			if (result.error) {
				setLoading(false);
				snackbarShowMessage(`${result.error}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${result.message}`, 'success');
				setTimeout(() => {
					Router.push('/admin/users', null, { shallow: true });
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
					name='name'
					id='standard-number'
					label='Nom'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					className={classes.textField}
					inputRef={register}
					name='email'
					type='mail'
					id='standard-number'
					label='Mail'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					className={classes.textField}
					inputRef={register}
					name='password'
					type='password'
					id='standard-number'
					label='Mot de passe'
					InputLabelProps={{
						shrink: true,
					}}
				/>

				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'>
					<FormControlLabel
						control={
							<Switch
								inputRef={register}
								name='isAdmin'
								defaultChecked
								color='primary'
							/>
						}
						label='Admin'
					/>
				</Grid>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.button}>
					Créer cet utilisateur
				</Button>
			</form>
		</>
	);
};

export default withRouter(withSnackbar(FormCreateUser));
