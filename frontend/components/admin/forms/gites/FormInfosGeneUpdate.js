import { FormControlLabel, Switch, TextField, Button } from '@material-ui/core';

const FormInfosGene = ({ classes, register, preloadedValues }) => {
	console.log('vite ici vaut', preloadedValues);
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
			<Button
				type='submit'
				variant='contained'
				color='primary'
				className={classes.button}>
				Valider les modifications
			</Button>
		</>
	);
};

export default FormInfosGene;
