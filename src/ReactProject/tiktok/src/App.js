
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
  const [checked, setChecked] = useState([]);
  const handleSubmit = () => {
    //Call API
    console.log({ids:checked});
  }
  const handleCheck = (id) =>{
    setChecked(prev =>{
      const isChecked = checked.includes(id);
      if(isChecked){
        return checked.filter(item =>item !==id)
      }else {
        return [...prev, id];
      }
      
    })
  }
  return (
    <div className="App" style={{padding: 20}}>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          /> 
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Change</button>
    </div>
  );
}

export default App;
