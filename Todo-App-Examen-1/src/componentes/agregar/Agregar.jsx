import { useState } from "react"
import "./Agregar.css"
import Lista from "../lista/Lista"

function Agregar(props){

    const [textoDeInput, SetTextoDeInput] = useState ("")
    const [listaTextoInputV2, SetListaTextoInputV2] = useState ([])
    
    const capturarValor = (e)=>{
        SetTextoDeInput(e.target.value)
    }
    
    // const ListaTextoInput = ["Comer", "Bañarse"];
    // Cada que cambie necesito agregar nuevo valor
    // Mantener el array y agregarle algo nuevo caminar debe estar dentro de array 
    // Usar el operador Spread "..."
    // La variable al inicio tiene Spread, agregar la nueva tarea
 

    

    const BtnAgregar = ()=>{
        SetListaTextoInputV2([...listaTextoInputV2, textoDeInput])
        console.log(listaTextoInputV2)
    }

    return(
        <>
            <h1>{props.titulo}</h1>
            <input onChange={capturarValor} value={textoDeInput} type="text" placeholder="Ingrese una nueva actividad..." />
            <p>{textoDeInput}</p>
            <button onClick={BtnAgregar} className="btn1">{props.btn1}</button>
            <Lista
            btn2 = "COSAS POR HACER"
            listaDePrueba={listaTextoInputV2}
            ListaNuevaSett = {SetListaTextoInputV2} />
        </>
    )
}

export default Agregar