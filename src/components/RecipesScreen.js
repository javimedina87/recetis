import React, { useEffect, useState } from 'react';
import ListRecipes from './ListRecipes';
import Search from './Search';
import { Constants } from '../Constants';

const RecipesScreen = () => {
	const [ recipes, setRecipes ] = useState([]);
	const [ dynamicRecipes, setDynamicRecipes ] = useState([]);

	useEffect(() => {
		fetch(`${Constants.apiUrl}/recipes`)
			.then((response) => response.json()
				.then((recipes) => {
					setRecipes(recipes);
					setDynamicRecipes(recipes);
				}));
	}, []);

	const updateRecipes = (newRecipeList) => {
		setDynamicRecipes(newRecipeList);
	}

	const deleteRecipe = (newRecipeList) => {
		setDynamicRecipes(newRecipeList);
	}

	return (
		<>
			<Search
				list={recipes}
				onUpdateList={updateRecipes}
			/>
			<ListRecipes
				list={dynamicRecipes}
				onDeleteRecipe={deleteRecipe}
			/>
		</>
	)
}

export default RecipesScreen;
