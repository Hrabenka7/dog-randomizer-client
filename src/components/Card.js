import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Dropdown } from 'primereact/dropdown';
import "./Card.css";

function Card(props) {
    console.log('props breed', props.breeds)
    const [selectedBreed, setSelectedBreed]= useState(null);
    
    const onBreedChange = (e) => {
        setSelectedBreed(e.value);
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
           {/*  <Dropdown value={selectedBreed} options={props.breeds.message} onChange={onBreedChange} optionLabel={props.breeds.message} placeholder="Select a Breed"/> */}
            </div>
        </div>
        </div>
        </React.Fragment>
    )

}
export default Card