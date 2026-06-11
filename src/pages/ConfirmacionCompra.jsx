import { Link } from "react-router";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function ConfirmacionCompra() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      
      <div className="text-center max-w-2xl">
        
        <h1 className="text-6xl md:text-7xl font-extrabold text-green-500 mb-4">
          <FontAwesomeIcon icon={faCartShopping} /><FontAwesomeIcon className="text-4xl -ml-7" icon={faCheckDouble} />
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Compra confirmada
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10">
          Tu compra se realizó correctamente. Gracias por comprar en nuestra tienda.
        </p>

        <div className="flex justify-center">
          <Link to="/">
            <Button className="bg-linear-to-br from-purple-600 to-blue-700 dark:to-blue-500 text-white hover:bg-linear-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
              Volver al inicio
            </Button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default ConfirmacionCompra;