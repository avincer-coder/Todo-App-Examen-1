
import './App.css'
import Agregar from './componentes/agregar/Agregar'
import Lista from './componentes/lista/Lista'

function App() {

  return (
    <div className='contenedor_general'>
      <section className='contenido'>
        <Agregar 
          titulo = "Todo App"
          btn1 = "AGREGAR"/>
        {/* <Lista 
            btn2 = "COSAS POR HACER"/> */}
      </section>
    </div>
  )
}

export default App
