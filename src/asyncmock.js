const misProductos = [
    {id: "1", nombre: "Dunk Panda", precio: 130, img: "../img/dunkP.jpg", idCat: "1", stock: 10},
    {id: "2", nombre: "Dunk Orange", precio: 130, img: "../img/dunkO.jpeg", idCat: "1", stock: 10},
    {id: "3", nombre: "Dunk High 70", precio: 160, img: "../img/dunkH.jpeg", idCat: "1", stock: 10},
    {id: "4", nombre: "Jordan 1", precio: 150, img: "../img/j1.jpeg", idCat: "2", stock: 7},
    {id: "5", nombre: "Jordan 3", precio: 165, img: "../img/j3.jpeg", idCat: "2", stock: 7},
    {id: "6", nombre: "Jordan 4", precio: 180, img: "../img/j4.jpeg", idCat: "2", stock: 7},
    {id: "7", nombre: "AF1 White", precio: 115, img: "../img/af1w.jpeg", idCat: "3", stock: 10},
    {id: "8", nombre: "AF1 Black", precio: 120, img: "../img/af1b.jpeg", idCat: "3", stock: 10},
    {id: "9", nombre: "AF1 nasi", precio: 250, img: "../img/af1s.jpeg", idCat: "3", stock: 10}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos)
        }, 100);
    })
}

//Función que nos retorna un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Función que retora una categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}
