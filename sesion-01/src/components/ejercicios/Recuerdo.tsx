import React from 'react';
import createPlugin from 'tailwindcss/plugin';
let nombreTS: string = "Juan";
let edadTS: number = 25;
let isAdminTS: boolean = true;
let nuloTS: null = null;
let indefinidoTS: undefined = undefined;

const lenguajes: string[] = ["TypeScript", "JavaScript", "React"];
const numeros: number[] = [1, 2, 3, 4, 5];

//array de objetos
const usuarios: { nombre: string, edad: number, isAdmin: boolean }[] = [
    { nombre: "Juan", edad: 25, isAdmin: true },
    { nombre: "Maria", edad: 30, isAdmin: false },
    { nombre: "Pedro", edad: 40, isAdmin: true },
]

//objeto simple tipado

const persona: { nombre: string, edad: number, isAdmin: boolean } = {
    nombre: "Juan",
    edad: 25,
    isAdmin: true
}
// si accedo a persona.apellido me da error property apellido does not exist on type {nombre:string, edad:number, isAdmin:boolean}

// ********** INTERFACES **********
// las interfaces son un "contrato" que va a definir la forma que tiene un objeto
interface Usuario {
    id: number,
    nombre: string,
    email: string,
    edad?: number,   // edad ahora es opcinal 
    activo: boolean
}

const usuaruio1: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "juan@juan.com",
    edad: 25,
    activo: true
}

const usuario2: Usuario = {
    id: 2,
    nombre: "Maria",
    email: "maria@maria.com",
    activo: false
}

function sumar(a: number, b: number): number {
    return a + b;
}

function saludar(nombre: string): string {
    console.log("hola " + nombre);
}


// funciones con parámetros opcionales
function crearUsuario(nombre: string, edad?: number): Usuario {
    return {
        id: Date.now(),
        nombre,
        email: `${nombre.toLowerCase()}@gmail.com`,
        edad,
        activo: true
    }
}

// union types (posibles valores que puede tomar una variable)
let id: string | number;

type Tamano = "small" | "medium" | "large";

let talla: Tamano = "medium";

type ID = string | number;

let id: ID = 1;
type Estado = "pendiente" | "completado" | "cancelado";

interface Persona {
    nombre: string,
    edad: number,
}

// extender una interfaz

interface Empleado extends Persona {
    puesto: string,
    salario: number
}

const empleado1: Empleado = {
    nombre: "Juan",
    edad: 25,
    puesto: "Desarrollador",
    salario: 1000
}

const Recuerdo = () => {
    return (
        <div>
            <h1>Recuerdo</h1>
        </div>
    );
};

export default Recuerdo;