import { useParams } from "react-router";
import { Link } from "react-router";
import productos from "../data/productos.json";
import { Button } from "flowbite-react";

function DetalleProducto() {
  const { id } = useParams();

  const producto = productos.find((p) => p.id.toString() === id);

  if (!producto) {
    return <h1 className="text-white text-3xl">Producto no encontrado</h1>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      
      <div className="max-w-6xl mx-auto mb-6">
        <Link to="/catalogo">
          <Button color="gray">
            ← Volver al catálogo
          </Button>
        </Link>
      </div>

      <div className="bg-zinc-900 w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        <div className="md:w-1/2 p-6 flex justify-center items-center bg-zinc-800">
          <img
            src={producto.imagenes.portada}
            alt={producto.titulo}
            className="rounded-xl w-full max-w-md object-cover"
          />
        </div>

        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          
          <span className="text-zinc-400 text-sm mb-2">
            {producto.categoria}
          </span>

          <h1 className="text-4xl font-bold text-white mb-6">
            {producto.titulo}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {producto.etiquetas.map((tag, index) => (
              <span
                key={index}
                className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-5xl font-bold text-green-400 mb-6">
            ${producto.precio}
          </p>

          <p className="text-zinc-300 text-lg mb-6">
            Stock disponible: {producto.stock}
          </p>

          <div className="mb-8">
            <label className="block text-white mb-2">
              Cantidad
            </label>

            <input
              type="number"
              min="1"
              max={producto.stock}
              defaultValue="1"
              className="w-28 bg-zinc-800 border border-zinc-600 rounded-lg text-white p-2"
            />
          </div>

          <Button gradientDuoTone="purpleToBlue">
            Agregar al carrito
          </Button>

        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;