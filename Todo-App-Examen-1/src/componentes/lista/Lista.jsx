import { useState } from "react"
import "./Lista.css"
function Lista(props){
    const ListaImportada = props.listaDePrueba
    const [cambioEstadoModal, SetCambioEstadoModal] = useState(false)
    const ProcesoModal = ()=>{
        SetCambioEstadoModal(!cambioEstadoModal)
        console.log("Recibe modal")// Esta funcion debe cambiar de true a false ! Si es true niega lo mismo con false 
    }
    
    return(
        <> 
            <button onClick={ProcesoModal} className="btn2">{props.btn2}</button>
            {cambioEstadoModal &&(
            <div>
                <ul>

                {ListaImportada.map((item, index) => (<li key={index}>{item}</li>))} 

                </ul>
            </div>)}
        </>
    )
}



export default Lista