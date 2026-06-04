import { Card, Button } from "flowbite-react";
import { Link } from "react-router";

export default function CardProducto({ producto }) {
  return (
    <Card
      className="sm:w-48 w-40 bg-blue-400 dark:bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-all duration-300"
      imgSrc={producto.imagenes.portada}
    >
      <h5 className="text-sm font-bold dark:text-gray-50 text-center leading-4 min-h-10">
        {producto.titulo}
      </h5>

      <div className="flex justify-center">
        <span className="text-lg font-bold text-green-600 dark:text-green-400">
          ${producto.precio}
        </span>
      </div>

      <Link to={`/producto/${producto.id}`}>
        <Button size="xs" gradientDuoTone="purpleToBlue" className="w-full bg-linear-to-br from-purple-700 to-blue-700">
          Comprar
        </Button>
      </Link>
    </Card>
  );
}
