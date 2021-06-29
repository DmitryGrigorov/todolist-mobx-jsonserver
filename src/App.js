import React, { useState } from "react";
import "./App.css";

import Counter from "./Counter";
import { counterStore } from "./store";

function App() {
  const [toggler, toggleCounter] = useState(true);

  return (
    <div className="App">
      <button onClick={() => toggleCounter(!toggler)}>Toggle Counter</button>
      {toggler && <Counter counterStore={counterStore} />}
    </div>
  );
}

export default App;
