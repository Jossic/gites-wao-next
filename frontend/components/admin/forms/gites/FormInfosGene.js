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
			<TextField
				className={classes.textField}
				inputRef={register}
				name='couleur1'
				id='standard-number'
				type='color'
				// defaultValue='#AAAAAA'
				label='Couleur de fond'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='couleur2'
				id='standard-number'
				// defaultValue='#111111'
				type='color'
				label='Couleur du texte'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='bandeau'
				id='standard-number'
				label='Texte du bandeau - Laisser vide pour ne pas le faire apparaitre'
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
