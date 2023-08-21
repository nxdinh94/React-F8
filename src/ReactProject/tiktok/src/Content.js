

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
4. DOM Event
5.

-----------------------

1. Callback always invoked after component mounted
2. Cleanup function always call before the component unmounted 
*/

 

function Content(){

    const [countdown,setCountdown] = useState(180);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(pre => pre - 1);
        }, 1000)
        return () => clearInterval(timerId);
    }, []);



    return(
        

        <div>
            {countdown}
        </div>
    )
}

export default Content;