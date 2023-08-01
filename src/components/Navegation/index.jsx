import './styles.css'
import { Link } from "react-router-dom";


const Navegation = () => {
  return (
    <div className='navegation'>
        <Link to="/">
          <p>Inicio</p>
        </Link>
        <Link to="/about">
          <p>Mas de mi</p>
        </Link>
        <Link to="/Coments">
          <p>Comentarios</p>
        </Link>
        <Link to="/Contact">
          <p>Hablemos</p>
        </Link>
    </div>
  )
}

export default Navegation
