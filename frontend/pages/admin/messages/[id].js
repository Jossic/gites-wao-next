import AdminHeader from '../../../components/layout/AdminHeader';
import Admin from '../../../components/auth/Admin';
import dayjs from 'dayjs';
import { listMessageById, setVu } from '../../../actions/messageActions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useEffect } from 'react';
import { getCookie } from '../../../actions/authActions';
import { withRouter } from 'next/router';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Link from 'next/link';

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
	//Envoyer la réponse
	//UseEffect mettant vu à true au chargement de la page
	//Afficher la réponse en dessous du message

	useEffect(() => {
		setVu(router.query.id, token);
	}, []);

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
						</CardContent>
						<CardContent>
							<Paper
								component='form'
								className={classes.rootPaper}>
								<form
									className={classes.rootPaper}
									noValidate
									autoComplete='off'>
									<TextareaAutosize
										style={{ width: '100%' }}
										aria-label='reponse'
										placeholder='Réponse'
										rowsMin={6}
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
					</Card>
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
