import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const backendApiRecipesUrl = 'https://recetis-backend.herokuapp.com/api/recipes';
// const backendApiRecipesUrl = 'http://localhost:4200/api/recipes';

const AddRecipeForm = () => {
	const { register, errors, handleSubmit } = useForm();

	const [formData, setFormData] = useState({
		name: '',
		ingredients: '',
		link: ''
	});

	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	const onSubmit = (data, event) => {
		console.log(data);

		event.target.reset();

		// TODO send data to POST "recipe" service
		addNewRecipe();
	}

	const addNewRecipe = () => {
		fetch(backendApiRecipesUrl, {
			method: 'POST',
			body: JSON.stringify(formData),
			headers:{
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json()
			.then((json) => {
				console.log('json de añadir receta', json);
			}));
	}

	return (
		<Fragment>
			<div className='add-recipe-container'>
				<h3>Añadir receta</h3>
				<form className='form' onSubmit={handleSubmit(onSubmit)}>
					<input
						name='name'
						placeholder="Nombre"
						type="text"
						onChange={handleInputChange}
						ref={
							register({
								required: { value: true, message: 'Nombre requerido' }
							})
						}/>
					<span className='input-error'>{errors.name && errors.name.message}</span>

					<input
						name='ingredients'
						placeholder="Ingredientes"
						type="text"
						onChange={handleInputChange}
						ref={
							register({
								required: { value: true, message: 'Ingredientes requeridos' }
							})
						}/>
					<span className='input-error'>{errors.ingredients && errors.ingredients.message}</span>

					<input
						name='link'
						placeholder="Enlace (video, web....)"
						type="text"
						onChange={handleInputChange}
						ref={
							register({
								required: { value: true, message: 'Enlace requerido' }
							})
						}/>
					<span className='input-error'>{errors.link && errors.link.message}</span>

					<button type="submit">Añadir</button>
				</form>
			</div>
		</Fragment>
	)
}

export default AddRecipeForm;
