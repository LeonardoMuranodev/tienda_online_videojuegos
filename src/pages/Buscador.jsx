import { createContext, useContext, useState } from "react";
import { TextInput } from "flowbite-react";
import Productos from "../data/productos.jsx";

const BusquedaContext = createContext(null);

export const generosDisponibles = [
  ...new Set(Productos.flatMap((p) => p.etiquetas)),
].sort();

export function coincideBusqueda(producto, texto) {
  if (!texto.trim()) return true;

  const termino = texto.trim().toLowerCase();
  const enTitulo = producto.titulo.toLowerCase().includes(termino);
  const enEtiquetas = producto.etiquetas.some((etiqueta) =>
    etiqueta.toLowerCase().includes(termino),
  );

  return enTitulo || enEtiquetas;
}

export function filtrarProductos(
  productos,
  { textoBusqueda, generoSeleccionado, ordenPrecio },
) {
  let resultado = productos.filter((producto) =>
    coincideBusqueda(producto, textoBusqueda),
  );

  if (generoSeleccionado) {
    resultado = resultado.filter((producto) =>
      producto.etiquetas.includes(generoSeleccionado),
    );
  }

  if (ordenPrecio === "menor") {
    resultado = [...resultado].sort((a, b) => a.precio - b.precio);
  } else if (ordenPrecio === "mayor") {
    resultado = [...resultado].sort((a, b) => b.precio - a.precio);
  }

  return resultado;
}

export function BusquedaProvider({ children }) {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [generoSeleccionado, setGeneroSeleccionado] = useState("");
  const [ordenPrecio, setOrdenPrecio] = useState("");

  return (
    <BusquedaContext.Provider
      value={{
        textoBusqueda,
        setTextoBusqueda,
        generoSeleccionado,
        setGeneroSeleccionado,
        ordenPrecio,
        setOrdenPrecio,
      }}
    >
      {children}
    </BusquedaContext.Provider>
  );
}

export function useBusqueda() {
  const context = useContext(BusquedaContext);
  if (!context) {
    throw new Error("useBusqueda debe usarse dentro de BusquedaProvider");
  }
  return context;
}

export default function Buscador({ className = "" }) {
  const { textoBusqueda, setTextoBusqueda } = useBusqueda();

  return (
    <TextInput
      id="busqueda"
      type="search"
      placeholder="Buscar"
      value={textoBusqueda}
      onChange={(e) => setTextoBusqueda(e.target.value)}
      className={className}
    />
  );
}
