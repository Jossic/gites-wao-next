import Layout from '../../components/layout/Layout';
import { listeDesQR } from '../../actions/giteActions';
import { useEffect, useState } from 'react';

const FAQ = () => {
	const [QRs, setQRs] = useState([]);

	const listerLesQR = () => {
		listeDesQR().then((data) => {
			if (data.error) {
				console.log(error);
			} else {
				setQRs(...QRs, data);
			}
		});
	};

	useEffect(() => {
		listerLesQR();
	}, []);

	return (
		<Layout>
			<section
				className='accordion-section clearfix mt-3'
				aria-label='Question Accordions'>
				<div className='container'>
					<h2>Questions fréquentes </h2>
					<div
						className='panel-group'
						id='accordion'
						role='tablist'
						aria-multiselectable='true'>
						{QRs.map((QR, i) => (
							<div className='panel panel-default' key={i}>
								<div
									className='panel-heading p-3 mb-3'
									role='tab'
									id={`heading${i}`}>
									<h3 className='panel-title'>
										<a
											className='collapsed lead'
											role='button'
											title=''
											data-toggle='collapse'
											data-parent='#accordion'
											href={`#collapse${i}`}
											aria-expanded='true'
											aria-controls={`collapse${i}`}>
											{QR.question}
										</a>
									</h3>
								</div>
								<div
									id={`collapse${i}`}
									className='panel-collapse collapse'
									role='tabpanel'
									aria-labelledby={`heading${i}`}>
									<div className='panel-body px-3 mb-4'>
										{QR.reponse}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default FAQ;
