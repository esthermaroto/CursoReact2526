import React from "react";
import Header from "./components/Header";
import Saludo from "./components/Saludo";
import Tarjeta from "./components/Tarjeta";
import FormularioUsuario from "./components/ejercicios/Ejercicio4";
import Login from "./components/ejercicios/login";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container bg-sky-600 mx-auto p-4">
        {/* <Saludo nombre="Esther" edad={30} />
        <Saludo nombre="Juan" edad={25} />
        <Saludo nombre="María" edad={28} /> */}

        {/* <div className="mt-8 grid grid-col1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Tarjeta
            title="Tarjeta 1"
            description="Esta es la descripción de la tarjeta 1"
            imageUrl="https://plus.unsplash.com/premium_photo-1675695223318-3d555909a8c2?w=400"
            favorite={false}
          />
          <Tarjeta
            title="Tarjeta 2"
            description="Esta es la descripción de la tarjeta 2"
            imageUrl="https://images.unsplash.com/photo-1762656669479-496d6291ef64?w=400"
            favorite={false}
          />
          <Tarjeta
            title="Tarjeta 3"
            description="Esta es la descripción de la tarjeta 3"
            imageUrl="https://images.unsplash.com/photo-1764957078063-887a403c681c?w=400"
            favorite={true}
          />
          <Tarjeta
            title="Tarjeta 4"
            description="Esta es la descripción de la tarjeta 4"
            imageUrl="https://images.unsplash.com/photo-1763899910806-43a13994b44f?w=400"
            favorite={false}
          />
          <Tarjeta
            title="Tarjeta 5"
            description="Esta es la descripción de la tarjeta 5"
            imageUrl="https://images.unsplash.com/photo-1765614244329-22ca4157345a?w=400"
            favorite={true}
          />
          <Tarjeta
            title="Tarjeta 6"
            description="Esta es la descripción de la tarjeta 6"
            imageUrl="https://images.unsplash.com/photo-1767023207807-af93b8ea2c88?w=400"
            favorite={true}
          />
          <Tarjeta
            title="Tarjeta 7"
            description="Esta es la descripción de la tarjeta 7"
            imageUrl="https://plus.unsplash.com/premium_photo-1765465308206-6d92231b7b71?w=400"
            favorite={false}
          />
          <Tarjeta
            title="Tarjeta 8"
            description="Esta es la descripción de la tarjeta 8"
            imageUrl="https://images.unsplash.com/photo-1767798426108-215be29507cc?w=600"
            favorite={false}
          />
        </div> */}

        <Login />
      </main>
    </div>
  );
};

export default App;
