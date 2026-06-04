import CardProducto from "./Card";
import productos from "../data/productos.json";

export default function ContainerProductos() {

  var sel = Math.floor(Math.random() * (productos.length - 10))

  const productosDestacados = productos.slice(sel, sel + 5)

  return (
    <section className="bg-gray-800 dark:bg-zinc-950 py-14 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Juegos Destacados
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {productosDestacados.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}
