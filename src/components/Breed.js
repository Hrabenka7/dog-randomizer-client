import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import "./Breed.css";
import { capitalize} from '../helpers/string-transform-helper';
import Photo from './Photo';
import axios from 'axios';


function Breed() {    

  const [breeds, setBreeds] = useState({});
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    axios.get("/allBreeds").then((res) => {
      console.log('breeds', res)
      setBreeds(res.data)})
    }, []);

  const onBreedChange = (e) => {
    setBreed(e.value);
  }

    return (
        <div>{Object.entries(breeds).length > 0 ?
        (
        <React.Fragment>
			<Dropdown value={breed} options={breeds} onChange={onBreedChange} optionLabel="breedName" placeholder="Select a Breed" />	
			<Photo breed={breed}/>
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