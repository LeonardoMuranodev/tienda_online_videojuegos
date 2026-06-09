import { Link } from "react-router";
import { Button } from "flowbite-react";

function ConfirmacionCompra() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      
      <div className="text-center max-w-2xl">
        
        <h1 className="text-6xl md:text-7xl font-extrabold text-green-500 mb-4">
          ✔
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Compra confirmada
        </h2>

        <p className="text-zinc-400 text-lg mb-10">
          Tu compra se realizó correctamente. Gracias por comprar en nuestra tienda.
        </p>

        <div className="flex justify-center">
          <Link to="/">
            <Button gradientDuoTone="purpleToBlue">
              Volver al inicio
            </Button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default ConfirmacionCompra;