import { listGitesNoms } from '../../actions/giteActions';
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
import { useEffect, useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useForm, Controller } from 'react-hook-form';
import {
	Checkbox,
	Container,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
	InputLabel,
	MenuItem,
	Select,
	Switch,
	TextField,
	Input,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { createReservation } from '../../actions/reservationActions';

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
}));

function getSteps() {
	return [
		'Information sur la location',
		'Informations complémentaires',
		'Vos coordonnées',
		'Récapitulatif',
	];
}

const ReservationForm = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const { control, register, handleSubmit, setValue } = useForm({
		shouldUnregister: false,
		defaultValues: {
			gite: 'manola',
			nbPers: 10,
			nbEnf: 5,
			nbChien: 1,
			litFait: true,
			nom: 'Lapierre',
			prenom: 'Jossic',
			adresse: '18 rue test',
			cp: '51000',
			ville: 'maVille',
			tel: '06 15 55 55 55',
			mail: 'jossic.lapierre@gmail.com',
		},
	});

	const [values, setValues] = useState({
		loading: false,
		success: '',
		error: '',
		message: '',
	});
	const { message, success, loading, error } = values;

	// const handleChange = (name) => (e) => {
	// 	console.log('handleChange name vaut =>', name);
	// 	if (name === 'civilite') {
	// 		setValue('civilite', e.target.value);
	// 	} else if (name === 'gite') {
	// 		setValue('gite', e.target.value);
	// 	} else if (name === 'pays') {
	// 		setValue('pays', e.target.value);
	// 	}
	// };

	// React.useEffect(() => {
	// 	register({ name: 'civilite' }); // custom register Antd input
	// 	register({ name: 'gite' }); // custom register Antd input
	// 	register({ name: 'pays' }); // custom register Antd input
	// }, [register]);

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
					{/* <Select
						defaultValue='manola'
						labelId='demo-simple-select-placeholder-label-label'
						id='demo-simple-select-placeholder-label'
						name='gite'
						onChange={handleChange('gite')}
						displayEmpty
						className={classes.selectEmpty}>
						{gites.map((gite, i) => (
							<MenuItem value={gite.slug}>{gite.nom}</MenuItem>
						))}
					</Select> */}
					{/* <FormHelperText>Réservation sur le gîte :</FormHelperText> */}
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
										name='checkMail'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Mail'
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='checkTel'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Téléphone'
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='checkAbritel'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Abritel'
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='checkLeboncoin'
										inputRef={register}
										defaultValue={false}
									/>
								}
								label='Leboncoin'
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='checkAutre'
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
								checked={true}
								name='litFait'
								color='primary'
							/>
						}
						label="Souhaitez-vous l'option lit fait à l'arrivée ?"
					/>
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

					{/* <InputLabel
						shrink
						id='demo-simple-select-placeholder-label-label'>
						Civilité
					</InputLabel>
					<Select
						defaultValue='m'
						// labelId='demo-simple-select-placeholder-label-label'
						// id='demo-simple-select-placeholder-label'
						name='civilite'
						onChange={handleChange('civilite')}
						displayEmpty
						className={classes.selectEmpty}>
						<MenuItem value='mmme'>M. & Mme</MenuItem>
						<MenuItem value='mme'>Mme</MenuItem>
						<MenuItem value='mlle'>Mlle</MenuItem>
						<MenuItem value='m'>M.</MenuItem>
						<MenuItem value='asso'>Association</MenuItem>
						<MenuItem value='ce'>Comité d'entreprise</MenuItem>
						<MenuItem value='soc'>Société</MenuItem>
						<MenuItem value='entr'>Entreprise</MenuItem>
						<MenuItem value='foyervie'>Foyer de vie</MenuItem>
						<MenuItem value='foyeracc'>Foyer d'accueil</MenuItem>
						<MenuItem value='famil'>Famille</MenuItem>
						<MenuItem value='autre'>Autres</MenuItem>
					</Select> */}
					{/* <FormHelperText>Réservation sur le gîte :</FormHelperText> */}
				</FormControl>

				{/* <Controller
						name='civilite'
						control={control}
						options={[
							{ value: 'mmme', label: 'M. & Mme' },
							{ value: 'mme', label: 'Mme' },
							{ value: 'mlle', label: 'Mlle' },
							{ value: 'm', label: 'M.' },
							{ value: 'asso', label: 'Association' },
							{ value: 'ce', label: "Comité d'entreprise" },
							{ value: 'soc', label: 'Société' },
							{ value: 'entr', label: 'Entreprise' },
							{ value: 'foyervie', label: 'Foyer de vie' },
							{ value: 'foyeracc', label: "Foyer d'accueil" },
							{ value: 'famil', label: 'Famille' },
							{ value: 'autre', label: 'Autres' },
						]}
						as={Select}
						className={classes.formControl}
					/> */}
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

					{/* <InputLabel
						shrink
						id='demo-simple-select-placeholder-label-label'>
						Pays
					</InputLabel>
					<Select
						defaultValue='france'
						// labelId='demo-simple-select-placeholder-label-label'
						// id='demo-simple-select-placeholder-label'
						name='pays'
						onChange={handleChange('pays')}
						displayEmpty
						className={classes.selectEmpty}>
						<MenuItem value='france'>France</MenuItem>
						<MenuItem value=''>--------</MenuItem>
						<MenuItem value='autres'>Autres</MenuItem>
						<MenuItem value='allemagne'>Allemagne</MenuItem>
						<MenuItem value='angleterre'>Angleterre</MenuItem>
						<MenuItem value='belgique'>Belgique</MenuItem>
						<MenuItem value='hollande'>Hollande</MenuItem>
						<MenuItem value='luxembourg'>Luxembourg</MenuItem>
						<MenuItem value='suisse'>Suisse</MenuItem>
					</Select> */}
					{/* <FormHelperText>Pays</FormHelperText> */}
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

	const onSubmit = (data) => {
		setValues({ ...values, loading: true });
		console.log('onSubmit data =>', data);
		createReservation(data).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				console.log('une grosse erreur');
				setValues({ ...values, error: result.error });
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
				</form>
			</div>
		</Container>
	);
};

export default ReservationForm;
