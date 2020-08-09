import React, { useState } from 'react';

const Search = (props) => {
	const [ search, setSearch ] = useState('');
	const { list, onUpdateList } = props;

	const handleOnInputChange = (event) => {
		const filteredList = list.filter((item) =>
			item.name.toLowerCase().trim().includes(event.target.value.toLowerCase().trim()));

		setSearch(event.target.value);
		onUpdateList(filteredList);
	};

	return (
		<div className='form'>
			<input
				placeholder='Buscar receta...'
				type='text'
				value={search}
				onChange={handleOnInputChange}
			/>
		</div>
	)
}

export default Search;
