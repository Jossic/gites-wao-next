import {
	Button,
	CircularProgress,
	FormControl,
	InputLabel,
	TextField,
} from '@material-ui/core';
import { withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { getCookie } from '../../../../actions/authActions';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../../../util/quill';
import { withSnackbar } from '../../../HOC/Snackbar';
import { updateGite } from '../../../../actions/giteActions';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
		marginTop: theme.spacing(2),
		width: '100%',
	},
	formControl: {
		margin: theme.spacing(1),
		width: '100%',
	},
	textField: {
		margin: theme.spacing(1),
		width: '100%',
	},
}));

const FormInfosContrat = ({ snackbarShowMessage, preloadedValues, router }) => {
	const token = getCookie('token');
	const classes = useStyles();
	const { control, register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data) => {
		console.log('data vaut', data);
		setLoading(true);
		updateGite(data, router.query.id, token).then((result) => {
			if (result.error) {
				setLoading(false);
				snackbarShowMessage(`${result.error}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${result.message}`, 'success');
			}
		});
	};

	return (
		<>
			{loading && <CircularProgress />}

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl className={classes.formControl}>
					<TextField
						inputRef={register}
						name='ctDesignationTitre'
						id='standard-number'
						label='Première ligne de la désignation des lieux'
						multiline
						rows={2}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel style={{ margin: '20px 10px 10px 15px' }}>
						Partie principales caractéristiques de la ségination des
						lieux
					</InputLabel>
					{/* // Utilisation avec les deltas
					 <Controller
						control={control}
						style={{ paddingTop: '60px', minHeight: '300px' }}
						name='ctPrincipCarac'
						render={({ onChange, onBlur, value }) => (
							<ReactQuill
								theme='snow'
								modules={QuillModules}
								formats={QuillFormats}
								onChange={(
									description,
									delta,
									source,
									editor
								) => onChange(editor.getContents())}
								value={value || ''}
							/>
						)}
					/> */}
					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
						as={ReactQuill}
						control={control}
						name='ctPrincipCarac'
						placeholder='Corps du mail ici...'
						modules={QuillModules}
						formats={QuillFormats}
					/>
				</FormControl>
				{/* // Haut droit bas gauche */}
				<FormControl className={classes.formControl}>
					<InputLabel style={{ margin: '20px 10px 10px 15px' }}>
						Partie situation du logement
					</InputLabel>
					{/* <Controller
						control={control}
						style={{ paddingTop: '60px', minHeight: '300px' }}
						name='ctSituLog'
						render={({ onChange, onBlur, value }) => (
							<ReactQuill
								theme='snow'
								modules={QuillModules}
								formats={QuillFormats}
								onChange={(
									description,
									delta,
									source,
									editor
								) => onChange(editor.getContents())}
								value={value || ''}
							/>
						)}
					/> */}

					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
						as={ReactQuill}
						control={control}
						name='ctSituLog'
						placeholder='Corps du mail ici...'
						modules={QuillModules}
						formats={QuillFormats}
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<InputLabel style={{ margin: '20px 10px 10px 15px' }}>
						Partie descriptif du logement{' '}
					</InputLabel>
					{/* <Controller
						control={control}
						style={{ paddingTop: '60px', minHeight: '300px' }}
						name='ctDescLog'
						render={({ onChange, onBlur, value }) => (
							<ReactQuill
								theme='snow'
								modules={QuillModules}
								formats={QuillFormats}
								onChange={(
									description,
									delta,
									source,
									editor
								) => onChange(editor.getContents())}
								value={value || ''}
							/>
						)}
					/> */}
					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
						as={ReactQuill}
						control={control}
						name='ctDescLog'
						placeholder='Corps du mail ici...'
						modules={QuillModules}
						formats={QuillFormats}
					/>
				</FormControl>
				<TextField
					className={classes.textField}
					inputRef={register}
					name='nbKmDeLaMaison'
					id='standard-number'
					label='Nombre de km à partir de la maison pour la partie durée de la loc'
					InputLabelProps={{
						shrink: true,
					}}
				/>

				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.button}>
					Valider les modifications
				</Button>
			</form>
		</>
	);
};

export default withRouter(withSnackbar(FormInfosContrat));
