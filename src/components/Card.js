import React from 'react';
import "./Card.css";
import Breed from './Breed';

function Card(props) {  
  console.log('Card Rendered', props);

	return (
	<React.Fragment>
		<div>
			<div className="card-holder">
				<div className="card">
					<h1>{props.data}</h1>
						<Breed></Breed>
				</div>
		</div>
		</div>
		</React.Fragment>
	)

}
export default Card