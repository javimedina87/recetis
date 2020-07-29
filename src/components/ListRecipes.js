import React, { useEffect, useState } from 'react';
import { Constants } from '../Constants';
import SmartButton from './SmartButton';

const ListRecipes = () => {
	const [recipes, setRecipes] = useState([]);

	// Get recipes on component load
	useEffect(() => {
		fetch(`${Constants.apiUrl}/recipes`)
			.then((response) => response.json()
			.then((recipes) => {
				setRecipes(recipes);
			}));
	}, []);

	const removeRecipe = (recipeSelected) => {
		fetch(`${Constants.apiUrl}/recipes`, {
			method: 'DELETE',
			body: JSON.stringify({_id: recipeSelected._id}),
			headers:{
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json()
			.then(() => {
				const newRecipeList = recipes.filter((recipe) => recipe._id !== recipeSelected._id);

				setRecipes(newRecipeList);
			}));
	}

	return recipes.map((item, index) => {
		return (
			<div className='recipe-list-box'>
				<div className='recipe-list' key={index}>
					<b>{item.name}</b>
					<span>Ingredientes: {item.ingredients}</span>
					<span>Enlace: <a href={item.link} target='_blank'>{item.link}</a></span>
				</div>
				<SmartButton
					classNames={'delete-button'}
					visualName='Borrar receta'
					handleClick={() => removeRecipe(item)} />
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
