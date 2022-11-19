import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

/* import React, { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState({});
  const loadData = async () => {
    const res = await fetch("https://api.agify.io/?name=michael");
    setData(await res.json());
  };
  useEffect(() => {
    loadData();
    return () => {};
  }, []);
  return <p>{data.name}</p>;
}
 */

function App() {
  const [data, setData] = useState({});

  const loadData = async () => {
    const res = await fetch("/random");
    console.log('data fetched')
    setData(await res.json());
  };
  
  useEffect(() => {
    loadData();
    return () => {};
  }, []);

 return (
  <React.Fragment>
    <div className="wrapper">
      <button onClick={loadData}>Next</button>
      <Card data={data} loadData={loadData}></Card>
    </div>
  </React.Fragment>
  ); 
}

export default App;