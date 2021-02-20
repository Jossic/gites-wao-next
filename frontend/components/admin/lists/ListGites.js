import { Table } from 'reactstrap';
import { deleteGite, listeDesGites } from '../../../actions/giteActions';
import { useEffect, useState } from 'react';
import { API } from '../../../config';
import MUIDataTable from 'mui-datatables';
import { withRouter } from 'next/router';
import WidgetsIcon from '@material-ui/icons/Widgets';
import { IconButton } from '@material-ui/core';
import { withSnackbar } from '../../HOC/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Alert, Spinner } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import { getCookie } from '../../../actions/authActions';

const ListGites = ({ gites, router, snackbarShowMessage }) => {
	const token = getCookie('token');

	const [loading, setLoading] = useState(false);

	const removeGite = (slug) => {
		setLoading(true);
		deleteGite(slug, token).then((data) => {
			if (data.error) {
				setLoading(false);
				snackbarShowMessage(`${data.error}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${data.message}`, 'success');
				setTimeout(() => {
					router.reload();
				}, 3000);
			}
		});
	};

	const deleteConfirm = (slug) => {
		if (typeof window !== 'undefined') {
			let answer = window.confirm(
				`Vous êtes sur le point de supprimer le gîte ${slug}, êtes-vous sûr ?`
			);
			if (answer) {
				removeGite(slug);
			}
		}
	};

	const columns = [
		{
			name: '_id',
			label: '#',
			options: {
				filter: true,
				sort: true,
				// display: false,
			},
		},
		{
			name: 'nom',
			label: 'Nom',
			options: {
				filter: true,
				sort: true,
			},
		},
		{
			name: 'slug',
			label: 'Slug',
			options: {
				filter: true,
				sort: true,
				display: 'none',
			},
		},
		{
			name: 'tarifDeBase',
			label: 'Tarif de base',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'capaciteMax',
			label: 'Capacité',
			options: {
				filter: true,
				sort: false,
			},
		},

		{
			name: 'vignette',
			label: 'Vignette',
			options: {
				filter: false,
				sort: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					// console.log('vignette vaut =>', tableMeta);
					for (const gite of gites) {
						if (tableMeta.rowData[2] === gite.slug) {
							// return (
							// 	<Image
							// 		src={`${API}/gite/photo/${gite.slug}`}
							// 		alt={`vignette ${gite.slug}`}
							// 		width={75}
							// 		height={75}
							// 	/>
							// );
						}
					}
				},
			},
		},
		{
			name: 'actif',
			label: 'Visible',
			options: {
				filter: true,
				customBodyRender: (value, tableMeta, updateValue) => {
					return value ? (
						<CheckBoxIcon />
					) : (
						<CheckBoxOutlineBlankIcon />
					);
				},
			},
		},
		{
			name: 'Consulter',
			options: {
				sort: false,
				filter: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					// console.log(tableMeta.rowData);
					return (
						<IconButton>
							<Link href={`/admin/gites/${tableMeta.rowData[0]}`}>
								<a>
									<WidgetsIcon fontSize='large' />
								</a>
							</Link>
						</IconButton>
					);
				},
			},
		},
		{
			name: 'Suppr',
			options: {
				customBodyRender: (value, tableMeta, updateValue) => {
					// console.log(tableMeta.rowData);
					return (
						<IconButton>
							<DeleteForeverIcon
								style={{
									fontSize: '30px',
									color: 'red',
								}}
								onClick={() =>
									deleteConfirm(tableMeta.rowData[2])
								}
							/>
						</IconButton>
					);
				},
			},
		},
	];

	const options = {
		filterType: 'checkbox',
		selectableRows: 'none',
		setRowProps: (row) => {
			//ajouter style selon le status
			// console.log('row vaut', row[2]);
			for (const gite of gites) {
				if (row[2] === gite.slug) {
					return {
						style: {
							background: gite.couleur1,
						},
					};
				}
			}
		},
	};

	return (
		<>
			{loading && <CircularProgress />}

			<MUIDataTable
				title={'Liste des gîtes'}
				data={gites}
				columns={columns}
				options={options}
			/>
			{/* <Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Nom</th>
						<th>Vignette</th>
						<th>Capacité</th>
						<th colSpan='2'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{gites.map((gite) => (
						<tr
							style={{ backgroundColor: gite.couleur1 }}
							className='mt-5'>
							<th>{gite._id}</th>
							<th>{gite.nom}</th>
							<th>
								<img
									src={`${API}/gite/photo/${gite.slug}`}
									style={{ maxHeight: 'auto', width: '100%' }}
									className='img img-fluid'
									alt={gite.nom}
								/>
							</th>
							<th>{gite.capacite}</th>
							<th>
								<Link href={`/admin/crud/gite/${gite.slug}`}>
									<a>
										<i
											className='fas fa-pencil-ruler'
											style={{ color: 'orange' }}></i>
									</a>
								</Link>
							</th>
							<th>
								<i
									onClick={() => deleteConfirm(gite.slug)}
									className='fas fa-trash-alt'
									style={{
										color: 'red',
										cursor: 'pointer',
									}}></i>
							</th>
						</tr>
					))}
				</tbody>
			</Table> */}
		</>
	);
};

export default withRouter(withSnackbar(ListGites));
