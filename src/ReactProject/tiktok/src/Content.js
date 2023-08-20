

import { useEffect, useState } from 'react'

/*

I. Update DOM
II. Call API
III. Listen DOM Events
    - Scroll
    - Resize
IV. Clean up
    - Remove lister/ Unsubcribe 
    - Clear timer


1. useEffect(callback)
 - Invoked callback whenever component re-render
 - Invoked callback after component add element to DOM
2. useEffect(callback, [])
2. useEffect(callback, [dependences])

-----------------------

1. Callback always invoked after component mounted
*/
function Content(){
    const [DataUsers, setDataUsers] = useState([]);
    const [Posts, setPosts] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            //target only the BODY part of the response and to convert it from JSON to javascript
            .then(res => res.json())
            .then(data => setDataUsers(data))
            
    })

    return(
        <div>
            <input
                value={Posts}
                onChange={e => setPosts(e.target.value)}
            />
            <ul>
                {DataUsers.map(DataUser => (<li key={DataUser.id}>{DataUser.title}</li>))}
            </ul>
        </div>
    )
}

export default Content;