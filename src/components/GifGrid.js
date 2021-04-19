import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const {data, loading} = useFetchGifs( category );

  console.log(data)

  return (
    <div>
      <h1 className="idk">{category}</h1>


    {loading && <p className="card animate__animated animate__flash"> "Cargando..." </p> }

      <div className="card_grid">

        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
