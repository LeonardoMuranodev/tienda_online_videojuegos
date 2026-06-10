import { List, ListItem } from "flowbite-react";

export function TerminosYCondiciones() {
    return (
        <article className="docu-container">
            <h4 className="text-4xl font-bold text-center mb-12">
                    Términos y condiciones de Game Garage
            </h4>
            <p className="docu">Al utilizar el sitio web de Game Garage, aceptas cumplir con los siguientes términos:</p>
            
            <div  className="docu-container-div">
                <List className="docu">
                    <ListItem><span  className="docu-item-span">Uso del sitio:</span> El usuario se compromete a utilizar este sitio solo para fines legales y de compra de videojuegos, prohibiéndose cualquier actividad de piratería o uso indebido de los contenidos.</ListItem>

                    <ListItem><span className="docu-item-span">Compras y Pagos:</span> Todos los precios están expresados en la moneda local o internacional indicada y están sujetos a impuestos aplicables. Una vez confirmada la compra, recibirás un comprobante digital.</ListItem>

                    <ListItem><span className="docu-item-span">Stock y Disponibilidad:</span> Game Garage realiza esfuerzos para mantener actualizado el inventario, pero la disponibilidad de los productos puede variar.</ListItem>

                    <ListItem><span className="docu-item-span">Propiedad Intelectual:</span> Todos los logotipos, nombres de juegos y contenidos presentes en Game Garage son propiedad de sus respectivos dueños o de Game Garage, estando prohibida su reproducción sin permiso.</ListItem>

                    <ListItem><span className="docu-item-span">Modificaciones:</span> Nos reservamos el derecho de actualizar estos términos en cualquier momento. La navegación continua tras cambios implica la aceptación de los mismos.</ListItem>
                </List>
            </div>
        </article>
    )
}