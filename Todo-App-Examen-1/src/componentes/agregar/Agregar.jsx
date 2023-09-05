import { useState } from "react"
import "./Agregar.css"

function Agregar(props){

    const [textoDeInput, SetTextoDeInput] = useState ("")

    const capturarValor = (e)=>{
        SetTextoDeInput(e.target.value)
    }
    
    


    return(
        <>
            <h1>{props.titulo}</h1>
            <input onChange={capturarValor} value={textoDeInput} type="text" placeholder="Ingrese una nueva actividad..." />
            <p>{textoDeInput}</p>
            <button className="btn1">{props.btn1}</button>
        </>
    )
}

export default Agregar