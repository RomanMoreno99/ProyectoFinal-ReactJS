import { useState } from "react"


const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }
    
    const decrementar = () => {
        if(contador > inicial){
             setContador(contador - 1);
        }
    }
    

  return (
    <>
        <div>
        <button onClick={decrementar} > - </button>
        <p className='text-center mb-1'> {contador} </p>
        <button onClick={incrementar}> + </button>
        </div>
        <button onClick={() => funcionAgregar(contador)}> Agregar Al Carrito </button>
    </>
  )
}

export default ItemCount

