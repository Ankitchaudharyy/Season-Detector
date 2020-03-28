import React from 'react';
import './SeasonsDisplay.css';

const seasonConfig = {
	summer: {
		text: `Let's hit the beach!`,
		icon: 'sun'
	},
	winter: {
		text: `Burr, it is chilly`,
		icon: `snowflake`
	}
} 

const getSeason = (lat, month) => {
	if(lat>2 && lat<9){
		return lat<0 ? 'summer' : 'winter';
	}
	else{
		return lat<0 ? 'winter' : 'summer';
	}
} 

const SeasonsDisplay = props => {
	const season = getSeason(props.lat, new Date.getMonth());

	const {text, iconName} = seasonConfig[season];

	return (
		<div className={`season-display ${season}`} >
			<i className={`icon-left massive ${iconName} icon`} />
			<h1> {text} </h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	); 
};

export default SeasonsDisplay;