import { Link } from "react-router";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Error404() {
  return (
    <div className="min-h-full grow flex items-center justify-center px-6">
      
      <div className="text-center max-w-2xl">
        <div className="text-purple-500">
          <FontAwesomeIcon className="text-2xl md:text-3xl" icon={faTriangleExclamation} />
          <h1 className="text-8xl md:text-9xl font-extrabold mb-4">
            404
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Página no encontrada
        </h2>

        <p className=" text-lg mb-10 text-zinc-600 dark:text-gray-400">
          La página que intentás visitar no existe o no está disponible en este momento.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          
          <Link to="/">
            <Button className="bg-linear-to-br from-purple-600 to-blue-700 dark:to-blue-500 text-white hover:bg-linear-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
              Ir al inicio
            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Error404;