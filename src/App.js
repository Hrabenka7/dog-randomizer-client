import React from 'react';
import "./App.css";
import Card from "./components/Card";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons 

function App() {
  console.log('App Rendered');
  const appName = "Dog Randomizer";

 return (
  <React.Fragment>
    <div className="wrapper">
      <Card data={appName}></Card>
    </div>
  </React.Fragment>
  ); 
}

export default App;