import React, { useEffect, useState } from 'react';
import AddRecipeForm from './AddRecipeForm';
import Banner from './Banner';
import ListItems from './ListItems';
import ListRecipes from './ListRecipes';
import SmartButton from './SmartButton';
import '../App.css';

const backendApiIdeasUrl = 'https://recetis-backend.herokuapp.com/api/ideas';
//const backendApiIdeasUrl = 'http://localhost:4200/api/ideas';
const backendApiRecipesUrl = 'https://recetis-backend.herokuapp.com/api/recipes';
//const backendApiRecipesUrl = 'http://localhost:4200/api/recipes';

function App() {
	const [ideas, setIdeas] = useState([]);
	const [recipes, setRecipes] = useState([]);

	const addNewIdea = () => {
		const data = { name: document.getElementById('newIdeaText').value }; // TODO leer de variable

		fetch(backendApiIdeasUrl, {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
				}
			})
			.then((response) => response.json()
			.then((ideas) => {
				setIdeas(ideas);
			}));
	}

	const updateRecipes = () => {
		fetch(backendApiRecipesUrl)
			.then((response) => response.json()
			.then((recipes) => {
				setRecipes(recipes);
			}));
	}

	useEffect(() => {
		fetch(backendApiIdeasUrl)
			.then((response) => response.json()
			.then((ideas) => {
				setIdeas(ideas);
			}));
	}, []);

	return (
		<div>
            <Banner imageName='egg.png' text='Recetis para tod@s'/>

			{/*Container (all app content except banner)*/}
			<div className='container'>
				<AddRecipeForm />

				<div className='recipe-list-box'>
					<p><b>Listado de Recetas</b></p>
					<ListRecipes items={recipes}/>
					<button onClick={updateRecipes}>Actualizar recetas</button>
				</div>

				<div className='work-in-progress-container'>
					<b>Listado de ideas</b>
					<ListItems items={ideas}/>
					<input id='newIdeaText' type='text' />
					<SmartButton handleClick={addNewIdea} visualName='+'/>
				</div>

			</div>
		</div>
	);
}

export default App;
