import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div class="wrapper">
      <Card></Card>
    </div>
  );



  
}

export default App;