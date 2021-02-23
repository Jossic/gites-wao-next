import {
	FormControl,
	FormControlLabel,
	Switch,
	TextField,
} from '@material-ui/core';

const FormInfosDiverses = ({ classes, register }) => {
	return (
		<>
			<FormControl className={classes.formControl}>
				<TextField
					inputRef={register}
					name='videoLink'
					id='standard-number'
					label='Lien vidéo YouTube'
					multiline
					rows={3}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</FormControl>
			<FormControl className={classes.formControl}>
				<TextField
					inputRef={register}
					name='calendrierLink'
					id='standard-number'
					label='Lien calendrier Google'
					multiline
					rows={5}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</FormControl>
			<FormControl className={classes.formControl}>
				<TextField
					inputRef={register}
					name='calendarId'
					id='standard-number'
					label='Id calendrier Google'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</FormControl>
		</>
	);
};

export default FormInfosDiverses;
