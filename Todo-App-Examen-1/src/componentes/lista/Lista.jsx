import { useState } from "react"
import "./Lista.css"
function Lista(props){
    const ListaImportada = props.listaDePrueba
    const [cambioEstadoModal, SetCambioEstadoModal] = useState(false)
    const ProcesoModal = ()=>{
        SetCambioEstadoModal(!cambioEstadoModal)
        console.log("Recibe modal")// Esta funcion debe cambiar de true a false ! Si es true niega lo mismo con false 
    }

    const Borrar = (index)=>{
        console.log(index)
        const ListaNueva = [...ListaImportada]
        ListaNueva.splice(index,1)
        props.ListaNuevaSett(ListaNueva)
        // Necesitamos un indice para no borrar lo que no es
    }
    
    return(
        <> 
            <button onClick={ProcesoModal} className="btn2">
                <p>{props.btn2}</p>
                <div className="Icon" style={{transform:"rotate(10deg)"}}>
                    <i className="bi bi-caret-down-fill" style={{ color: 'cornflowerblue'}} ></i>
                </div>
            </button>
            {cambioEstadoModal &&(
            <div>
                <ul>
                {ListaImportada.map((item, index) => 
                (
                <li key={index}>{item} 
                    <button onClick={()=>Borrar(index)}>Borrar</button>
                </li>))} 

                </ul>
            </div>)}
        </>
    )
}



export default Lista