import React, { useEffect, useState } from "react";
import { Image } from 'primereact/image';
import { ProgressSpinner } from 'primereact/progressspinner';
import "./DogInfo.css";
import { Button } from 'primereact/button';
import axios from 'axios';

function DogInfo(props) {  
	const [imageData, setImageData] = useState(null);

	useEffect(() => {
		if (!props) {
			return;
		}

		if(props.breed && props.subBreed) {
			loadFilteredImage(props.breed.breedName, props.subBreed);
		}
		else if(props.breed) {
			loadFilteredImage(props.breed.breedName);
		}
		else {
			loadRandomImage();
		}

		return () => {};
	}, [props.breed, props.subBreed]);

	const loadRandomImage = () => {
		axios.get("/random").then((res) => {
			setImageData(res.data);
		})
	};
	
	const loadFilteredImage = (breed, subBreed = null) => {
		axios.get("/filtered", {
			params: {
			  breed: breed,
			  ...(subBreed ? { subBread: subBreed } : {})
			},
		  })
		  .then((res)=> {
			setImageData(res.data);
		})
	};

	const saveFavoriteDog = (dogName) => {
		var favoriteDogs = JSON.parse(window.localStorage.getItem("favorite_dogs"));
		if (!favoriteDogs) {
			favoriteDogs = [];
		}
		favoriteDogs.push(dogName);
		window.localStorage.setItem("favorite_dogs", JSON.stringify(favoriteDogs));
	};

	const isFavoriteDog = (dogName) => {
		var favoriteDogs = JSON.parse(window.localStorage.getItem("favorite_dogs"));
		if (!favoriteDogs) {
			return false;
		}

		return favoriteDogs.includes(dogName);
	};


	const likeHandler = (breed, subBreed = null) => {
		saveFavoriteDog(imageData.imageName);
		nextHandler(breed, subBreed);
	}

	const nextHandler = (breed, subBreed = null) => {
		if (breed && breed.breedName && subBreed) {
			loadFilteredImage(breed.breedName, subBreed);
		}
		else if (breed && breed.breedName) {
			loadFilteredImage(breed.breedName);
		}
		else {
			loadRandomImage();
		}
	}

    return (
        <div>
		{imageData ?
        (
        <React.Fragment>
            <div className="image"><Image src={imageData.message} alt="Image" width="350" height="300" /></div>
			<h3> This is {imageData.breed ? imageData.breed : 'mysterious breed' }</h3>
				{ isFavoriteDog(imageData.imageName) ? (<Button label="❤ Favorite" disabled={true}/>)
				:(<Button className="p-button-warning" label="I like him" onClick={ () => likeHandler(props.breed, props.subBreed)}/>)}
				<span className="vertical-line"></span>
				<Button className="p-button-secondary" label="Next one" onClick={ () => nextHandler(props.breed, props.subBreed) }/>
        </React.Fragment>
        )
		:
		(
		<React.Fragment>
			<ProgressSpinner/>
		</React.Fragment>
		)
		}
		</div>
    )

}




export default DogInfo