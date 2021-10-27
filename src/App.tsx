import React, { useEffect } from "react";
import "./App.css";
import loadUrl from "./Loader";
import { getBox } from "./Parser";

const FILE_URL = `http://demo.castlabs.com/tmp/text0.mp4`;

function App() {
  useEffect(() => {
    loadUrl(FILE_URL).then((arrayBuffer) => {
      const data = new Uint8Array(arrayBuffer);
      console.log(getBox(data));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
