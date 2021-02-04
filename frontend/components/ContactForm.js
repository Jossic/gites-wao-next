const ContactForm = () => {
	return (
		<div className='container mt-5 mb-5'>
			<h2>Contactez-nous</h2>
			<div className='row'>
				<div className='col-md-5'>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Ut eaque illo nulla laborum at est corrupti
						voluptatibus sint magnam eveniet.
					</p>
					<p>
						Entreprise : SAS WAO <br /> 1 route de Nouart <br />{' '}
						08240 FOSSÉ
					</p>
					<p>
						Téléphone : <br /> Martine : 03 24 30 08 65 <br /> Jonas
						: 06 .. .. .. ..{' '}
					</p>
					<p>Mail : contact@gites-wao.fr</p>
				</div>
				<div className='col-md-7'>
					<form>
						<div className='form-group'>
							<label htmlFor='exampleFormControlInput1'>
								Email address
							</label>
							<input
								type='text'
								className='form-control'
								id='exampleFormControlInput1'
								placeholder='name@example.com'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleFormControlInput1'>
								Email address
							</label>
							<input
								type='email'
								className='form-control'
								id='exampleFormControlInput1'
								placeholder='name@example.com'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleFormControlInput1'>
								Email address
							</label>
							<input
								type='text'
								className='form-control'
								id='exampleFormControlInput1'
								placeholder='name@example.com'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleFormControlTextarea1'>
								Example textarea
							</label>
							<textarea
								className='form-control'
								id='exampleFormControlTextarea1'
								rows='3'></textarea>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
