import { FormControlLabel, Switch, TextField } from '@material-ui/core';
import { useState } from 'react';

const FormInfosPages = ({ classes, register }) => {
	const [title, setTitle] = useState(70);
	const [mdesc, setMdesc] = useState(160);

	return (
		<>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='mtitle'
				id='standard-number'
				onChange={(e) => setTitle(70 - e.target.value.length)}
				label={`Meta Title - Possible de mettre en automatique éventuellement (Entre 50 et 70 caractères) - ${title}`}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='presGiteSEO'
				id='standard-number'
				onChange={(e) => setMdesc(160 - e.target.value.length)}
				multiline
				rows={3}
				label={`Texte pour la présentation SEO du gîte qui aparaitra dans les SERP Google (environ 150-160 caractères) - ${mdesc}`}
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='detailGite'
				multiline
				rows={3}
				id='standard-number'
				label='Descriptif du gîte (idem ci-dessus mais possible plus long)'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='texteExterieur'
				multiline
				rows={3}
				id='standard-number'
				label="Texte de présentation de l'exterieur du gîte"
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='equipementExterieur'
				id='standard-number'
				label='equipementExterieur (séparer les équipements par une virgule ",").'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='texteInterieur'
				multiline
				rows={3}
				id='standard-number'
				label="Texte de présentation de l'interieur du gîte"
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='equipementInterieur'
				id='standard-number'
				label='equipementInterieur (séparer les équipements par une virgule ",").'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='textePiscine'
				multiline
				rows={3}
				id='standard-number'
				label='Texte de présentation de la piscine'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='equipementPiscine'
				id='standard-number'
				label='Equipement Piscine (séparer les équipements par une virgule ",").'
				InputLabelProps={{
					shrink: true,
				}}
			/>
			<TextField
				className={classes.textField}
				inputRef={register}
				name='texte'
				multiline
				rows={3}
				id='standard-number'
				label='Texte à définir'
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</>
	);
};

export default FormInfosPages;
