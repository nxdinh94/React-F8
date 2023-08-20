
import { useState } from "react";

let price  = [1, 2, 3]

function App() {
  
  const [counter, setCounter] = useState(
    price.reduce((total, currentValue) => {
      return total += currentValue;
    })
  );
  const handleIncrease = () =>{
    setCounter(counter + 1)
  }
  return (
    <div className="App" style={{padding: 20}}>
      <h1>{ counter }</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
