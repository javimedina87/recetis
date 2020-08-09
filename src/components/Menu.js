import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

	return (
		<div className='menu-container'>
			<div className='menu-element'>
				<Link to='/add-recipe'>Añadir receta</Link>
			</div>
			<div className='menu-element'>
				<Link to='/recipes-list'>Listado de recetas</Link>
			</div>
		</div>
	)
}

export default Menu;
