import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import "./Breed.css";
import { capitalize} from '../helpers/string-transform-helper';

function Breed(props) {    
  console.log('Breed Rendered', props);

  const [breeds, setBreeds] = useState({});
  useEffect(() => {
	console.log('Use Effect in Breed was called')
    loadAllBreeds();
    return () => {};
  }, []);
  
  const [selectedBreed, setSelectedBreed]= useState(null);
  const onBreedChange = (e) => {
    setSelectedBreed(e.value.breedName);
    props.loadFilteredImage(e.value.breedName)
  }
  
  const loadAllBreeds = async () => {
    const res = await fetch("/allBreeds");
    setBreeds(await res.json());
	console.log('All Breeds were set in Breed.js')
  };


    return (
        <div>{Object.entries(breeds).length > 0 ?
        (
        <React.Fragment>
            <p> {capitalize(props.imageBreed)} is not your cup of tea? You can pick your favourite breed here</p>
			<Dropdown value={selectedBreed} options={breeds} onChange={onBreedChange} optionLabel="breedName" placeholder="Select a Breed"/>
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