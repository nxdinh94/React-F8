
import { useState } from "react";
import Content from './Content';

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App" style={{padding: 20}}>
      <button onClick={() => setState(!state)}>Toggle</button>
      {state && <Content />}
      
    </div>
  );
}

export default App;
