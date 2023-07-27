import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);

    const manejardorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2> {nombre}</h2>
            <h3> u$d {precio}</h3>
            <h3> ID:{id}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos saepe placeat quae mollitia rerum iusto eius nesciunt cum repellat incidunt id ullam, aspernatur, aut iure harum. Ratione quae laudantium quos?</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Finalizar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejardorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail