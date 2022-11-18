import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import "./Card.css";


function Card() {
    return(
        <div class="card-holder">
            <div class="card">
            <h1> Dog Randomizer</h1>
            <h3> Breed: Spagetti</h3>
            <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="550" />
            <Button label="Next"/>
            <Button label="Like"/>
            <Button label="Like Mark"/>
            <h2> Here add filters</h2>
            </div>
        </div>
    )
}

export default Card