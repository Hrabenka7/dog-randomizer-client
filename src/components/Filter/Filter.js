import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import "./Filter.css";
import DogInfo from '../DogInfo/DogInfo';
import axios from 'axios';


function Filter() {    
	console.log('Breed Rendered')
	
	const [breeds, setBreeds] = useState({});
	const [breed, setBreed] = useState(null);
	const [subBreeds, setSubBreeds] = useState({}); 
	const [subBreed, setSubBreed] = useState(null);
	const [subBreedStatus, setSubBreedsStatus] = useState(false);
	const [subBreedsPlaceholder, setSubBreedsPlaceholder] = useState("No Breed Selected");

	useEffect(() => {
		axios.get("/allBreeds").then((res) => {
			setBreeds(res.data)})
		}, []);

	const onBreedChange = (e) => {
		debugger;
		setBreed(e.value);
		if (e.value === undefined) {
			setSubBreedsStatus(false);
			setSubBreed(undefined);
			setSubBreedsPlaceholder("No breed selected");
		}
		else if (e.value.subBreeds.length > 0) {
			setSubBreeds(e.value.subBreeds);
			setSubBreed(undefined);
			setSubBreedsPlaceholder("Select a Sub-breed");
			setSubBreedsStatus(true);
		}
		else {
			setSubBreeds(undefined);
			setSubBreedsPlaceholder("This breed has no sub-breeds");
			setSubBreedsStatus(false);
		}
	}
	
	const onSubBreedChange = (e) => {
		debugger;
		setSubBreed(e.value);
	}

	return (
			<div className="layout">
			{Object.entries(breeds).length > 0 ?
			(
				<React.Fragment>
					<div className="left">
						<DogInfo breed={breed} subBreed={subBreed}/>
					</div>
					<div className="right">
						<div><p>Breed: </p><Dropdown value={breed} options={breeds} onChange={onBreedChange} optionLabel="breedName" placeholder="Select a Breed" showClear /></div>
						<div><p>SubBreed: </p><Dropdown value={subBreed} options={subBreeds} onChange={onSubBreedChange} placeholder={subBreedsPlaceholder} disabled={!subBreedStatus} showClear /></div>
					</div>
				</React.Fragment>
			)
			: 
			(
				<React.Fragment/>
			)
			}
			</div>
	)

}

export default Filter