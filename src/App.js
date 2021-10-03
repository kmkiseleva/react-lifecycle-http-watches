import "./App.css";
import { useState } from "react";
import Controller from "./components/Controller";
import WorldWatches from "./components/WorldWatches";

const initialState = [
  { id: "Moscow", name: "Moscow", timeZone: -3 },
  { id: "London", name: "London", timeZone: -1 },
];

function App() {
  const [watches, setWatches] = useState(initialState);

  const addNewWatchesHandler = (data) => {
    setWatches((prevState) => [...prevState, data]);
  };

  const deleteWatchesHandler = (id) => {
    setWatches((prevState) => {
      const filteredWatches = prevState.filter((watch) => watch.id !== id);
      setWatches(filteredWatches);
    });
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Controller addNewWatches={addNewWatchesHandler} />
      <WorldWatches watches={watches} deleteWatches={deleteWatchesHandler} />
    </div>
  );
}

export default App;
