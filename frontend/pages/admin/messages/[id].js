import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import dayjs from 'dayjs';
import {
	addResponse,
	listMessageById,
	setVu,
} from '../../../actions/messageActions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useEffect, useState } from 'react';
import { getCookie } from '../../../actions/authActions';
import { withRouter } from 'next/router';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Router from 'next/router';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((darkTheme) => ({
	root: {
		minWidth: 275,
	},
	rootPaper: {
		padding: '6px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#212529',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	iconButton: {
		padding: 10,
	},
	input: {
		marginLeft: darkTheme.spacing(1),
		flex: 1,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

const MessageId = ({ message, router }) => {
	const classes = useStyles();
	const token = getCookie('token');
	const { control, handleSubmit } = useForm();

	const [values, setValues] = useState({
		open: false,
		loading: false,
		success: '',
		error: '',
		text: '',
	});
	const { success, loading, error, text } = values;

	//Envoyer le mail via Nodemailer

	useEffect(() => {
		setVu(router.query.id, token);
	}, []);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setValues({ ...values, open: false });
	};

	const onSubmit = async (data) => {
		setValues({ ...values, loading: true });
		console.log('data vaut =>', data);
		addResponse(data, router.query.id, token).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				console.log('une grosse erreur');
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
					open: true,
					text: result.text,
				});
				setTimeout(() => {
					Router.push('/admin/messages');
				}, 3000);
			}
		});
	};

	return (
		<>
			<AdminHeader>
				<Admin>
					{/* Fil d'ariane */}
					<h2 style={{ color: 'white' }}>
						Consultation du message de {message.nom}
					</h2>
					<Link href='/admin/messages'>
						<a>
							<BackspaceIcon
								fontSize='large'
								style={{ float: 'right', position: 'relative' }}
							/>
						</a>
					</Link>
					<hr />
					<Card className={classes.root}>
						<CardContent>
							<Typography variant='h5' component='h5'>
								Envoyé par {message.nom}
							</Typography>
							<Typography
								className={classes.title}
								color='textSecondary'
								gutterBottom>
								le{' '}
								{dayjs(message.createdAt).format(
									'DD/MM/YYYY à HH:mm'
								)}
							</Typography>

							<Typography
								className={classes.pos}
								color='textSecondary'>
								Coordonnées :{' '}
								<a href={`mailto:${message.mail}`}>
									{message.mail}
								</a>{' '}
								/ 0
								{`${message.tel
									.toString()
									.substring(
										0,
										1
									)} ${message.tel
									.toString()
									.substring(
										1,
										3
									)} ${message.tel
									.toString()
									.substring(
										3,
										5
									)} ${message.tel
									.toString()
									.substring(
										5,
										7
									)} ${message.tel
									.toString()
									.substring(7, 9)}`}
							</Typography>
							<Typography variant='body2' component='p'>
								Message :
								<br />
								{message.msg}
							</Typography>

							<hr />
							{message.reponse && (
								<Typography
									variant='body2'
									component='p'
									style={{ textAlign: 'right' }}>
									Réponse le{' '}
									{dayjs(message.dateReponse).format(
										'DD/MM/YYYY à HH:mm'
									)}
									:
									<br />
									{message.reponse}
								</Typography>
							)}
						</CardContent>
						{!message.repondu && (
							<CardContent>
								<Paper
									component='form'
									className={classes.rootPaper}>
									<form
										className={classes.rootPaper}
										onSubmit={handleSubmit(onSubmit)}
										autoComplete='off'>
										<Controller
											name='reponse'
											control={control}
											defaultValue='Réponse au message'
											render={({ onChange, value }) => (
												<TextareaAutosize
													style={{ width: '100%' }}
													aria-label='reponse'
													name='reponse'
													placeholder='Réponse'
													rowsMin={6}
													onChange={onChange}
													value={value}
												/>
											)}
										/>

										<Divider
											className={classes.divider}
											orientation='vertical'
										/>
										<IconButton
											type='submit'
											color='primary'
											className={classes.iconButton}
											aria-label='Envoyer'>
											<SendIcon />
										</IconButton>
									</form>
								</Paper>
							</CardContent>
						)}
					</Card>
					{success && (
						<Snackbar
							open={open}
							autoHideDuration={6000}
							onClose={handleClose}>
							<Alert onClose={handleClose} severity='success'>
								{text}
							</Alert>
						</Snackbar>
					)}
					{loading && <CircularProgress />}
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
				</Admin>
			</AdminHeader>
		</>
	);
};

export async function getServerSideProps(context) {
	const res1 = await listMessageById(context.params.id);
	const message = await res1;

	return {
		props: {
			message,
		},
	};
}

export default withRouter(MessageId);
