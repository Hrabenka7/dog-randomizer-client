import React from 'react';
import "./Card.css";
import Breed from './Breed';

function Card(props) {  
  console.log('Card Rendered', props);

	return (
		<React.Fragment>
			<div className="card">
				<div className="cover"><h1>{props.data}</h1></div>
					<Breed></Breed>
			</div>
		</React.Fragment>
	)

}
export default Card