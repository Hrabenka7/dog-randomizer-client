import React from 'react';
import { Button } from 'primereact/button';
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
					<Button label="Favourite" icon="pi pi-heart" />
					<Button label="Next" onClick={props.loadImage}/>
					<Button label="Like" onClick={props.loadImage}/>
				</div>
		</div>
		</div>
		</React.Fragment>
	)

}
export default Card