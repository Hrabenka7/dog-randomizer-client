import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import "./Card.css";

const Card = (props ) => {
    return (
        <div>
            <div className="card-holder">
            <div className="card">
            <h1> Dog Randomizer</h1>
            <h3> Breed: {props.data?.breed}</h3>
            <Image src={props.data?.message} alt="Image" width="250" />
            <Button label="Favourite" icon="pi pi-heart" />
            <Button label="Next" onClick={props.loadData}/>
            <Button label="Like" onClick={props.loadData}/>
            <h2> Here add filters</h2>
            </div>
        </div>
        </div>
    );
}
export default Card