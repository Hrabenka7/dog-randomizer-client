import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import "./Breed.css";
import Photo from './Photo';
import axios from 'axios';


function Breed() {    

  const [breeds, setBreeds] = useState({});
  const [breed, setBreed] = useState(null);
  const [subBreeds, setSubBreeds] = useState({}); 
  const [subBreed, setSubBreed] = useState(null);
  const [subBreedStatus, setSubBreedsStatus] = useState(false);
  const [subBreedsPlaceholder, setSubBreedsPlaceholder] = useState("No Breed Selected");

  useEffect(() => {
    axios.get("/allBreeds").then((res) => {
      console.log('breeds:', + res)
      setBreeds(res.data)})
    }, []);

  const onBreedChange = (e) => {
    console.log("onBreedChange", e.value)
	setBreed(e.value);
	if (e.value === undefined) {
		setSubBreedsStatus(false);
		setSubBreedsPlaceholder("No breed selected");
	}
	else {
		if (e.value.subBreeds.length > 0) {
			setSubBreeds(e.value.subBreeds);
			setSubBreed(undefined);
			setSubBreedsPlaceholder("Select a Sub-breed");
			setSubBreedsStatus(true);
		}
		else {
			// If the breed has no subbreeds, leave the dropdown disable and show corresponding message
			setSubBreeds(undefined);
			setSubBreedsPlaceholder("This breed has no sub-breeds");
			setSubBreedsStatus(false);
		}
	}
  }

  const onSubBreedChange = (e) => {
	setSubBreed(e.value);
  }

    return (
        <div>{Object.entries(breeds).length > 0 ?
        (
        <React.Fragment>
			<Dropdown value={breed} options={breeds} onChange={onBreedChange} optionLabel="breedName" placeholder="Select a Breed" showClear />	
			<br></br>
			<Dropdown value={subBreed} options={subBreeds} onChange={onSubBreedChange} placeholder={subBreedsPlaceholder} disabled={!subBreedStatus} showClear />	
			<Photo breed={breed} subBreed={subBreed}/>
			{/* <Button label="Favourite" icon="pi pi-heart" /> */}
        </React.Fragment>
        )
        : 
        (
         <React.Fragment/>
         )
        }</div>
    )

}

export default Breed