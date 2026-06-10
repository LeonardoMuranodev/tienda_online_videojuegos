import { useEffect, useState } from "react"
import { CarritoContexto } from "./CarritoContext"

export const CarritoProvider  = ({children}) => {

    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log("Carrito", carrito)
    }, [carrito]);

    const agregarAlCarrito = (juego, cantidad = 1) => {

        const indiceProducto = carrito.findIndex(j => j.id === juego.id)

        const cantidadNumero = Number(cantidad)

        if (indiceProducto >= 0) {

            const nuevoCarrito = structuredClone(carrito)

            const nuevaCantidad =
                nuevoCarrito[indiceProducto].cantidad + cantidadNumero

            if (nuevaCantidad > juego.stock) {
                return
            }

            if (nuevaCantidad <= 0) {
                return
            }

            nuevoCarrito[indiceProducto].cantidad = nuevaCantidad

            setCarrito(nuevoCarrito)

            return
        }

        if (cantidadNumero > juego.stock) {
            return
        }

        if (cantidadNumero <= 0) {
            return
        }

        setCarrito(carritoPrevio => ([
            ...carritoPrevio,
            {
                ...juego,
                cantidad: cantidadNumero
            }
        ]))
    }

    const sacarUnoDelCarrito = (juego) => {

        const indiceProducto = carrito.findIndex(j => j.id === juego.id)

        if (indiceProducto >= 0) {

            const nuevoCarrito = structuredClone(carrito)

            if (nuevoCarrito[indiceProducto].cantidad <= 1) {
                return
            }

            nuevoCarrito[indiceProducto].cantidad -= 1

            setCarrito(nuevoCarrito)

            return
        }
    }

    const eliminarDelCarrito = (juego) => {
        const carritoSinJuego = carrito.filter(j => j.id !== juego.id)
        setCarrito(carritoSinJuego)
    }

    const limpiarCarrito = () => setCarrito([])

    return (
        <CarritoContexto.Provider value={{
            carrito,
            agregarAlCarrito,
            sacarUnoDelCarrito,
            eliminarDelCarrito,
            limpiarCarrito
        }}>
            {children}
        </CarritoContexto.Provider>
    )
}