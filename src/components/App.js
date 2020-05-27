import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import ListItems from './ListItems';
import SmartButton from './SmartButton';
import '../App.css';

function App() {
	const [ideas, setIdeas] = useState([]);

	const addNewIdea = (e) => {
		e.preventDefault(); // TODO check this

		const url = 'http://localhost:4200/api/ideas';
		const data = { name: 'idea desde front' };

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.catch(error => console.error('Error: ', error))
			.then(response => console.log('Success: ', response));
	}

	useEffect(() => {
		fetch('http://localhost:4200/api/ideas')
			.then((response) => response.json()
			.then((ideas) => {
				console.log('ideas: ', ideas);

				setIdeas(ideas);
			}));
	}, []);

	return (
		<div>
            <Banner
                imageName='egg.png'
                text='Recetis para tod@s'/>

			{/*Container (all app content except banner)*/}
			<div className='container'>

				<span>Lista de ideas (Componente ListItems.js)</span>

				<ListItems items={ideas}/>
			</div>

			<SmartButton handleClick={addNewIdea} visualName='+'/>

			{/*<input type="text" name="newidea" value="" />*/}
			{/*<button>Añadir idea</button>*/}

		</div>
	);
}

export default App;
