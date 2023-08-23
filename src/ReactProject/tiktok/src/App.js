
import { useState , useRef} from 'react';




function App() {
  const [count, setCount] = useState(60);

  const ref = useRef(100);
  let timerId = useRef();


  const handleStart = () =>{
    timerId.current = setInterval(()=>{
      setCount(prevCount =>prevCount-1
    )},1000)
    console.log('start: -> ', timerId.current);
  };
    const handleStop  =() =>{
      clearInterval(timerId.current);
      console.log('stop: -> ', timerId.current);

    }
  return (
    <div style={{padding:20}}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default App;
