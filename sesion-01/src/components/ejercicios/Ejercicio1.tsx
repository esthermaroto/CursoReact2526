/**
 * 1. Crear una interfaz llamada Producto que tenga id, nombre, precio, diponible y (opcional) categoría. 
 * 2. Una función llamada calcularTotal que reciba un array de tipo producto y retorne un número (que sea la suma de todos los precios de los productos disponibles)
 * 3. Crea un array de productos con almenos 3 productos diferentes 
 * 4. Prueba la función 
 */
import React from 'react'

const Ejercicio1 = () => {

    interface Producto {
        id: number;
        nombre: string;
        precio: number;
        disponible: boolean;
        categoria?: string;
    }

    const caculatTotal = (productos: Producto[]): number => {
        return productos
            .filter(producto => producto.disponible = true)
            .reduce((total, producto) => total + producto.precio, 0)
    }

    const productos: Producto[] = [
        { id: 1, nombre: "Producto 1", precio: 10, disponible: true },
        { id: 2, nombre: "Producto 2", precio: 20, disponible: false },
        { id: 3, nombre: "Producto 3", precio: 30, disponible: true },
        { id: 4, nombre: "Producto 4", precio: 40, disponible: true },
        { id: 5, nombre: "Producto 5", precio: 50, disponible: false },
    ]

    console.log(caculatTotal(productos))

    return (
        <div>
            <h1>Ejercicio 1</h1>
            <p>El total es: {caculatTotal(productos)}</p>
        </div>
    )
}

export default Ejercicio1