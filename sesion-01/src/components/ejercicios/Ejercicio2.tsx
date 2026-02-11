// como tipar un estado 

import React, { useState } from 'react'

interface Usuario {
    nombre: string,
    edad: number,
    email: string
}

interface Producto {
    id: number,
    nombre:string,
    precio:number
}

type Estado = "pendiente" | "aprobado" | "rechazado"

// modo dios...
// crear un type llamado CamposUsuario que tenga como posibles valores las claves de la interfaz Usuario
type CamposUsuario = keyof Usuario




const Ejercicio2 = () => {

    const [usuario, setUsuario] = useState<Usuario>({ nombre: "", edad: 0 })
    const [productos, setProductos] = useState<Producto | null >(null)
    //cuando lo vaya a renderizar podré gestionar si hay o no productos
    const [estado, setEstado] = useState<Estado>("pendiente")

    if(productos == null){
        return <p>Cargando los datos</p>
    }else {
        return <h1>{productos.nombre}</h1>
    }

    let campo : CamposUsuario = "nombre"
  return (
    <div>Ejercicio2</div>
  )
}

export default Ejercicio2