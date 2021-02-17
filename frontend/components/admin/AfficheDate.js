import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';

const AfficheDate = ({ value }) => {
	return (
		<>
			<Typography
				variant='body2'
				component='p'
				style={{ textAlign: 'right' }}>
				{dayjs(value).format('DD/MM/YYYY')}
			</Typography>
		</>
	);
};

export default AfficheDate;
