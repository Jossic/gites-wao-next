import { Table } from 'reactstrap';
import { listeDesQR } from '../../actions/giteActions';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import Link from 'next/link';

const ListGites = () => {
	// const [QRs, setQRs] = useState([]);

	// const listerLesQR = () => {
	// 	listeDesQR().then((data) => {
	// 		if (data.error) {
	// 			console.log(error);
	// 		} else {
	// 			setGites(...QRs, data);
	// 		}
	// 	});
	// };

	// useEffect(() => {
	// 	listerLesQR();
	// }, []);

	const deleteConfirm = (slug) => {
		let answer = window.confirm(
			'Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet article ?'
		);
		if (answer) {
			// deleteGite(slug);
			console.log('Suppression');
		}
	};

	const QRs = [
		{
			_id: 1,
			question:
				'QUELLES PRÉCAUTIONS PRENEZ-VOUS SUITE À LA PANDÉMIE COVID-19 ?',
			reponse:
				'Les femmes de ménage utilisaient déjà des produits de professionnels bactéricides et fongicides pour le nettoyage des gîtes. Le linge de lits est fourni par un prestataire (SDEZ à Muizon) qui a aussi des clents comme des hôpitaux et hôtels. L’eau des spas est changée entre chaque location, ce que nous faisions déjà et l’eau des piscines est régulièrement analysée par un laboratoire.',
		},
		{
			_id: 2,
			question:
				'AVEZ-VOUS REMBOURSÉ LES ACOMPTES DANS LE CADRE DU COVID-19 ?',
			reponse:
				'Oui, lorsque les clients ont demandé un report, nous avons reporté l’acompte déjà versé sur le nouveau contrat, sinon, nous avons fait un prêt à la banque et nous avons remboursé tous les acomptes pour les autres.',
		},
		{
			_id: 3,
			question: '-Y A T-IL PLUSIEURS GÎTES ?',
			reponse:
				'Actuellement, nous avons trois gîtes avec piscine et 1 gîte de grande capacité sans piscine, Vous pouvez parcourir le site pour avoir plus d’informations',
		},
		{
			_id: 4,
			question: "-Y A T-IL POSSIBILITÉ DE NE LOUER QU'UNE CHAMBRE ?",
			reponse: 'Non, les gîtes sont toujours loués en totalité.',
		},
		{
			_id: 5,
			question: "-QUI A T'IL COMME POISSONS DANS LES ÉTANGS ?",
			reponse:
				'A Lauberoye et au Petit Nay, il y a carpes, tanches, brochets, gardons. Nous ne fournissons pas le matériel de pêche.',
		},
	];

	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>Question</th>
						<th>Réponse</th>

						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{QRs.map((QR) => (
						<tr className='mt-5'>
							<th>{QR.question}</th>
							<th>{QR.reponse}</th>
							<th>
								<Link href={`/admin/crud/gite/${QR._id}`}>
									<a>
										<i
											class='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(QR._id)}
									class='fas fa-trash-alt'
									style={{
										color: 'red',
										cursor: 'pointer',
									}}></i>
							</th>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default ListGites;
