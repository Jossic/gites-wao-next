import { listGitesNoms } from '../../actions/giteActions';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HouseIcon from '@material-ui/icons/House';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { useEffect, useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
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
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';

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
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const [selectedDate, setSelectedDate] = React.useState(
		new Date('2014-08-18T21:11:54')
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
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
					<Select
						labelId='demo-simple-select-placeholder-label-label'
						id='demo-simple-select-placeholder-label'
						// value={gites.slug}
						// onChange={handleChange}
						displayEmpty
						className={classes.selectEmpty}>
						{gites.map((gite, i) => (
							<MenuItem value={gite.slug}>{gite.nom}</MenuItem>
						))}
					</Select>
					{/* <FormHelperText>Réservation sur le gîte :</FormHelperText> */}
				</FormControl>
				<TextField
					id='standard-number'
					label='Nombre de personnes total'
					type='number'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
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
						margin='normal'
						id='date-picker-dialog'
						label="Date d'arrivée"
						format='dd/MM/yyyy'
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}
					/>

					<KeyboardDatePicker
						margin='normal'
						id='date-picker-dialog'
						label='Date de départ'
						format='dd/MM/yyyy'
						value={selectedDate}
						onChange={handleDateChange}
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
								control={<Checkbox />}
								label='Mail'
							/>
							<FormControlLabel
								control={<Checkbox />}
								label='Téléphone'
							/>
							<FormControlLabel
								control={<Checkbox />}
								label='Abritel'
							/>
							<FormControlLabel
								control={<Checkbox />}
								label='Leboncoin'
							/>
							<FormControlLabel
								control={<Checkbox />}
								label='Autre'
							/>
						</Grid>
					</FormGroup>
					{/* <FormHelperText>Be careful</FormHelperText> */}
				</FormControl>
				<Grid container justify='space-around'>
					<TextField
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
								// checked={state.checkedB}
								// onChange={handleChange}
								// name="checkedB"
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
					<Select
						labelId='demo-simple-select-placeholder-label-label'
						id='demo-simple-select-placeholder-label'
						// value={gites.slug}
						// onChange={handleChange}
						displayEmpty
						className={classes.selectEmpty}>
						<MenuItem value=''>M. & Mme</MenuItem>
						<MenuItem value=''>Mme</MenuItem>
						<MenuItem value=''>Mlle</MenuItem>
						<MenuItem value=''>M.</MenuItem>
						<MenuItem value=''>Association</MenuItem>
						<MenuItem value=''>Comité d'entreprise</MenuItem>
						<MenuItem value=''>Société</MenuItem>
						<MenuItem value=''>Entreprise</MenuItem>
						<MenuItem value=''>Foyer de vie</MenuItem>
						<MenuItem value=''>Foyer d'accueil</MenuItem>
						<MenuItem value=''>Famille</MenuItem>
						<MenuItem value=''>Autres</MenuItem>
					</Select>
					{/* <FormHelperText>Réservation sur le gîte :</FormHelperText> */}
				</FormControl>
				<TextField
					id='standard-number'
					label='Nom'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id='standard-number'
					label='Prénom'
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Grid>
			<Grid container justify='space-around'>
				<TextField
					id='standard-number'
					label='Adresse'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id='standard-number'
					label='Code Postal'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
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
					<Select
						labelId='demo-simple-select-placeholder-label-label'
						id='demo-simple-select-placeholder-label'
						// value={gites.slug}
						// onChange={handleChange}
						displayEmpty
						className={classes.selectEmpty}>
						<MenuItem value=''>France</MenuItem>
						<MenuItem value=''>--------</MenuItem>
						<MenuItem value=''>Autres</MenuItem>
						<MenuItem value=''>Allemagne</MenuItem>
						<MenuItem value=''>Angleterre</MenuItem>
						<MenuItem value=''>Belgique</MenuItem>
						<MenuItem value=''>Hollande</MenuItem>
						<MenuItem value=''>Luxembourg</MenuItem>
						<MenuItem value=''>Suisse</MenuItem>
					</Select>
					{/* <FormHelperText>Pays</FormHelperText> */}
				</FormControl>
			</Grid>
			<Grid container justify='space-around'>
				<TextField
					id='standard-number'
					label='Téléphone'
					type='telephone'
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
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
	const recap = () => <p>recap</p>;

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

	return (
		<Container>
			<div className={classes.root}>
				<form>
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
								<Typography className={classes.instructions}>
									All steps completed - you&apos;re finished
								</Typography>
								<Button
									onClick={handleReset}
									className={classes.button}>
									Recommencer
								</Button>
								{/* <Button
								// onClick={handleReset}
								className={classes.button}>
								Valider
							</Button> */}
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
									<Button
										variant='contained'
										color='primary'
										onClick={handleNext}
										className={classes.button}>
										{activeStep === steps.length - 1
											? 'Valider'
											: 'Suivant'}
									</Button>
								</div>
							</div>
						)}
					</div>
				</form>
			</div>
		</Container>
	);
};

// export async function getStaticPaths() {
// 	const partenairesNoms = await ListAllPartenairesNoms();
// 	return {
// 		paths: partenairesNoms.map((nom) => {
// 			return {
// 				params: { id: nom._id, slug: nom.slug },
// 			};
// 		}),
// 		fallback: false,
// 	};
// }

// export async function getStaticProps(context) {
// 	return listGitesNoms().then((gites) => {
// 		if (gites.error) {
// 			console.log(gites.error);
// 		} else {
// 			console.log('clg dans le else', gites);
// 			return {
// 				props: { gites },
// 			};
// 		}
// 	});
// }

export default ReservationForm;
