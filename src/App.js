import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

function App() {
  const [data, setData] = useState({});
  const [breeds, setBreeds] = useState({});

  const loadRandomImage = async () => {
    const res = await fetch("/random");
    console.log('data fetched')
    setData(await res.json());
  };

  const loadAllBreeds = async () => {
    const res = await fetch("/allBreeds");
    console.log('breeds fetched')
    setBreeds(await res.json());
  };

  useEffect(() => {
    loadRandomImage();
    return () => {};
  }, []);

  useEffect(() => {
    loadAllBreeds();
    return () => {};
  }, []);

 return (
  <React.Fragment>
    <div className="wrapper">
      <Card data={data} loadImage={loadRandomImage} breeds={breeds}></Card>
    </div>
  </React.Fragment>
  ); 
}

export default App;