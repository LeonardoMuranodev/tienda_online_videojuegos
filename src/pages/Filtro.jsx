import { Label, Select } from "flowbite-react";
import { generosDisponibles, useBusqueda } from "./Buscador.jsx";

export default function Filtro() {
  const {
    generoSeleccionado,
    setGeneroSeleccionado,
    ordenPrecio,
    setOrdenPrecio,
  } = useBusqueda();

  return (
    <section className="px-6 pt-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-xl border border-zinc-700 bg-zinc-900 p-4 sm:flex-row sm:items-end sm:justify-center">
        <div className="w-full sm:w-56">
          <Label htmlFor="filtro-genero" className="mb-2 text-white">
            Género
          </Label>
          <Select
            id="filtro-genero"
            value={generoSeleccionado}
            onChange={(e) => setGeneroSeleccionado(e.target.value)}
            className="bg-zinc-800 text-white"
          >
            <option value="">Todos los géneros</option>
            {generosDisponibles.map((genero) => (
              <option key={genero} value={genero}>
                {genero}
              </option>
            ))}
          </Select>
        </div>

        <div className="w-full sm:w-56">
          <Label htmlFor="filtro-precio" className="mb-2 text-white">
            Precio
          </Label>
          <Select
            id="filtro-precio"
            value={ordenPrecio}
            onChange={(e) => setOrdenPrecio(e.target.value)}
            className="bg-zinc-800 text-white"
          >
            <option value="">Sin ordenar</option>
            <option value="menor">Menor precio</option>
            <option value="mayor">Mayor precio</option>
          </Select>
        </div>
      </div>
    </section>
  );
}
