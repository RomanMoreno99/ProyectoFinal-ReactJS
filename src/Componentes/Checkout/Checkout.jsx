import { useState, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../Services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import { Link } from "react-router-dom"

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailconf, setEmailConf] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailconf) {
            setError("¡Por Favor! Complete todos los campos");
            return;
        }

        if (email !== emailconf) {
            setError("Los Campos del email no Coinciden!");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "inventario", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )

            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch(error => {
                        console.log("No se pudo completar la orden", error)
                        setError("Se produjo un error, vuelva a crear la Orden")
                    })
            })
            .catch((error => {
                console.log("No se puede actualizar el Stock", error)
                setError("No se puede actualizar el stock, intente nuevamente!")
            }))
    }

    return (

        <div>
            <h2 className="text-center"> Checkout </h2>
            <form onSubmit={manejadorFormulario} className="text-center">
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> <strong> Zapas: </strong> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> <strong> Precio: </strong>u$d{producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }
                
                <div className="mb-3">
                    <label htmlFor="" className="col-sm-0 col-form-label"> Nombre </label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="col-sm-0 col-form-label"> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="col-sm-0 col-form-label"> Telefono </label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="mb-3" >
                    <label htmlFor="" className="col-sm-0 col-form-label"> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="col-sm-0 col-form-label"> Confirmar Email </label>
                    <input type="email" value={emailconf} onChange={(e) => setEmailConf(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit" className="btn btn-outline-primary"> Finalizar Compra </button>
                <Link to="/"><button className="btn btn-outline-secondary"> Volver al Inicio </button></Link>

            </form>
            {
                ordenId && (
                    <strong className="text-center"> Gracias por tu Compra! Tu numero de orden es {ordenId} </strong>
                )
            }
        </div>
    )
}

export default Checkout