import {Label, TextInput, Checkbox, Button, HelperText, Textarea, Select} from "flowbite-react"
import { Link } from "react-router";

function Contacto() {
    return (
        <section className="flex flex-col items-center p-8">
            <h3 className="text-4xl font-bold text-white text-center mb-12">
                Formulario de contacto
            </h3>
            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="name">Tu nombre</Label>
                    </div>
                    <TextInput id="name" type="text" placeholder="John Doe" addon="@" required shadow />
                    <HelperText>
                        Nunca compartiremos tus datos. Puedes leer nuestra
                        <Link to="/politica-de-privacidad" className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Politica de privacidad
                        </Link>
                        .
                    </HelperText>
                    <HelperText>
                        Nombre Invalido
                    </HelperText>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email">Tu email</Label>
                    </div>
                    <TextInput 
                    id="email" 
                    type="email" 
                    placeholder="johndoe@gmail.com" 
                    addon="📩" 
                    required 
                    shadow
                    color="success"
                    />
                    <HelperText>
                        Email Válido
                    </HelperText>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="videojuego">Videojuego (Si aplica)</Label>
                    </div>
                    <TextInput id="videojuego" type="text" placeholder="MDK 2" addon="🎮" shadow />
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="countries">Consola (si aplica)</Label>
                    </div>
                    <Select addon="📺" id="countries">
                        <option>Consola</option>
                        <option>PS 1</option>
                        <option>PS 2</option>
                        <option>XBOX 360</option>
                        <option>Nintendo DS</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="comment">Tu mensaje</Label>
                    </div>
                    <Textarea id="comment" placeholder="Deja un comentario..." required rows={4} />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                    Estoy de acuerdo con&nbsp;
                    <Link to="/terminos-y-condiciones" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        los terminos y condiciones
                    </Link>
                    </Label>
                </div>
                <Button type="submit">Enviar Mensaje</Button>
            </form>
    </section>
  );
}
export default Contacto