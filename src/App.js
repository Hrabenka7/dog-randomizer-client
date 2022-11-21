import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                                
import "./App.css";
import Card from "./components/Card/Card";

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