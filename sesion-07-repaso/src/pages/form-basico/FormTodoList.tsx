// simular guardar en una base de datos

import type { FormState, TodoData } from "../../types";

const guardarEnBaseDeDatos = async (todo: TodoData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  localStorage.setItem("todo", JSON.stringify(todo));
};

// funcion que ejecuta react al enviar el formulario

const guardarAction = async (
  _prevState: FormState,
  formData: FormData, // formData es el OBJETO q contiene los datos del formulario
): Promise<FormState> => {
  // extraer los datos del formulario
  const nombreTodo = formData.get("nombre") as string;
  const fechaTodo = formData.get("fecha") as string;
  if (!nombreTodo || !fechaTodo) {
    return {
      error: "Todos los campos son obligatorios",
      success: null,
    };
  }
  try {
    await guardarEnBaseDeDatos({
      nombre: nombreTodo,
      fecha: fechaTodo,
    });
    return {
      error: null,
      success: " Todo guardado correctamente",
    };
  } catch (error) {
    return {
      error: `Error al guardar el to-do: ${error}`,
      success: null,
    };
  }
};

import React, { useActionState } from "react";

const FormTodoList = () => {
  const [state, formAction, isPending] = useActionState(guardarAction, {
    error: null,
    success: null,
  });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ">
        Formulario Basico - To-do list
      </h1>
      <form action={formAction} className="flex flex-col gap-4 max-w-md">
        <div className="flex flex-col">
          <label htmlFor="nombreTodo" className="mb-1 font-semibold">
            Nombre del Todo
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="fechaTodo" className="mb-1 font-semibold">
            Fecha del Todo
          </label>
          <input
            type="date"
            name="fechaTodo"
            id="dechaTodo"
            className="border border-gray-300 rounded px-3 py-2"
            disabled={isPending}
          />
        </div>
      </form>
    </div>
  );
};

export default FormTodoList;
