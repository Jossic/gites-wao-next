import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HouseIcon from '@material-ui/icons/House';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { useEffect, useState, useCallback, useRef } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useForm, Controller, appendErrors } from 'react-hook-form';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { startOfWeek } from 'date-fns';
import fr from 'date-fns/locale/fr';
import dayjs from 'dayjs';
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
import { createReservation } from '../../actions/reservationActions';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_SECRET_KEY } from '../../config';
import { withSnackbar } from '../HOC/Snackbar';

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
		1: <HouseIcon />,
		2: <SettingsIcon />,
		3: <EmojiPeopleIcon />,
		4: <CheckCircleIcon />,
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
	// calendrier: {
	// 	backgroundColor: 'gray',
	// },
}));

function getSteps() {
	return [
		'Information sur la location',
		'Informations complémentaires',
		'Vos coordonnées',
		'Récapitulatif',
	];
}

const useMediaQuery = (width) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(max-width: ${width}px)`);
		media.addListener(updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeListener(updateTarget);
	}, []);

	return targetReached;
};

const ReservationForm = ({ snackbarShowMessage, gites }) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const {
		control,
		register,
		handleSubmit,
		setValue,
		getValues,
		errors,
	} = useForm({
		mode: 'onTouched',
		reValidateMode: 'onChange',
		shouldUnregister: false,
		defaultValues: {
			// nbPers: 10,
			// nbEnf: 5,
			nbChien: 1,
			litFait: true,
			newsletter: true,
			nom: 'Lapierre',
			prenom: 'Jossic',
			adresse: '18 rue test',
			cp: '51000',
			ville: 'maVille',
			tel: '06 15 55 55 55',
			mail: 'jossic.lapierre@gmail.com',
		},
	});

	const isBreakpoint = useMediaQuery(768);

	const dateOptions = { locale: fr };
	startOfWeek(new Date(), dateOptions);

	// const [locale, setLocale] = React.useState('fr');

	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	const handleChange = (item) => {
		setState([item.selection]);

		setValue(
			'dateArrivee',
			dayjs(item.selection.startDate).format('MM/DD/YYYY')
		);
		setValue(
			'dateDepart',
			dayjs(item.selection.endDate).format('MM/DD/YYYY')
		);
	};

	React.useEffect(() => {
		register('dateArrivee'); // custom register
		register('dateDepart'); // custom register
	}, [register]);

	const [loading, setLoading] = useState(false);

	const reRef = useRef();

	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

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
					inputRef={register({
						required: 'Le nombre de personnes est obligatoire',
					})}
					name='nbPers'
					id='nbPers'
					label='Nombre de personnes total'
					type='number'
					helperText={errors.nbPers && errors.nbPers.message}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				{/* {errors.nbPers && (
					<span style={{ color: 'red', fontSize: '10px' }}>
						{errors.nbPers.message}
					</span>
				)} */}
				<TextField
					inputRef={register({
						required: "Le nombre d'enfants est obligatoire",
					})}
					name='nbEnf'
					id='nbEnf'
					label='Dont enfants de moins de 18 ans'
					type='number'
					helperText={
						errors.nbEnf && (
							<span style={{ color: 'red' }}>
								{errors.nbEnf.message}
							</span>
						)
					}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>

			{isBreakpoint ? (
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'
					style={{ paddingTop: '20px' }}>
					<DateRange
						className={classes.calendrier}
						onChange={(item) => handleChange(item)}
						// onChange={(item) => setState([item.selection])}
						showSelectionPreview={true}
						name='dateDF'
						moveRangeOnFirstSelection={false}
						months={1}
						locale={fr}
						ranges={state}
						direction='horizontal'
					/>
				</Grid>
			) : (
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'
					style={{ paddingTop: '20px' }}>
					<DateRange
						className={classes.calendrier}
						onChange={(item) => handleChange(item)}
						// onChange={(item) => setState([item.selection])}
						showSelectionPreview={true}
						name='dateDF'
						moveRangeOnFirstSelection={false}
						months={2}
						locale={fr}
						ranges={state}
						direction='horizontal'
					/>
				</Grid>
			)}
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
						id='chien'
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
					<FormControlLabel
						control={
							<Switch
								inputRef={register}
								defaultChecked
								name='newsletter'
								color='primary'
							/>
						}
						label='Souscrire à notre newsletter pour bénéficier de remises et offres promotionnelles ?'
					/>
				</Grid>
				<Grid container>
					<FormControl className={classes.formControl}>
						<TextField
							inputRef={register}
							name='infoCompl'
							id='infoCompl'
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
								<MenuItem value='M. & Mme'>M. & Mme</MenuItem>
								<MenuItem value='Mme'>Mme</MenuItem>
								<MenuItem value='Mlle'>Mlle</MenuItem>
								<MenuItem value='M.'>M.</MenuItem>
								<MenuItem value='Association'>
									Association
								</MenuItem>
								<MenuItem value="Comité d'entreprise">
									Comité d'entreprise
								</MenuItem>
								<MenuItem value='Société'>Société</MenuItem>
								<MenuItem value='Entreprise'>
									Entreprise
								</MenuItem>
								<MenuItem value='Foyer de vie'>
									Foyer de vie
								</MenuItem>
								<MenuItem value="Foyer d'accueil">
									Foyer d'accueil
								</MenuItem>
								<MenuItem value='Famille'>Famille</MenuItem>
								<MenuItem value='Autres'>Autres</MenuItem>
							</Select>
						}
					/>
				</FormControl>

				<TextField
					inputRef={register({ required: 'Le nom est obligatoire' })}
					name='nom'
					id='nom'
					label='Nom'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register({
						required: 'Le prénom est obligatoire',
					})}
					name='prenom'
					id='prenom'
					label='Prénom'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
			<Grid container justify='space-around'>
				<TextField
					inputRef={register({
						required: "L'adresse est obligatoire",
					})}
					name='adresse'
					id='adresse'
					label='Adresse'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register({
						required: 'Le code postal est obligatoire',
					})}
					name='cp'
					id='cp'
					label='Code Postal'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register({
						required: 'La ville est obligatoire',
					})}
					name='ville'
					id='ville'
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
					id='tel'
					label='Téléphone'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					inputRef={register({ required: 'Le mail est obligatoire' })}
					name='mail'
					id='mail'
					label='Email'
					type='mail'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
		</div>
	);
	const recap = () => (
		<p>
			{/* {JSON.stringify(getValues())} */}
			<h3>Récapitulatif de la location</h3>
			<Grid
				container
				direction='row'
				justify='space-evenly'
				alignItems='flex-start'>
				<Grid item>
					<p>Location :</p>
					<ul>
						<li>Le gite : {getValues().gite}</li>
						<li>
							Du{' '}
							{dayjs(getValues().dateArrivee).format(
								'DD/MM/YYYY'
							)}{' '}
							au{' '}
							{dayjs(getValues().dateDepart).format('DD/MM/YYYY')}
						</li>
						<li>
							Pour {getValues().nbPers} personnes dont{' '}
							{getValues().nbEnf} enfant(s) ainsi que{' '}
							{getValues().nbChien} animaux
						</li>
						<li>
							Options :{' '}
							{getValues().litFait && 'Lits fait : Oui,'}{' '}
							{getValues().newsletter && 'Newsletter : Oui'}
						</li>
					</ul>
				</Grid>
				<Grid item>
					<p>Vos informations :</p>
					<ul>
						<li>
							{getValues().civilite} {getValues().nom}{' '}
							{getValues().prenom}
						</li>
						<li>
							{getValues().adresse} <br />
							{getValues().cp} {getValues().ville},{' '}
							{getValues().pays}
						</li>
						<li>
							Téléphone : {getValues().tel} <br />
							Mail : {getValues().mail}
						</li>
					</ul>
				</Grid>
			</Grid>
			<Grid
				container
				direction='column'
				justify='flex-start'
				alignItems='center'>
				{console.log(getValues().infoCompl)}
				{getValues().infoCompl !== '' && (
					<>
						<Grid>
							<p>Votre message :</p>{' '}
						</Grid>
						<Grid>
							<p>{getValues().infoCompl}</p>
						</Grid>
					</>
				)}
			</Grid>
		</p>
	);

	function getStepContent(step) {
		switch (step) {
			case 0:
				return infoLoc();
			case 1:
				return infoComp();
			case 2:
				return Coord();
			case 3:
				return recap();
			default:
				return 'Erreur';
		}
	}

	const onSubmit = async (data) => {
		setLoading(true);
		data.token = await reRef.current.executeAsync();
		reRef.current.reset();
		console.log('onSubmit data =>', data);
		createReservation(data).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				console.log(result.error);
				snackbarShowMessage(`${result.error}`);
				setLoading(false);
			} else if (result.dejaReserveMessage) {
				snackbarShowMessage(`${result.dejaReserveMessage}`);
				setLoading(false);
			} else {
				setLoading(false);
				snackbarShowMessage(`${result.message}`, 'success');

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
						{activeStep + 1 === steps.length ? (
							<>
								{/* Voir pout ajouter isSubmited === true */}
								<Typography className={classes.instructions}>
									{recap()}
								</Typography>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.button}>
									Retour
								</Button>
								<Button
									type='submit'
									variant='contained'
									color='primary'
									className={classes.button}>
									Valider
								</Button>
							</>
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
									<Button
										variant='contained'
										color='primary'
										onClick={handleNext}
										className={classes.button}>
										Suivant
									</Button>
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

export default withSnackbar(ReservationForm);
