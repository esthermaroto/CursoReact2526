import Abuelo from "./Abuelo";
import { useFamily } from "../hooks/useFamily";

const Bisabuelo = () => {
  const { mensaje } = useFamily();
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-purple-500 rounded-lg p-4 bg-purple-50">
        <h1 className="text-xl font-bold">Bisabuelo</h1>
        <p>
          Aquí empieza el árbol genialógico de componentes utilizando Context
          <br />
          <strong>{mensaje}</strong>
        </p>
        <div className="mt-4 rounded-lg border-4 border-purple-200">
          <Abuelo />
        </div>
      </div>
    </div>
  );
};

export default Bisabuelo;
