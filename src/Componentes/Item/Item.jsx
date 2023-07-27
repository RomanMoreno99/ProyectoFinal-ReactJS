import './Item.css'
import { Link, NavLink } from 'react-router-dom'

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className="cardProducto">
        <img className='imgProducto' src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p> <strong>Precio:</strong> u$d{precio} </p>
        <p> ID: {id} </p>
        <p> Stock Disponible: {stock} </p>
        <Link className='btn' to={`/item/${id}`} > Ver Detalles </Link>
    </div>
  )
}

export default Item

