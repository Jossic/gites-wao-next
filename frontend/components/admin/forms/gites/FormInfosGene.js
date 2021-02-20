import { FormControlLabel, Switch, TextField } from '@material-ui/core';

const FormInfosGene = ({ classes, register }) => {
	return (
		<>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='nom'
				id='standard-number'
				label='Nom du gîte'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='adresse'
				id='standard-number'
				label='Adresse'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='cp'
				id='standard-number'
				label='Code Postal'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='ville'
				id='standard-number'
				label='Ville'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				type='number'
				name='capaciteMax'
				id='standard-number'
				label='Capacité maximum'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<FormControlLabel
				className={classes.textField}
				control={
					<Switch
						inputRef={register}
						name='actif'
						defaultChecked
						color='primary'
					/>
				}
				label='Visible'
			/>
		</>
	);
};

export default FormInfosGene;
