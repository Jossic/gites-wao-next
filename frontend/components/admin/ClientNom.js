import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/authActions';
import { getClientById } from '../../actions/clientActions';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}))(Badge);

const ClientNom = ({ value }) => {
	const [client, setClient] = useState({});

	const token = getCookie('token');

	const listerUnClient = () => {
		getClientById(value, token).then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setClient(data);
			}
		});
	};

	useEffect(() => {
		listerUnClient();
	}, []);

	return (
		<>
			{client.nom} {client.prenom}{' '}
			<IconButton aria-label='res'>
				<StyledBadge badgeContent={client.nbReserv} color='secondary'>
					<AssignmentIndIcon />
				</StyledBadge>
			</IconButton>
			{client.nbVenu === 0 ? (
				<IconButton aria-label='venu'>
					<StyledBadge badgeContent={client.nbVenu} color='primary'>
						<NotInterestedIcon />
					</StyledBadge>
				</IconButton>
			) : (
				<IconButton aria-label='venu'>
					<StyledBadge badgeContent={client.nbVenu} color='primary'>
						<CheckIcon />
					</StyledBadge>
				</IconButton>
			)}
		</>
	);
};

export default ClientNom;
