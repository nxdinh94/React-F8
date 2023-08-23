
import { memo } from 'react'

function Content({ handle }){
    console.log('content-re-render');
    return (
        <>
            <h2>HELLO BÀ CON</h2>
            <button onClick={ handle }>Click me</button>
        </>
        
    )
}

export default memo(Content);