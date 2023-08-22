


import { useEffect, useState } from 'react'

const lessons = [
    {
        id: 1,
        name: 'What is ReactJs? Why we should learn ReactJs'
    },
    {
        id: 2,
        name: 'What is SPA/MPA'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function Content(){
    
    const [lessonId, setLessionId] = useState(1);

    useEffect(()=>{
        const handleComment = ({detail}) =>{
            console.log(detail)
        }
        
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () =>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])

    return(
        <div>
            <ul>
                {lessons.map(lesson=>(
                    <li
                        key={lesson.id}
                        style={{
                            color:lessonId === lesson.id?
                            'red':'#333'
                        }}
                        onClick={() => setLessionId(lesson.id)}
                    >{lesson.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;