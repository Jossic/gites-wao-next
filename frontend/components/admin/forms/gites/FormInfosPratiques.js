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
				name='troisNuitees'
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
				name='quatreNuitees'
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
				name='uneNuitee'
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
				name='basseSaison'
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
				name='moyenneSaison'
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
				name='hauteSaison'
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
				name='noel'
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
				name='nouvelAn'
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
