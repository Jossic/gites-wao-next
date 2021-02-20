import { createGite } from '../../../../actions/giteActions';
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
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
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
import Router from 'next/router';

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
		minWidth: '100%',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	textField: {
		margin: theme.spacing(1),
		width: '100%',
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
			nom: 'Petit Nay',
			adresse: '81 route de Stenay',
			cp: '08240',
			ville: 'Nouart',
			capaciteMax: '58',
			mtitle:
				'Les Gîtes WAO | Le gîte du Petit Nay avec piscine chauffée et couverte',
			presGiteSEO:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae necessitatibus reprehenderit aliquid maiores ipsam quibusdam, eos omnis maxime, porro ratione cupiditate tempore minima quas ullam iure vero dolorem? Ipsum sit eos dolor tempore nemo, ex quisquam beatae ut, voluptatibus, enim similique dolore? Quia deserunt soluta aspernatur doloribus est. Quia tempora adipisci quos provident ratione voluptatibus corporis animi earum accusamus dolore molestias ipsa, nam repudiandae similique corrupti exercitationem non nemo, nesciunt dolorem perferendis. Voluptate in architecto illum, ipsum modi quod, eaque eligendi qui dolor porro ducimus dicta iste quaerat, exercitationem numquam. Temporibus ratione, accusantium at expedita delectus vel qui praesentium minus cupiditate. Culpa necessitatibus consequatur sapiente quia quisquam error neque nam doloremque perferendis hic veritatis, iusto doloribus cum tempore quidem ab molestiae, beatae eum, blanditiis delectus quod nobis fugit? Id, perferendis velit qui earum repellendus ipsum eos pariatur quae voluptate, et eligendi nemo iusto labore molestiae corrupti cumque aspernatur officiis. Incidunt!',
			detailGite: `Le gîte est situé 81 route de Stenay  à 600 m de la commune de  Nouart (08240). Pour l’instant il n’y a pas  encore de piscine, mais un SPA, billard, baby foot, etc.

                Tout le nécessaire est prévu pour recevoir une cinquantaine de personnes et une grande chambre froide permet de stocker l’alimentation.
                
                Il y a 10 chambres et 2 dortoirs. 
                
                Une piscine est prévue sur ce site, la construction va débuter en avril 2021 pour se terminer pour les fêtes de fin d’année 2021. Les locations après cette date subiront une augmentation variant entre 500 et 600 € par rapport au tarif calculé actuellement.
                                `,
			texteExterieur: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.`,
			equipementExterieur: 'truc1,truc2,truc3,truc4,truc5',
			texteInterieur: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.`,
			equipementInterieur: 'truc1,truc2,truc3,truc4,truc5',
			textePiscine: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe corporis nisi numquam ratione modi architecto. Cum error perferendis hic iure, provident labore. Ipsum sint at sequi aliquid assumenda velit hic totam id aperiam excepturi, laudantium animi facere, commodi earum ullam, atque eum saepe reiciendis quos quae fuga tempora. Quis animi minus molestiae unde dolorem esse similique dolorum inventore nostrum quasi laudantium ex quam aliquam accusamus cumque quos dolor consectetur, delectus rerum? Velit quisquam labore quae quaerat maiores quidem repellendus similique dolor, amet nihil at, autem numquam porro corporis quia in hic perspiciatis aliquam. Praesentium cupiditate dignissimos nam debitis ex error illo id incidunt eveniet, iste minus esse sapiente perspiciatis ea eaque aliquam perferendis deserunt. Et, maiores sapiente, dicta pariatur ex laborum quidem, debitis non modi architecto dolorum magni sit nostrum iusto eaque optio accusamus assumenda repudiandae vitae fugit nam quas itaque ea accusantium. Vero fugiat fugit corporis ut modi. Doloremque, necessitatibus quia! Quasi temporibus reprehenderit a animi eius, officiis porro ea! Odit non, asperiores numquam quae maiores sed velit aliquid tempora magni nemo ipsam tenetur tempore distinctio, incidunt saepe molestiae quod architecto nostrum accusantium, perferendis repellendus similique eveniet voluptatem corrupti. A illo ipsum corrupti perspiciatis recusandae tempore saepe repudiandae. Cumque, velit quis repellat ratione, vel explicabo commodi tenetur eveniet impedit ea nesciunt dolore in ipsam et placeat officiis consequatur. Quae neque impedit recusandae, officiis vero minus fugit alias perferendis! Quaerat iusto quidem deleniti, officia sunt fugit, sint odio error, sequi fuga saepe debitis explicabo accusantium doloremque iste iure deserunt.`,
			equipementPiscine: 'truc1,truc2,truc3,truc4,truc5',
			texte: `Ce gîte a 10 chambres dont 5 avec salle de bain privée + 2 dortoirs de 10 places chacun. Une grande salle permet d’accueillir des réceptions.

            Une piscine est prévue dans ce gîte, la construction débutera en avril 2021, elle sera opérationnelle pour les fêtes de fin d’année 2021
            
            `,
			videoLink:
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/Er01K6nIf54" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
			calendrierLink:
				'<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showTz=0&height=600&wkst=2&bgcolor=%23FFFFFF&src=3bvm4aajj1b4ufu9eo1blm2pb4%40group.calendar.google.com&color=%23B1365F&src=fr.french%23holiday%40group.v.calendar.google.com&color=%232952A3&src=g82d68dhkmm7s4ppo53547jkdg%40group.calendar.google.com&color=%23333333&ctz=Europe%2FParis" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>',
			couleur1: '#de76b9',
			couleur2: '#111111',
			tarifDeBase: '930',
			nPers: '20',
			supplementParPers: '15',
			tarifParPersParNuit: '25',
			ftMenage: '160',
			ftLit: '60',
			troisNuitees: '220',
			quatreNuitees: '430',
			uneNuitee: '80',
			basseSaison: '380',
			moyenneSaison: '160',
			hauteSaison: '180',
			noel: '670',
			nouvelAn: '200',
		},
	});

	const [loading, setLoading] = useState(false);

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
				return (
					<FormInfosDiverses classes={classes} register={register} />
				);
			case 2:
				return (
					<FormInfosPratiques classes={classes} register={register} />
				);
			case 3:
				return <FormInfosPages classes={classes} register={register} />;
			default:
				return 'Erreur';
		}
	}

	const onSubmit = async (data) => {
		console.log('submit');
		setLoading(true);

		console.log('onSubmit data =>', data);
		createGite(data, token).then((result) => {
			console.log('result vaut =>', result);
			if (result.error) {
				setLoading(false);
				snackbarShowMessage(`${result.error}`);
			} else if (result.dejaReserveMessage) {
				setLoading(false);
				snackbarShowMessage(`${result.dejaReserveMessage}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${result.message}`, 'success');
				setTimeout(() => {
					Router.push(`/admin/gites`, null, {
						shallow: true,
					});
				}, 3000);
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
							<>
								<Typography className={classes.instructions}>
									Toutes les champs ont bien étés remplis ? Si
									oui, valider pour créer ce gîte !
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
								<Grid
									container
									direction='row'
									justify='space-between'
									alignItems='center'>
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
								</Grid>
							</div>
						)}
					</div>
				</form>
			</div>
		</Container>
	);
};

export default withRouter(withSnackbar(FormCreateGite));
