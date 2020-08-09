import React from 'react';
import SmartButton from './SmartButton';
import { Constants } from '../Constants';

const ListRecipes = (props) => {
	const {
		list: recipes ,
		onDeleteRecipe
	} = props;

	const handleOnDeleteRecipe = async (recipeSelected) => {
		await removeRecipe(recipeSelected);

		const newRecipeList = recipes.filter((recipe) => recipe._id !== recipeSelected._id);

		onDeleteRecipe(newRecipeList);
	};

	const removeRecipe = (recipeSelected) => {
		fetch(`${Constants.apiUrl}/recipes`, {
			method: 'DELETE',
			body: JSON.stringify({_id: recipeSelected._id}),
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then((response) => response.json());
	}

	return recipes.map((item, index) => {
		return (
			<div className='recipe-list-box' key={index}>
				<div className='recipe-list'>
					<b>{item.name}</b>
					<span>Ingredientes: {item.ingredients}</span>
					<span>Enlace: <a href={item.link} target='_blank' rel="noopener noreferrer">{item.link}</a></span>
				</div>
				<SmartButton
					classNames={'delete-button'}
					visualName='Borrar receta'
					handleClick={() => handleOnDeleteRecipe(item)} />
			</div>
		)
	})

	{/*<button onClick={updateRecipes}>Actualizar recetas</button>*/}

	/*	const updateRecipes = () => {
			fetch(`${Constants.apiUrl}/recipes`)
				.then((response) => response.json()
					.then((recipes) => {
						setRecipes(recipes);
					}));
		}*/
}

export default ListRecipes;
