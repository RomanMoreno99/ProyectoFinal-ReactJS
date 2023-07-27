import { useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className='text-center m-5'> El carrito está Vacío </h2>
                <Link to="/"> <h6 className='text-center m-5'>Ver Productos</h6> </Link>
            </>
        )
    }
    return (
        <div className="cardCarrito">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3> <strong>Total:</strong> u$d{total}</h3>
            <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <br />
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart