import { createGite, listGitesNoms } from '../../../../actions/giteActions';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import { withRouter } from 'next/router';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { withSnackbar } from '../../../HOC/Snackbar';
import FormInfosGene from '../../../../components/admin/forms/gites/FormInfosGene';
import FormInfosDiverses from '../../../../components/admin/forms/gites/FormInfosDiverses';
import FormInfosPratiques from '../../../../components/admin/forms/gites/FormInfosPratiques';
import FormInfosPages from '../../../../components/admin/forms/gites/FormInfosPages';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';
import StarsIcon from '@material-ui/icons/Stars';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PageviewIcon from '@material-ui/icons/Pageview';
import { Container, CircularProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { getCookie } from '../../../../actions/authActions';

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
	textField: {
		margin: theme.spacing(1),
		width: '80%',
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
	const token = getCookie('token');
	const [activeStep, setActiveStep] = useState(0);
	const { control, register, handleSubmit } = useForm({
		shouldUnregister: false,
		defaultValues: {
			nom: 'test',
			adresse: 'test',
			cp: '08240',
			ville: 'fossé',
			capaciteMax: '20',
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

			videoLink: '',
			calendrierLink: '',
			couleur1: '#AAAAAA',
			couleur2: '#111111',
		},
	});

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

	function getStepContent(step) {
		switch (step) {
			case 0:
				return <FormInfosGene classes={classes} register={register} />;
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
		console.log('submit');
		console.log('data vaut:', data);
		// setLoading(true);
		// data.token = await reRef.current.executeAsync();
		// reRef.current.reset();
		// console.log('onSubmit data =>', data);
		// createGite(data, token).then((result) => {
		// 	console.log('result vaut =>', result);
		// 	if (result.error) {
		// 		setLoading(false);
		// 		snackbarShowMessage(`${result.error}`);
		// 	} else if (result.dejaReserveMessage) {
		// 		setLoading(false);
		// 		snackbarShowMessage(`${result.dejaReserveMessage}`);
		// 	} else {
		// 		setLoading(false);
		// 		snackbarShowMessage(`${result.message}`, 'success');
		// 		// setTimeout(() => {
		// 		// 	Router.push(`/admin/gites`, null, {
		// 		// 		shallow: true,
		// 		// 	});
		// 		// }, 3000);
		// 	}
		// });
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
						{console.log('step :', activeStep)}
						{console.log('lenght :', steps.length)}
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
									{/* A revoir */}
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

export default withRouter(withSnackbar(FormCreateGite));
