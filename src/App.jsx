import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  async function getPorras (){

    const ruta = "https://porrasapi-fb9h.onrender.com/api/porras"
    const porrasJson = await fetch(ruta)
    const porras = await porrasJson.json()
    setPorras(porras)

  }

  const [porras, setPorras] = useState([])
  useEffect(() =>{

    console.log("se ha renderizado la pagina")
    getPorras()

  }, [])

  return (
    <div>
      <h1>Porras:</h1>
      {porras.porras && porras.porras.map((porra) => {
        return (
          <div key={porra.id}>
            <h2>{porra.email}</h2>
            <p>{porra.porra}</p>
          </div>
        )
      })}
    </div>

  )
}

export default App
