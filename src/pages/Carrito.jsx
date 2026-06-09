import { useContext } from "react"
import { CarritoContexto } from "../context/CarritoContext"
import { CarritoItem } from "../components/CarritoItem"
import { Link } from "react-router";

function Carrito() {
    const {carrito, limpiarCarrito} = useContext(CarritoContexto)

    const precioTotal = carrito.map(c => c.cantidad * c.precio).reduce((acum, sum) => acum + sum, 0).toFixed(2)
    return (
        <section className="p-8">
            <h3 className="text-2xl text-white font-bold mb-6">Mi Carrito</h3>
            
            <ul className="flex flex-col gap-4 mb-6">
                {carrito.map(juego => (
                    <CarritoItem
                        key={juego.id}
                        juego={juego}
                    />
                ))}
            </ul>

            {carrito.length > 0 && (

                
                <div className="flex flex-col md:flex-row items-center justify-between bg-zinc-800 p-6 rounded-xl mt-8">
                    <p className="text-white text-2xl font-bold mb-4 md:mb-0">
                        Total: <span className="text-green-400">${precioTotal}</span>
                    </p>

                    <div className="flex gap-4">
                        <button 
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        onClick={() => limpiarCarrito()}
                        >
                        Limpiar Carrito
                        </button>
                        <Link to="/confirmacion-compra">
                            <button 
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                                onClick={() => limpiarCarrito()}
                            >
                                Comprar Elementos del Carrito
                            </button>
                        </Link>
                    </div>
                </div>
                
            )}
        </section>
    )
}
export default Carrito