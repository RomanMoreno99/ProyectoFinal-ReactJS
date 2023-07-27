import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"




const CartItem = ({item, cantidad, img, nombre}) => {
    const {eliminarProducto} = useContext(CarritoContext);
  return (
    <div>
        <h4> {item.nombre} </h4>
        <p> Cantidad: {cantidad} </p>
        <p> <strong>Precio:</strong> u$d{item.precio} </p>
        <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem