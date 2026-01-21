// T --> Genereric type parameter

import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  // aquí guardaremos los datos obtenidos
  const [data, setData] = useState<T | null>(null);
  // mostrar o no un loop de carga
  const [loading, setLoading] = useState<boolean>(true);
  // por si tenemos errores
  const [error, setError] = useState<Error | null>(null);

  // efecto de que cuando carge el componente o renderize la primera vez haremos useEffect
  useEffect(() => {
    setLoading(true);
    setError(null);
    // creamos un mando a distancia para abortar la petición si el componente se desmonta
    const controller = new AbortController();
    // signal e suna señal que va por el cable del fetch
    const { signal } = controller;
    const fetchData = async () => {
      try {
        // hacemos la llamanda fetch con la señal
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Error al cargar los datos desde ${url}`);
        }
        setData(await response.json());
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    // ******* Ejecutamos la función fetchData ********
    fetchData();
    // el return se ejecuta cuando el componente se desmonta
    return () => {
        controller.abort();
    };
  }, [url]);
    return { data, loading, error };
}
