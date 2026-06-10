import { useLocation } from "react-router";

import CardProducto from "./Card";
import productos from "../data/productos.json";
import Filtro from "../pages/Filtro.jsx";
import { filtrarProductos, useBusqueda } from "../pages/Buscador.jsx";

export default function ContainerProductos() {
  const location = useLocation();
  const esCatalogo = location.pathname === "/catalogo";
  const { textoBusqueda, generoSeleccionado, ordenPrecio } = useBusqueda();

  const productosEnStock = productos.filter(producto => producto.stock > 0)
  const sel = Math.floor(Math.random() * (productosEnStock.length - 5));
  const productosDestacados = productosEnStock.slice(sel, sel + 5);

  const show = esCatalogo
    ? filtrarProductos(productos, {
        textoBusqueda,
        generoSeleccionado,
        ordenPrecio,
      })
    : productosDestacados;

  return (
    <>
      {esCatalogo && <Filtro />}

      <section className="py-14 px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          {esCatalogo ? "Catálogo" : "Juegos destacados"}
        </h2>

        {esCatalogo && show.length === 0 && (
          <p className="text-center text-zinc-400 mb-8">
            No se encontraron productos con los filtros seleccionados.
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-8">
          {show.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </>
  );
}
