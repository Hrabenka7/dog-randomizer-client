import React, { useEffect, useState } from "react";
import { Image } from 'primereact/image';
import { ProgressSpinner } from 'primereact/progressspinner';
import "./Photo.css";
import Breed from './Breed';
import { capitalize} from '../helpers/string-transform-helper';


function Photo(props) {  
	console.log('Photo Rendered');
	const [imageData, setImageData] = useState(null);

	useEffect(() => {
		console.log('Use Effect in Photo was called')
		loadRandomImage();
		return () => {};
	}, []);

	useEffect(() => {
		if(props && props.breed) {
			console.log('breed',props.breed)
			loadFilteredImage(props.breed.breedName)
		}
	  }, [props.breed]);


	const loadRandomImage = async () => {
		const res = await fetch("/random");
		setImageData(await res.json())
	};
	
	const loadFilteredImage = async (breed) => {
		const res = await fetch(`/breed/param?breed=${breed}`);
		setImageData(await res.json());
	  };

    return (
        <div>{imageData ?
        (
        <React.Fragment>
			<h3> Breed: {capitalize(imageData.breed)}</h3>
            <Image src={imageData.message} alt="Image" width="250" />
        </React.Fragment>
        )
		:
		(
		<React.Fragment>
			<ProgressSpinner/>
		</React.Fragment>
		)
        }</div>
    )

}

export default Photo