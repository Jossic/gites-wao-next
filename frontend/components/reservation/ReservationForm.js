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

			<div className='form-group'>
				<label htmlFor='exampleFormControlSelect1'>Quel gîte ?</label>
				<select className='form-control' id='exampleFormControlSelect1'>
					{gites.map((gite, i) => (
						<option key={i} value={gite.slug}>
							{gite.nom}
						</option>
					))}
				</select>
			</div>
			<div className='form-group'>
				<label>Nombre de personnes total</label>
				<input type='number' className='form-control' />
			</div>
			<div className='form-group'>
				<label>Dont enfants de moins de 18 ans</label>
				<input type='number' className='form-control' />
			</div>
			<div className='form-group'>
				<label>Date d'arrivée</label>
				<input type='date' className='form-control' />
			</div>
			<div className='form-group'>
				<label>Date de départ</label>
				<input type='date' className='form-control' />
			</div>
		</div>
	);
	const infoComp = () => (
		<div>
			<h2>Informations supplémentaires</h2>
			<fieldset
				style={{ border: '1px solid black' }}
				className='pl-3 pb-3'>
				<legend>
					{' '}
					<h3>
						Merci d'indiquer si vous nous avez déja contacté par :
					</h3>
				</legend>
				<div className='row'>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Mail
							</label>
						</div>
					</div>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Téléphone
							</label>
						</div>
					</div>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Abritel
							</label>
						</div>
					</div>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Leboncoin
							</label>
						</div>
					</div>
					<div className='col'>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='checkbox'
								value=''
								id='defaultCheck1'
							/>
							<label
								className='form-check-label'
								htmlFor='defaultCheck1'>
								Autre
							</label>
						</div>
					</div>
				</div>
			</fieldset>
			<fieldset
				style={{ border: '1px solid black' }}
				className='pl-3 pb-3'>
				<legend>
					{' '}
					<h3>
						S'il y a des chiens, merci d'indiquer leur nombre
						(3€/jour/animal)
					</h3>
				</legend>
				<div className='form-group'>
					<input type='number' className='form-control' />
				</div>
			</fieldset>
			<fieldset
				style={{ border: '1px solid black' }}
				className='pl-3 pb-3'>
				<legend>
					{' '}
					<h3>Souhaitez-vous l'option lit fait à l'arrivée ?</h3>
				</legend>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='exampleRadios'
						id='exampleRadios1'
						value='option1'
						checked
					/>
					<label
						className='form-check-label'
						htmlFor='exampleRadios1'>
						Oui
					</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='exampleRadios'
						id='exampleRadios2'
						value='option2'
					/>
					<label
						className='form-check-label'
						htmlFor='exampleRadios2'>
						Non
					</label>
				</div>
			</fieldset>
		</div>
	);
	const Coord = () => (
		<div>
			<h2>Vos coordonnées</h2>
			<div className='form-row mb-3'>
				<div className='col-2'>
					<select
						className='form-control'
						id='exampleFormControlSelect1'>
						<option>Mr & Mme</option>
						<option>Mr</option>
						<option>Mme</option>
						<option>Entreprise</option>
						<option>Association</option>
					</select>
				</div>

				<div className='col-5'>
					<input
						type='text'
						className='form-control'
						placeholder='Nom'
					/>
				</div>
				<div className='col-5'>
					<input
						type='text'
						className='form-control'
						placeholder='Prénom'
					/>
				</div>
			</div>
			<div className='form-row mb-3'>
				<div className='col-5'>
					<input
						type='text'
						className='form-control'
						placeholder='Adresse'
					/>
				</div>
				<div className='col-2'>
					<input
						type='text'
						className='form-control'
						placeholder='Code Postal'
					/>
				</div>
				<div className='col-3'>
					<input
						type='text'
						className='form-control'
						placeholder='Ville'
					/>
				</div>
				<div className='col'>
					<input
						type='text'
						className='form-control'
						placeholder='Pays'
					/>
				</div>
			</div>
			<div className='form-row'>
				<div className='col-5'>
					<input
						type='tel'
						pattern='[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}'
						className='form-control'
						placeholder='Téléphone'
					/>
				</div>
				<div className='col-7'>
					<input
						type='mail'
						className='form-control'
						placeholder='Email'
					/>
				</div>
			</div>
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
