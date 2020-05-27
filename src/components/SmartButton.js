import React from 'react';

const SmartButton = (props) => {

	return (
		<button onClick={props.handleClick}>
			{props.visualName}
		</button>
	)

}

export default SmartButton;
