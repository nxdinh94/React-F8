import style from './Paragraph.module.css'


function Paragraph (){
    console.log('parastyle', style);
    return (
        <p className = {style.heading}>
            Waiting for updating signal from WDS...
        </p>
    )
}
export default Paragraph;