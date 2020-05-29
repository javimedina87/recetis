import React from 'react';

const ListRecipes = (props) => {
	return props.items.map((item, index) => {
		return (
			<div className='recipe-list' key={index}>
				Nombre: <b>{item.name}</b>
				<span>Ingredientes: {item.ingredients}</span>
				<span>Enlace: <a href={item.link} target="_blank">{item.link}</a></span>
			</div>
		)
	})
}

export default ListRecipes;
