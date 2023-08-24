
import { useRef, useReducer } from "react";

/*
  # useState
  1. Init state; 0
  2. Actions: Up (state +1) / Down (state -1)

  # useReducer
  1. Init state; 0
  2. Actions: Up (state +1) / Down (state -1)
  3. Reducer
  4. Dispatch
*/


//1. Init state
const initState = {
  job: '',
  jobs: []
}
//Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payLoad =>{
  return {
    type: SET_JOB,
    payLoad
  }
}
const addJob = payLoad =>{
  return {
    type: ADD_JOB,
    payLoad
  }
}
const deleteJob = payLoad =>{
  return {
    type: DELETE_JOB,
    payLoad
  }
}

//3. Reducer
const reducer = (state, action) => {
  console.log('Action: ' ,action)
  console.log('Prestate: ', state)
  let newState
  switch(action.type){
    case SET_JOB: 
        newState =  {
          ...state,
          job: action.payLoad
        }
        break;
    case ADD_JOB:
        newState = {
          ...state,
          // job: '',
          jobs : [...state.jobs, action.payLoad]
        }
        break;
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payLoad, 1);
      newState = {
        ...state,//baor luwu state cux
        jobs: newJobs
      }
      break
    default:
      throw new Error('Invalid Action');
  }
  console.log('new State: ', newState)
  return newState
}


function App() {

  const [state, dispatch] = useReducer(reducer, initState);

  const {job, jobs} = state

  const inputRef = useRef();

  const handleSubmit = () =>{
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
  }

  return (
    <div style={{padding: '10px 32px'}}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}>
              {job} 
              <span 
                onClick={()=>dispatch(deleteJob(index))}
                style={{color: 'red', cursor: 'pointer'}}
                >&times;
                
              </span> 
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
