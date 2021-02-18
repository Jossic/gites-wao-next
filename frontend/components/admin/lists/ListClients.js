import { useState } from 'react';
import Link from 'next/link';
import { getCookie } from '../../../actions/authActions';
import MUIDataTable from 'mui-datatables';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withRouter } from 'next/router';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import { withSnackbar } from '../../HOC/Snackbar';
import { removeClient } from '../../../actions/clientActions';

const ListClients = ({ clients, router, snackbarShowMessage }) => {
	const token = getCookie('token');

	const [loading, setLoading] = useState(false);

	const deleteMailer = (id) => {
		setLoading(true);
		removeClient(id, token).then((data) => {
			console.log('data vaut', data);
			if (data.error) {
				setLoading(false);
				snackbarShowMessage(`${data.error}`);
			} else {
				setLoading(false);
				snackbarShowMessage(`${data.text}`, 'success');
				setTimeout(() => {
					router.reload();
				}, 3000);
			}
		});
	};

	const deleteConfirm = (id) => {
		if (typeof window !== 'undefined') {
			let answer = window.confirm(
				`Suppression du mailer ${id}, êtes-vous sûr ?`
			);
			if (answer) {
				deleteMailer(id);
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
			name: 'tel',
			label: 'Tel',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'mail',
			label: 'Mail',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'nbVenu',
			label: 'Nombre de venu',
			options: {
				filter: true,
				sort: false,
			},
		},
		{
			name: 'newsletter',
			label: 'Newsletter',
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
			name: 'Modifier',
			options: {
				sort: false,
				filter: false,
				customBodyRender: (value, tableMeta, updateValue) => {
					// console.log(tableMeta.rowData);
					return (
						<IconButton>
							<Link
								href={`/admin/crud/clients/${tableMeta.rowData[0]}`}>
								<a>
									<CreateIcon fontSize='large' />
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
									deleteConfirm(tableMeta.rowData[0])
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
	};

	return (
		<>
			{loading && <CircularProgress />}

			<MUIDataTable
				title={'Clients'}
				data={clients}
				columns={columns}
				options={options}
			/>
		</>
	);
};

export default withRouter(withSnackbar(ListClients));
