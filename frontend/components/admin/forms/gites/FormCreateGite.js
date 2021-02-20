import { listGitesNoms } from '../../../../actions/giteActions';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { withSnackbar } from '../../../HOC/Snackbar';
import {
	Checkbox,
	Container,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	InputLabel,
	MenuItem,
	Select,
	Switch,
	TextField,
	CircularProgress,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const QontoConnector = withStyles({
	alternativeLabel: {
		top: 10,
		left: 'calc(-50% + 16px)',
		right: 'calc(50% + 16px)',
	},
	active: {
		'& $line': {
			borderColor: '#784af4',
		},
	},
	completed: {
		'& $line': {
			borderColor: '#784af4',
		},
	},
	line: {
		borderColor: '#eaeaf0',
		borderTopWidth: 3,
		borderRadius: 1,
	},
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
	root: {
		color: '#eaeaf0',
		display: 'flex',
		height: 22,
		alignItems: 'center',
	},
	active: {
		color: '#784af4',
	},
	circle: {
		width: 8,
		height: 8,
		borderRadius: '50%',
		backgroundColor: 'currentColor',
	},
	completed: {
		color: '#784af4',
		zIndex: 1,
		fontSize: 18,
	},
});

function QontoStepIcon(props) {
	const classes = useQontoStepIconStyles();
	const { active, completed } = props;

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
			})}>
			{completed ? (
				<Check className={classes.completed} />
			) : (
				<div className={classes.circle} />
			)}
		</div>
	);
}

QontoStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		'& $line': {
			backgroundImage:
				'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	completed: {
		'& $line': {
			backgroundImage:
				'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundImage:
			'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	},
	completed: {
		backgroundImage:
			'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;

	const icons = {
		1: <StarsIcon />,
		2: <PictureInPictureAltIcon />,
		3: <MonetizationOnIcon />,
		4: <PageviewIcon />,
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}>
			{icons[String(props.icon)]}
		</div>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

function getSteps() {
	return [
		'Infos générales',
		'Infos diverses',
		'Infos pratiques & financières',
		'Infos pages & SEO',
	];
}

const FormCreateGite = ({ snackbarShowMessage, router, gite }) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const { control, register, handleSubmit } = useForm({
		shouldUnregister: false,
		defaultValues: {
			nom: 'test',
			mtitle: '',
			presGiteSEO: '',
			texteExterieur: `Texte de l'exterieur`,
			equipementExterieur: 'truc1,truc2,truc3,truc4,truc5',
			texteInterieur: `Texte de l'intérieur`,
			equipementInterieur: 'truc1,truc2,truc3,truc4,truc5',
			textePiscine: `Texte de la piscine`,
			equipementPiscine: 'truc1,truc2,truc3,truc4,truc5',
			texte: '',
			detailGite: '',
			capacite: '20',
			videoLink: '',
			calendrierLink: '',
			couleur1: '#AAAAAA',
			couleur2: '#111111',
		},
	});

	const [values, setValues] = useState({
		open: false,
		loading: false,
		success: '',
		error: '',
		message: '',
	});
	const { message, success, loading, error } = values;

	const reRef = useRef();

	const steps = getSteps();

	const [selectedDateArrivee, setSelectedDateArrivee] = useState();

	const handleDateChangeArrivee = (date) => {
		setSelectedDateArrivee(date);
	};
	const [selectedDateDepart, setSelectedDateDepart] = useState();

	const handleDateChangeDepart = (date) => {
		setSelectedDateDepart(date);
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			setValues({ ...values, open: false });
			return;
		}
	};

	const [gites, setGites] = useState([]);

	const listDesGites = () => {
		listGitesNoms().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setGites(...gites, data);
			}
		});
	};

	useEffect(() => {
		listDesGites();
	}, []);

	const infoLoc = () => (
		<div className=''>
			<h2>Informations sur la location</h2>

			<Grid container justify='space-around'>
				<FormControl className={classes.formControl}>
					<InputLabel
						shrink
						id='demo-simple-select-placeholder-label-label'>
						Réservation sur le gîte :
					</InputLabel>
					<Controller
						control={control}
						name='gite'
						as={
							<Select id='gite-select'>
								{gites.map((gite, i) => (
									<MenuItem key={gite.slug} value={gite.slug}>
										{gite.nom}
									</MenuItem>
								))}
							</Select>
						}
					/>
				</FormControl>
				<TextField
					inputRef={register}
					name='nbPers'
					id='standard-number'
					label='Nombre de personnes total'
					type='number'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register}
					name='nbEnf'
					id='standard-number'
					label='Dont enfants de moins de 18 ans'
					type='number'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container justify='space-around'>
					<KeyboardDatePicker
						inputRef={register}
						margin='normal'
						id='date-picker-dialog'
						name='dateArrivee'
						label="Date d'arrivée"
						format='MM/dd/yyyy'
						defaultValue=''
						value={selectedDateArrivee}
						onChange={handleDateChangeArrivee}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>

					<KeyboardDatePicker
						inputRef={register}
						margin='normal'
						id='date-picker-dialog'
						name='dateDepart'
						label='Date de départ'
						format='MM/dd/yyyy'
						defaultValue=''
						value={selectedDateDepart}
						onChange={handleDateChangeDepart}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>
				</Grid>
			</MuiPickersUtilsProvider>
		</div>
	);
	const infoComp = () => (
		<div>
			<h2>Informations supplémentaires</h2>
			<div className={classes.root}>
				<FormControl
					component='fieldset'
					className={classes.formControl}>
					<FormLabel component='legend'>
						Merci d'indiquer si vous nous avez déja contacté par :
					</FormLabel>
					<FormGroup>
						<Grid container justify='space-around'>
							<FormControlLabel
								control={
									<Checkbox
										name='contactMail'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Mail'
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='contactTel'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Téléphone'
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='contactAbritel'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Abritel'
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='contactLeboncoin'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Leboncoin'
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='contactAutre'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Autre'
							/>
						</Grid>
					</FormGroup>
					{/* <FormHelperText>Be careful</FormHelperText> */}
				</FormControl>
				<Grid container justify='space-around'>
					<TextField
						inputRef={register}
						name='nbChien'
						id='standard-number'
						label='Nombre de chien ? (3€/jour/animal)'
						type='number'
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<FormControlLabel
						control={
							<Switch
								inputRef={register}
								defaultChecked
								name='litFait'
								color='primary'
							/>
						}
						label="Souhaitez-vous l'option lit fait à l'arrivée ?"
					/>
				</Grid>
				<Grid container>
					<FormControl className={classes.formControl}>
						<TextField
							inputRef={register}
							name='infoCompl'
							id='standard-number'
							label='Informations complémentaires / Questions :'
							multiline
							rows={3}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</FormControl>
				</Grid>
			</div>
		</div>
	);
	const Coord = () => (
		<div>
			<h2>Vos coordonnées</h2>

			<Grid container justify='space-around'>
				<FormControl className={classes.formControl}>
					<InputLabel
						shrink
						id='demo-simple-select-placeholder-label-label'>
						Civilité
					</InputLabel>
					<Controller
						control={control}
						name='civilite'
						as={
							<Select id='civilite-select'>
								<MenuItem value='mmme'>M. & Mme</MenuItem>
								<MenuItem value='mme'>Mme</MenuItem>
								<MenuItem value='mlle'>Mlle</MenuItem>
								<MenuItem value='m'>M.</MenuItem>
								<MenuItem value='asso'>Association</MenuItem>
								<MenuItem value='ce'>
									Comité d'entreprise
								</MenuItem>
								<MenuItem value='soc'>Société</MenuItem>
								<MenuItem value='entr'>Entreprise</MenuItem>
								<MenuItem value='foyervie'>
									Foyer de vie
								</MenuItem>
								<MenuItem value='foyeracc'>
									Foyer d'accueil
								</MenuItem>
								<MenuItem value='famil'>Famille</MenuItem>
								<MenuItem value='autre'>Autres</MenuItem>
							</Select>
						}
					/>
				</FormControl>

				<TextField
					inputRef={register}
					name='nom'
					id='standard-number'
					label='Nom'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register}
					name='prenom'
					id='standard-number'
					label='Prénom'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
			<Grid container justify='space-around'>
				<TextField
					inputRef={register}
					name='adresse'
					id='standard-number'
					label='Adresse'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register}
					name='cp'
					id='standard-number'
					label='Code Postal'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register}
					name='ville'
					id='standard-number'
					label='Ville'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<FormControl className={classes.formControl}>
					<InputLabel
						shrink
						id='demo-simple-select-placeholder-label-label'>
						Pays
					</InputLabel>

					<Controller
						control={control}
						name='pays'
						as={
							<Select id='pays-select'>
								<MenuItem value='france'>France</MenuItem>
								<MenuItem value=''>--------</MenuItem>
								<MenuItem value='autres'>Autres</MenuItem>
								<MenuItem value='allemagne'>Allemagne</MenuItem>
								<MenuItem value='angleterre'>
									Angleterre
								</MenuItem>
								<MenuItem value='belgique'>Belgique</MenuItem>
								<MenuItem value='hollande'>Hollande</MenuItem>
								<MenuItem value='luxembourg'>
									Luxembourg
								</MenuItem>
								<MenuItem value='suisse'>Suisse</MenuItem>
							</Select>
						}
					/>
				</FormControl>
			</Grid>
			<Grid container justify='space-around'>
				<TextField
					inputRef={register}
					name='tel'
					id='standard-number'
					label='Téléphone'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register}
					name='mail'
					id='standard-number'
					label='Email'
					type='mail'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
		</div>
	);
	const recap = () => <p>JSON.stringify()</p>;

	function getStepContent(step) {
		switch (step) {
			case 0:
				return <FormInfosGene />;
			case 1:
				return <FormInfosDiverses />;
			case 2:
				return <FormInfosPratiques />;
			case 3:
				return <FormInfosPages />;
			default:
				return 'Erreur';
		}
	}

	const onSubmit = async (data) => {
		setValues({ ...values, loading: true });
		data.token = await reRef.current.executeAsync();
		reRef.current.reset();
		console.log('onSubmit data =>', data);
		createReservation(data).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				console.log('erreur', result.error);
				setValues({ ...values, error: result.error });
			} else if (result.dejaReserveMessage) {
				console.log('deja reserve');
				setValues({ ...values, error: result.dejaReserveMessage });
			} else {
				setValues({
					...values,
					success: true,
					loading: false,
					message: result.message,
				});
				// setTimeout(() => {
				// 	Router.push('/');
				// }, 3000);
			}
		});
	};

	return (
		<Container>
			{loading && <CircularProgress />}

			<div className={classes.root}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stepper
						alternativeLabel
						activeStep={activeStep}
						connector={<ColorlibConnector />}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel StepIconComponent={ColorlibStepIcon}>
									{label}
								</StepLabel>
							</Step>
						))}
					</Stepper>
					<div>
						{activeStep === steps.length ? (
							<div>
								{/* Voir pout ajouter isSubmited === true */}
								<Typography className={classes.instructions}>
									Votre demande a bien été prise en compte
								</Typography>
								<Button
									onClick={handleReset}
									className={classes.button}>
									Recommencer
								</Button>
							</div>
						) : (
							<div>
								<Typography className={classes.instructions}>
									{getStepContent(activeStep)}
								</Typography>
								<div>
									<Button
										disabled={activeStep === 0}
										onClick={handleBack}
										className={classes.button}>
										Retour
									</Button>
									{activeStep === steps.length - 1 ? (
										<Button
											type='submit'
											variant='contained'
											color='primary'
											className={classes.button}>
											Valider
										</Button>
									) : (
										<Button
											variant='contained'
											color='primary'
											onClick={handleNext}
											className={classes.button}>
											Suivant
										</Button>
									)}
								</div>
							</div>
						)}
					</div>
					<ReCAPTCHA
						sitekey={RECAPTCHA_SECRET_KEY}
						ref={reRef}
						size='invisible'
						// onChange={onChange}
					/>
				</form>
			</div>
		</Container>
	);
};

export default withRouter(withSnackbar(FormCreateGite));
