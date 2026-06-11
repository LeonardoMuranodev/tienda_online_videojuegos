import { useParams } from "react-router";
import { Link } from "react-router";
import Productos from "../data/productos.jsx";
import { Button } from "flowbite-react";
import { useContext, useState } from "react";
import { CarritoContexto } from "../context/CarritoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function DetalleProducto() {
  const { id } = useParams();

  // Contexto glbal del carrito
  const {agregarAlCarrito} = useContext(CarritoContexto)

  const [cantidad, setCantidad] = useState(1)

  const producto = Productos.find((p) => p.id.toString() === id);

  const handleInputChange = (e) => {
    const valor = e.target.value
    if (valor > 0 && valor <= producto.stock) {
      setCantidad(valor)
    }
  }

  if (!producto) {
    return (
    <div className="min-h-full p-8 flex flex-col">
      <h1 className="text-3xl text-center">Producto no encontrado</h1>
      <div className="max-w-6xl mx-auto mt-6">
        <Link to="/catalogo">
          <Button color="gray">
            <FontAwesomeIcon icon={faAngleLeft} /> Volver al catálogo
          </Button>
        </Link>
      </div>
    </div>
    )
  }

  return (
    <div className="min-h-full p-8">
      
      <div className="max-w-6xl mx-auto mb-6">
        <Link to="/catalogo">
          <Button color="gray">
             <FontAwesomeIcon icon={faAngleLeft} /> Volver al catálogo
          </Button>
        </Link>
      </div>

      <div className="bg-blue-400 dark:bg-zinc-900 w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        <div className="md:w-1/2 p-6 flex justify-center items-center bg-blue-500 dark:bg-zinc-700">
          <img
            src={producto.imagenes.portada}
            alt={producto.titulo}
            className="rounded-xl w-full max-w-md object-cover"
          />
        </div>

        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          
          <span className="text-gray-700 dark:text-zinc-400 text-sm mb-2">
            {producto.categoria}
          </span>

          <h1 className="text-4xl font-bold mb-6">
            {producto.titulo}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {producto.etiquetas.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600 dark:bg-zinc-700 text-gray-800 dark:text-zinc-300 px-3 py-1 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-5xl font-bold text-green-700 dark:text-green-400 mb-6">
            ${producto.precio}
          </p>

          <p className="text-gray-800 dark:text-zinc-300 text-lg mb-6">
            Stock disponible: {producto.stock}
          </p>

          <div className="mb-8">
            <label className="block mb-2">
              Cantidad
            </label>

            <input
              type="number"
              min="1"
              max={producto.stock}
              defaultValue="1"
              className="w-28 bg-blue-200 border-blue-800 dark:bg-zinc-800 border dark:border-zinc-600 rounded-lg p-2"
              onChange={handleInputChange}
            />
          </div>

          <Button className="bg-linear-to-br from-purple-600 to-blue-700 dark:to-blue-500 text-white hover:bg-linear-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => agregarAlCarrito(producto, cantidad)}>Agregar al carrito</Button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;