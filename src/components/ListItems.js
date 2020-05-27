import React from 'react';

const ListItems = (props) => {

	return (
		<ul className="list-items">
			{props.items.map((item, index) => <li key={index}>{item.name}</li>)}
		</ul>
	)
}

export default ListItems;
