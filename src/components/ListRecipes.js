import React, { useEffect, useState } from 'react';
import { Constants } from "../Constants";


const ListRecipes = () => {
	const [recipes, setRecipes] = useState([]);

	// Get recipes on component load
	useEffect(() => {
		fetch(`${Constants.apiUrl}/recipes`)
			.then((response) => response.json()
				.then((recipes) => {
					setRecipes(recipes);
				}));
	});

	return recipes.map((item, index) => {
		return (
			<div className='recipe-list-box'>
				<div className='recipe-list' key={index}>
					<b>{item.name}</b>
					<span>Ingredientes: {item.ingredients}</span>
					<span>Enlace: <a href={item.link} target="_blank">{item.link}</a></span>
				</div>
			</div>
		)
	})
}

export default ListRecipes;
