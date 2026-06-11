import { List, ListItem } from "flowbite-react";

export function PoliticaDePrivacidad() {
    return (
        <article className="docu-container w-full">
            <h4 className="text-4xl font-bold text-center mb-12">
                    Politica de Privacidad de Game Garage
            </h4>

            <div  className="docu-container-div">
                <p className="docu">En Game Garage, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política describe cómo recopilamos y utilizamos la información que nos proporcionas:</p>

                <List className="docu">
                    <ListItem><span  className="docu-item-span">Información recopilada:</span> Recopilamos datos básicos como tu nombre, dirección de correo electrónico y preferencias de juegos a través de nuestro formulario de contacto o durante el proceso de compra.</ListItem>

                    <ListItem><span className="docu-item-span">Uso de la información:</span> Utilizamos tu información exclusivamente para gestionar tus pedidos, responder a tus consultas de soporte y mejorar la experiencia de usuario en nuestra plataforma.</ListItem>

                    <ListItem><span className="docu-item-span">Seguridad:</span> Implementamos medidas técnicas para asegurar que tus datos no sean compartidos con terceros sin tu consentimiento explícito.</ListItem>

                    <ListItem><span className="docu-item-span">Cookies:</span> Utilizamos cookies para recordar los elementos guardados en tu carrito de compras durante tu sesión.</ListItem>
                </List>

                <p className="docu">Si tienes alguna duda, por favor contáctanos a través de nuestro formulario de contacto</p>
            </div>   
        </article>
    )
}