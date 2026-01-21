import React, { useState } from "react";

type SearchProps = {
  onSearch: (query: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar por nombre o ingrediente..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default Search;
