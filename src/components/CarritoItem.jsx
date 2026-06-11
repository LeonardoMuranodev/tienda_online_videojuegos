import { useContext } from "react"
import { CarritoContexto } from "../context/CarritoContext"
import { Button } from "flowbite-react";

export const CarritoItem = ({juego}) => {

    const {agregarAlCarrito, sacarUnoDelCarrito, eliminarDelCarrito} = useContext(CarritoContexto)

    return (
        <>
            <li className="flex flex-col sm:flex-row items-center justify-between p-4 bg-blue-400 dark:bg-zinc-800 rounded-xl shadow-md">
                
                <div className="w-24">
                    <img src={juego.imagenes.portada} alt={juego.titulo} className="rounded-md w-full object-cover" />
                </div>

                <div className="flex-1 px-4">
                    <h3 className="text-xl font-bold">{juego.titulo}</h3>
                    <p className="text-sm">Categoría: {juego.categoria}</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Button onClick={() => sacarUnoDelCarrito(juego)} size="xs" className="bg-linear-to-br from-purple-600 to-blue-700 dark:to-blue-500 text-white hover:bg-linear-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                            -
                        </Button>
                        
                        <span className="w-8 text-center font-bold">{juego.cantidad}</span>
                        
                        <Button onClick={() => agregarAlCarrito(juego, 1)} size="xs" className="bg-linear-to-br from-purple-600 to-blue-700 dark:to-blue-500 text-white hover:bg-linear-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                            +
                        </Button>
                    </div>

                    <div className="text-center w-32 flex items-center sm:flex-col">
                        <p className="text-green-800 dark:text-green-400 font-bold mb-2">
                            Subtotal: ${(juego.precio * juego.cantidad).toFixed(2)}
                        </p>
                        
                        <Button onClick={() => eliminarDelCarrito(juego)} size="xs" color="failure" className="w-full">
                            Eliminar
                        </Button>
                    </div>
                </div>
            </li>
        </>
    )
}