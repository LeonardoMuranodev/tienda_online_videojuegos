import { useLocation } from "react-router";

import CardProducto from "./Card";
import productos from "../data/productos.json";

export default function ContainerProductos() {
  const location = useLocation();

  var sel = Math.floor(Math.random() * (productos.length - 5))

  const productosDestacados = productos.slice(sel, sel + 5)

  const show = (location.pathname == '/catalogo') ? productos : productosDestacados;

  console
  return (
    <section className="py-14 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        {(location.pathname == '/catalogo')? "Catálogo" : "Juegos destacados"}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {show.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}
