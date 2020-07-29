import React from 'react';

const SmartButton = (props) => {
	return (
		<button
			className={props.classNames}
			onClick={props.handleClick}>
				{props.visualName}
		</button>
	)
}

export default SmartButton;
