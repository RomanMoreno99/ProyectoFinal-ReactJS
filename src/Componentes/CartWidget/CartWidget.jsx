import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div>
      <Link to="/cart">
      <img style={{ width: "3.5rem" }} src="./img/logo.png" alt="Carrito de Compras" />
      {
        cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
      }
      </Link>   
    </div>
  )
}

export default CartWidget