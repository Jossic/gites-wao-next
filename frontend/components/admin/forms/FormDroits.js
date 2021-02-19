import {
	Button,
	CircularProgress,
	FormControlLabel,
	Grid,
	Paper,
	TableBody,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	Checkbox,
} from '@material-ui/core';
import { withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCookie } from '../../../actions/authActions';
import Router from 'next/router';
import { withSnackbar } from '../../HOC/Snackbar';
import { updateUser } from '../../../actions/userActions';

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

const FormDroits = ({ snackbarShowMessage, router, user }) => {
	const token = getCookie('token');
	const classes = useStyles();
	const { register, handleSubmit } = useForm({
		// defaultValues:true
	});

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		console.log(data);
		setLoading(true);
		updateUser(data, user._id, token).then((result) => {
			console.log('result', result);
			if (result.error) {
				setLoading(false);
				snackbarShowMessage(`${result.error}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${result.message}`, 'success');
				// setTimeout(() => {
				// 	Router.push(`/admin/users/${router.query.id}`, null, {
				// 		shallow: true,
				// 	});
				// }, 3000);
			}
		});
	};

	return (
		<>
			{loading && <CircularProgress />}

			<form onSubmit={handleSubmit(onSubmit)}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Droit de :</TableCell>
								<TableCell align='center'>
									Consultation
								</TableCell>
								<TableCell align='center'>Ecriture</TableCell>
								<TableCell align='center'>
									Modification
								</TableCell>
								<TableCell align='center'>
									Suppression
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component='th' scope='row'>
									Gérer des réservations
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell component='th' scope='row'>
									Gérer les gîtes
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell component='th' scope='row'>
									Gérer les pages
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell component='th' scope='row'>
									Gérer les messages
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell component='th' scope='row'>
									Gérer les utilisateurs
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell component='th' scope='row'>
									Gérer les mails
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell component='th' scope='row'>
									Gérer les clients
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
								<TableCell align='center'>
									<FormControlLabel
										control={
											<Checkbox
												name='contact'
												inputRef={register}
												defaultChecked
											/>
										}
										label=''
									/>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>

				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.button}>
					Valider ces droits
				</Button>
			</form>
		</>
	);
};

export default withRouter(withSnackbar(FormDroits));
