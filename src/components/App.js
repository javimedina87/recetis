import React, { useEffect, useState } from 'react';
import AddRecipeForm from './AddRecipeForm';
import Banner from './Banner';
import ListItems from './ListItems';
import ListRecipes from './ListRecipes';
import SmartButton from './SmartButton';
import '../App.css';
import { Constants } from '../Constants';

const logoIcon = `192/${Constants.logoIcon[Math.floor(Math.random() * Constants.logoIcon.length)]}`;

function App() {
	const [todos, setTodos] = useState([]);
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch(`${Constants.apiUrl}/todos`)
			.then((response) => response.json()
				.then((todos) => {
					setTodos(todos);
				}));
	}, []);

	const addNewTodo = () => {
		const data = { name: document.getElementById('newTodoText').value }; // TODO leer de variable

		fetch(`${Constants.apiUrl}/todos`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
				}
			})
			.then((response) => response.json()
			.then((todos) => {
				setTodos(todos);
			}));
	}

	const updateRecipes = () => {
		fetch(`${Constants.apiUrl}/recipes`)
			.then((response) => response.json()
			.then((recipes) => {
				setRecipes(recipes);
			}));
	}

	return (
		<div>
            <Banner imageName={logoIcon} text='Recetis para tod@s'/>

			{/*Container (all app content except banner)*/}
			<div className='container'>
				<AddRecipeForm />

				<div className='recipe-list-box'>
					<p><b>Listado de Recetas</b></p>
					<ListRecipes items={recipes}/>
					<button onClick={updateRecipes}>Actualizar recetas</button>
				</div>

				<div className='work-in-progress-container'>
					<b>Listado de To-Do's</b>
					<ListItems items={todos}/>
					<input id='newTodoText' type='text' />
					<SmartButton handleClick={addNewTodo} visualName='+'/>
				</div>

			</div>
		</div>
	);
}

export default App;
