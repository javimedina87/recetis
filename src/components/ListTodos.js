import React, { useEffect, useState } from 'react';
import { Constants } from '../Constants';
import ListItems from './ListItems';
import SmartButton from './SmartButton';

// TODO currently not used!

const ListTodos = () => {
	const [todos, setTodos] = useState([]);

	// Get To-Do's on component load
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
		}).then((response) => response.json()
			.then((todos) => {
				setTodos(todos);
			})
		);
	}

	return (
		<div className='work-in-progress-container'>
			<b>Listado de To-Do's</b>
			<ListItems items={todos}/>
			<input id='newTodoText' type='text' />
			<SmartButton
				classNames={'add-button'}
				visualName='+'
				handleClick={addNewTodo} />
		</div>
	)
}

export default ListTodos;
