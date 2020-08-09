import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import '../App.css';
import AddRecipeForm from './AddRecipeForm';
import Banner from './Banner';
import ListTodos from './ListTodos';
import Menu from './Menu';
import RecipesScreen from './RecipesScreen';

import { Constants } from '../Constants';

const logoIcon = `192/${Constants.logoIcon[Math.floor(Math.random() * Constants.logoIcon.length)]}`;

function App() {
	return (
		<Router>
			<div>
				{/*Banner component*/}
				<Banner imageName={logoIcon} text='Recetis para tod@s'/>

				{/*Container (all app content)*/}
				<div className='container'>

					{/* Menu link component */}
					<Menu />

					<Switch>
						<Route
							path='/add-recipe'
							component={AddRecipeForm}>
						</Route>
						<Route
							path='/recipes-list'
					   		component={RecipesScreen}>
						</Route>
						<Route
							path='/todo-list'
							component={ListTodos}>
						</Route>
					</Switch>

				</div>
			</div>
		</Router>
	);
}

export default App;
