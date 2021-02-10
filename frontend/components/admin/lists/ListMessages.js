// import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { getCookie } from '../../../actions/authActions';
import { Alert, Spinner } from 'reactstrap';
import { removeMessage } from '../../../actions/messageActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const ListMessages = ({ messages, newMessages }) => {
	const classes = useStyles();

	const token = getCookie('token');

	const [values, setvalues] = useState({
		loading: false,
		error: '',
		success: '',
		message: '',
	});

	const { loading, success, error, message } = values;

	const deleteMessage = (id) => {
		setvalues({ ...values, loading: true });
		removeMessage(id, token).then((data) => {
			console.log('data vaut', data);
			if (data.error) {
				setvalues({
					...values,
					loading: false,
					error: true,
					success: false,
				});
			} else {
				setvalues({
					...values,
					loading: false,
					error: '',
					success: true,
					message: data.text,
				});
			}
		});
	};

	const deleteConfirm = (id) => {
		let answer = window.confirm(
			`Suppression du message ${id}, êtes-vous sûr ?`
		);
		if (answer) {
			deleteMessage(id);
		}
	};

	return (
		<>
			{loading && <Spinner />}
			{success && <Alert color='success'>{message}</Alert>}
			{error && <Alert color='danger'>Une erreur est survenue</Alert>}
			<p style={{ color: 'white' }}>Vous avez {newMessages} non lus !</p>
			<TableContainer
				component={Paper}
				style={{ backgroundColor: '#282c34', color: 'white' }}
				height='100%'>
				<Table
					style={{}}
					className={classes.table}
					aria-label='simple table'>
					{/* style={{
						marginTop: '30px',
						borderCollapse: 'separate',
						borderSpacing: '0 10px',
						color: 'white',
					}}> */}
					<TableHead>
						<TableRow>
							<TableCell>#ID</TableCell>
							<TableCell>Nom</TableCell>
							<TableCell>Mail</TableCell>
							<TableCell>Tel</TableCell>
							<TableCell>Message</TableCell>
							<TableCell colSpan='2'>Répondre/Suppr</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{messages.map((msge, i) => (
							<TableRow
								// style={
								// 	!msge.vu
								// 		? {
								// 				backgroundColor: '#56e8ff',
								// 				paddingBottom: '20px',
								// 				boxShadow:
								// 					'-1px 2px 5px 1px rgba(0,0,0,0.7), -1px 2px 20px rgba(255,255,255,0.6) inset',
								// 		  }
								// 		: {
								// 				backgroundColor: '#adedff',
								// 				paddingBottom: '20px',
								// 		  }
								// }
								key={i}>
								<TableCell>{msge._id}</TableCell>
								<TableCell>{msge.nom}</TableCell>
								<TableCell>{msge.mail}</TableCell>
								<TableCell>{msge.tel}</TableCell>
								<TableCell>{msge.msg}</TableCell>

								<TableCell>
									<Link
										href={`/admin/message/repondre/${msge._id}`}>
										<a>
											<i
												className='fas fa-reply'
												style={{ color: 'blue' }}></i>
										</a>
									</Link>
								</TableCell>
								<TableCell>
									<i
										onClick={() =>
											deleteConfirm(partenaire._id)
										}
										className='fas fa-trash-alt'
										style={{
											color: 'red',
											cursor: 'pointer',
										}}></i>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default ListMessages;
