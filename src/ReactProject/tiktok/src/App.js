
import { useCallback, useState } from 'react';
import Content from './Content';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease =useCallback(() =>{
    setCount(prevCount => prevCount +1)
  }, []) 

  return (
    <div style={{padding: '10px 32px'}}>
      <Content handle = {handleIncrease}/>
      <h1>{count}</h1>
      
      
    </div>
  )
}

export default App;
