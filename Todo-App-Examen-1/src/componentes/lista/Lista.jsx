import { useState } from "react"
import "./Lista.css"
function Lista(props){
    const ListaImportada = props.listaDePrueba
    const [cambioEstadoModal, SetCambioEstadoModal] = useState(false)
    const [grados, SetGrados] = useState(90)

    const ProcesoModal = ()=>{
        SetCambioEstadoModal(!cambioEstadoModal)
        console.log("Recibe modal")// Esta funcion debe cambiar de true a false ! Si es true niega lo mismo con false 
        if (grados == 90) {
            SetGrados(0)
        }else{
            SetGrados(90)
        }
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
                <div className="Contenedor_btn2_icon">
                    {props.btn2}
                <div className="Icon" style=            {{transform:`rotate(${grados}deg)`}}>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                </div>
            </button>
            {cambioEstadoModal &&(
            <div className="lista">
                <ul className="ul_de_lista">
                {ListaImportada.map((item, index) => 
                (
                <li className="li_de_lista" key={index}>
                    <p>{item}</p>
                    <button className="btn_borrar" onClick={()=>Borrar(index)}>Quitar</button>
                </li>))} 

                </ul>
            </div>)}
        </>
    )
}



export default Lista