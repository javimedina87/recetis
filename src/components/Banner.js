import React from 'react';
import PropTypes from 'prop-types';

const Banner = (props) => {
	return (
		<header className='banner'>
			<img className='app-icon-logo rotate-image' src={`${process.env.PUBLIC_URL}/${props.imageName}`} alt="" />
			<span className='header-text'>{props.text}</span>
		</header>
	)
}

Banner.propTypes = {
	imageName: PropTypes.string,
	text: PropTypes.string
}

export default Banner;
