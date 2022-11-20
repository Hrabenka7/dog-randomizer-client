import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Dropdown } from 'primereact/dropdown';
import "./Card.css";
import Photo from './Photo';

function Card(props) {  
  console.log('Card Rendered', props);

	return (
	<React.Fragment>
		<div>
			<div className="card-holder">
				<div className="card">
					<h1>{props.data}</h1>
				{/* 	<h3> Breed: {props.data?.breed}</h3> */}
				{/* 	<Dropdown value={selectedBreed} options={props.breeds} onChange={onBreedChange} optionLabel="breedName" placeholder="Select a Breed"/> */}
						{/* <Image src={props.data?.message} alt="Image" width="250" /> */}
						{/* <Breed imageBreed={sharedData}></Breed> */}
						<Photo/>
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