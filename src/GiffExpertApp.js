import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiffExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  // const handleAdd = () => {
  //       setCategories([...categories, "Digimon"])
  // }

  return (
    <div>
      <h2>GiffExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map(category => (
          <GifGrid
          key={category}
          category={category}/>
        ))}
      </ol>
    </div>
  );
};
