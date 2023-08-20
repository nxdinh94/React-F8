
import { useState } from "react";
function App() {
  const [name, setName] = useState('33');
  return (
    <div className="App" style={{padding: 20}}>
      <input
      type="number"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={()=>setName('0')}>Change</button>
    </div>
  );
}

export default App;
