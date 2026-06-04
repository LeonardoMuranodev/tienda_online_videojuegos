import CardProducto from "./Card";
import productos from "../data/productos.json";

export default function ContainerProductos() {
  //const productosInicio = productos.slice(0, 6);

  return (
    <section className="bg-zinc-950 py-14 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Juegos Destacados
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {productos.map((producto) => (
          <CardProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}
