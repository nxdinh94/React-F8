

import { tab } from '@testing-library/user-event/dist/tab';
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
    - Invoke callback func once time after component mounted
3. useEffect(callback, [dependences])
    - Invoke callback after dependeces modified

-----------------------

1. Callback always invoked after component mounted
2. Cleanup function always call before the component unmounted 
*/

const tabs = ['posts','photos', 'albums'];

function Content(){
    const [DataUsers, setDataUsers] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    // console.log(type);
    useEffect(()=>{
        // console.log('Title changed');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            // target only the BODY part of the response and to convert it from JSON to javascript
            .then(res => res.json())
            .then(data => setDataUsers(data))
            
    }, [type])
    
    useEffect(() => {

        const handleScroll = () =>setShowGoToTop(window.scrollY>=200)
        window.addEventListener('scroll', handleScroll)

        //Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    },[])



    return(
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor : '#333',
                    } :{}}
                    onClick={() => {setType(tab)}}
                >{tab}</button>
                
            ))}
            <br/>
            <ul>
                {DataUsers.map(DataUser => (<li key={DataUser.id}>{DataUser.title}</li>))}
            </ul>
            {
                showGoToTop && 
                    (<button style = {{
                            position: 'fixed',
                            right:20,
                            bottom:20
                        }}>Go to top
                        
                    </button>
                    )
                
            }
        </div>
    )
}

export default Content;