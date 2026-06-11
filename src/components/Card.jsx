import { Card, Button } from "flowbite-react";
import { Link } from "react-router";

export default function CardProducto({ producto }) {
  const enStock = producto.stock > 0
  return (
    <Card
      className={"flex flex-col sm:w-48 w-32   rounded-xl overflow-hidden shadow-md".concat(" ", enStock? "bg-blue-400 border-blue-600 dark:bg-zinc-900 border dark:border-zinc-700 hover:scale-105 transition-all duration-300" : " border-none cursor-not-allowed bg-gray-600 dark:bg-zinc-900")}
      //imgSrc={producto.imagenes.portada}
      renderImage={() => <img src={producto.imagenes.portada} alt={"Portada de".concat(" ", producto.titulo)} className={enStock? "" : "grayscale contrast-50 brightness-50"} />}
    >
      <h5 className={"text-sm font-bold text-center m-auto min-h-fit".concat(" ", enStock? " text-zinc-950 dark:text-gray-50" : "text-gray-800 dark:text-zinc-600" )}>
        {producto.titulo}
      </h5>

      <div className="flex justify-center">
        <span className={"text-lg font-bold".concat( " ", enStock? " text-green-600 dark:text-green-400" : " text-gray-600 dark:text-gray-400 line-through decoration-2")}>
          ${producto.precio}
        </span>
      </div>

      {enStock ? (
        <Link to={`/producto/${producto.id}`}>
          <Button size="xs" className="w-full bg-linear-to-br from-purple-600 to-blue-700 dark:to-blue-500 text-white hover:bg-linear-to-bl focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Comprar
          </Button>
        </Link>
      ) : (
        <Button size="xs" disabled color="gray" className="w-full"
        >
          Sin stock
        </Button>
      )}
    </Card>
  );
}