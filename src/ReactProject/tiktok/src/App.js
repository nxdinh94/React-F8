
import { useState } from "react";

const courses = [
  {
    id:1,
    name: 'HTML, CSS'
  },
  {
    id:2,
    name: 'Javascript'
  },
  {
    id:3,
    name: 'ReactJs'
  }
]

function App() {
  const [checked, setChecked] = useState(2);
  console.log(checked)
  const handleSubmit = () => {
    console.log({id:checked});
  }
  return (
    <div className="App" style={{padding: 20}}>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="radio"
            checked={checked===course.id}
            onChange={() => setChecked(course.id)}
          /> 
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
}

export default App;
