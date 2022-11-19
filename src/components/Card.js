import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Dropdown } from 'primereact/dropdown';
import "./Card.css";

function Card(props) {  
    console.log('RERENDERED')
    const [selectedBreed, setSelectedBreed]= useState(null);
    
    const onBreedChange = (e) => {
        setSelectedBreed(e.value.breedName);
        props.loadFilteredImage(e.value.breedName)
    }
    

    return (
        <React.Fragment>
        <div>
            <div className="card-holder">
            <div className="card">
            <h1> Dog Randomizer</h1>
            <h3> Breed: {props.data?.breed}</h3>
            <Image src={props.data?.message} alt="Image" width="250" />
            <Button label="Favourite" icon="pi pi-heart" />
            <Button label="Next" onClick={props.loadImage}/>
            <Button label="Like" onClick={props.loadImage}/>
            <Dropdown value={selectedBreed} options={props.breeds} onChange={onBreedChange} optionLabel="breedName" placeholder="Select a Breed"/>
            </div>
        </div>
        </div>
        </React.Fragment>
    )

}
export default Card