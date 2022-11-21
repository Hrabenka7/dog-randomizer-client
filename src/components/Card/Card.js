import React from 'react';
import "./Card.css";
import Filter from '../Filter/Filter';

function Card(props) {  
	return (
		<React.Fragment>
			<div className="card">
				<div className="cover"><h1>{props.data}</h1></div>
					<Filter></Filter>
			</div>
		</React.Fragment>
	)

}
export default Card