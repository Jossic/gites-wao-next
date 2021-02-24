import { Button, CircularProgress, FormControl } from '@material-ui/core';
import { withRouter } from 'next/router';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { updateReservation } from '../../../../actions/reservationActions';
import { getCookie } from '../../../../actions/authActions';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../../Editor'), { ssr: false });

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
	},
	textField: {
		margin: theme.spacing(1),
	},
}));

const FormInfosContrat = ({ preloadedValues }) => {
	const editorRef = useRef();
	const [isEditorLoaded, setIsEditorLoaded] = useState(false);
	const { CKEditor, ClassicEditor } = editorRef.current || {};

	useEffect(() => {
		editorRef.current = {
			CKEditor: require('@ckeditor/ckeditor5-react'),
			ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
		};
		setIsEditorLoaded(true);
	}, []);

	console.log(preloadedValues);
	const token = getCookie('token');
	const classes = useStyles();
	const { control, register, handleSubmit } = useForm({
		defaultValues: preloadedValues,
	});

	const [values, setValues] = useState({
		heureArrivee: 'à partir de 17h',
		heureDepart: 'à partir de 17h',
		loading: false,
		success: '',
		error: '',
		message: '',
	});
	const { success, loading, error, message } = values;

	const onSubmit = async (data) => {
		console.log(data);
		setValues({ ...values, loading: true });
		updateReservation(data, router.query.id, token).then((result) => {
			if (result.error) {
				setValues({ ...values, error: result.error });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
					message: result.message,
				});
				// setTimeout(() => {
				// 	Router.push('/admin/gestionDivers/partenaires');
				// }, 3000);
			}
		});
	};

	return (
		<>
			{loading && <CircularProgress />}

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl className={classes.formControl}>
					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
						as={Editor}
						control={control}
						name='ctDesignationTitre'
						placeholder='Corps du mail ici...'
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
						as={Editor}
						control={control}
						name='ctPrincipCarac'
						placeholder='Corps du mail ici...'
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
						as={Editor}
						control={control}
						name='ctSituLog'
						placeholder='Corps du mail ici...'
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
						as={Editor}
						control={control}
						name='ctDescLog'
						placeholder='Corps du mail ici...'
					/>
				</FormControl>
				<FormControl className={classes.formControl}>
					<Controller
						style={{ paddingTop: '60px', minHeight: '300px' }}
						as={Editor}
						control={control}
						name='ctDureeLoc'
						placeholder='Corps du mail ici...'
					/>
				</FormControl>
				{/* <Editor value='' onChange={(v) => console.log(v)} /> */}

				{/* <CKEditor
					editor={ClassicEditor}
					data='<p>Hello from CKEditor 5!</p>'
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event, editor) => {
						console.log('Focus.', editor);
					}}
				/>
				<CKEditor
					editor={ClassicEditor}
					data='<p>Hello from CKEditor 5!</p>'
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event, editor) => {
						console.log('Focus.', editor);
					}}
				/>
				<CKEditor
					editor={ClassicEditor}
					data='<p>Hello from CKEditor 5!</p>'
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event, editor) => {
						console.log('Focus.', editor);
					}}
				/>
				<CKEditor
					editor={ClassicEditor}
					data='<p>Hello from CKEditor 5!</p>'
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event, editor) => {
						console.log('Focus.', editor);
					}}
				/>
				<CKEditor
					editor={ClassicEditor}
					data='<p>Hello from CKEditor 5!</p>'
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						console.log({ event, editor, data });
					}}
					onBlur={(event, editor) => {
						console.log('Blur.', editor);
					}}
					onFocus={(event, editor) => {
						console.log('Focus.', editor);
					}}
				/> */}
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

export default withRouter(FormInfosContrat);
