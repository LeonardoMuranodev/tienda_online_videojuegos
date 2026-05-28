import { useParams } from "react-router"


function DetalleProducto() {
    const params = useParams()
    return <p>Producto {params.id}</p>
}
export default DetalleProducto