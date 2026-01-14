import React, { useState } from "react";

interface TarjetaProps {
  title: string;
  description: string;
  imageUrl?: string;
  favorite?: boolean;
}

const Tarjeta = ({
  title,
  description,
  imageUrl,
  favorite = false,
}: TarjetaProps) => {
  // onClick para cambiar el estado de favorite
  const [fav, setFav] = useState(favorite);

  return (
    <div
      onClick={() => {
        setFav(!fav);
      }}
      className={`rounded-lg shadow-md p-6  ${
        fav ? "bg-amber-200 border-2 border-amber-500" : "bg-gray-200"
      }`}
    >
      {/* // pinto la imagen si existe la imageUrl */}
      {imageUrl && (
        <img
          className="w-full h-48 object-cover rounded-md mb-4"
          src={imageUrl}
          alt={title}
        />
      )}
      <h3 className="text-xl font-bold mb-2">
        {title} {fav && <span>⭐</span>}
      </h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default Tarjeta;
