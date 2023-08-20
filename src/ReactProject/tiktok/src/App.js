
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
  //Get value from localStorage
  const storageJobs = localStorage.getItem('jobs');

  const [job, setJob] = useState(''); 
  const [jobs, setJobs] = useState(() =>JSON.parse( storageJobs) ?? []); 
  const handleSubmit = () =>{
    setJobs(prev =>{
      const newjobs = [...prev, job]

      //Save to localStorage
      const jsonJobs = JSON.stringify(newjobs);
      localStorage.setItem('jobs', jsonJobs);

      return newjobs;
    })
    setJob('');
  }
 
  return (
    <div className="App" style={{padding: 20}}>
      <input
        type="text"
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
