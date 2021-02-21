import { FormControlLabel, Switch, TextField } from '@material-ui/core';

const FormInfosPratiques = ({ classes, register }) => {
	return (
		<>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='tarifDeBase'
				type='number'
				id='standard-number'
				label='Tarif de base'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='nPers'
				type='number'
				id='standard-number'
				label='Base de calcul (de 1 à X personnes)'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='supplementParPers'
				type='number'
				id='standard-number'
				label='Supplément par personne et par nuit au delà de 15'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='tarifParPersParNuit'
				type='number'
				id='standard-number'
				label='Tarif hors WE et vacances par personne et par nuit'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='ftMenage'
				type='number'
				id='standard-number'
				label='Montant du forfait ménage'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='ftLit'
				type='number'
				id='standard-number'
				label="Montant de l'option lit fait à l'arrivée"
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='caution'
				type='number'
				id='standard-number'
				label='Montant de la caution'
				InputLabelProps={{
					shrink: true,
				}}
			/>

			<TextField
				className={classes.textField}
				inputRef={register}
				name='coefficients.troisNuitees'
				type='number'
				id='standard-number'
				label='Coefficient appliqué pour le tarif sur 3 nuitées'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='coefficients.quatreNuitees'
				type='number'
				id='standard-number'
				label='Coefficient appliqué pour le tarif sur 4 nuitées'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='coefficients.uneNuitee'
				type='number'
				id='standard-number'
				label='Coefficient appliqué pour le tarif sur une nuitée'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='coefficients.basseSaison'
				type='number'
				id='standard-number'
				label='Coefficient appliqué pour le tarif en basse saison'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='coefficients.moyenneSaison'
				type='number'
				id='standard-number'
				label='Coefficient appliqué pour le tarif en moyenne saison'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='coefficients.hauteSaison'
				type='number'
				id='standard-number'
				label='Coefficient appliqué pour le tarif en haute saison'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='coefficients.noel'
				type='number'
				id='standard-number'
				label='Coefficient appliqué pour le tarif en trés haute saison (Noël)'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='coefficients.nouvelAn'
				type='number'
				id='standard-number'
				label='Coefficient appliqué pour le tarif en trés haute saison (Nouvel an)'
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</>
	);
};

export default FormInfosPratiques;
