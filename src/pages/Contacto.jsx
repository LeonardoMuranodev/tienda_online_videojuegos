import {Label, TextInput, Checkbox, Button, HelperText, Textarea, Select, createTheme, ThemeProvider} from "flowbite-react"
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDisplay, faGamepad } from "@fortawesome/free-solid-svg-icons";

function Contacto() {

    const {register, handleSubmit, formState:{errors}} = useForm()

    const FormSubmit = () => {
        console.log("Formulario enviado")
    }

    return (
        <section className="flex flex-col items-center p-8 bg-blue-100">
            <h3 className="text-4xl font-bold text-zinc-950 dark:text-gray-50 text-center mb-12">
                Formulario de contacto
            </h3>
            <form onSubmit={handleSubmit(FormSubmit)} className="flex max-w-md flex-col gap-4" noValidate>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="name">Tu nombre</Label>
                    </div>
                    <TextInput 
                    {...register("name", {required: true, minLength: 3, pattern: /^[a-zA-Z0-9\s]+$/})}
                    id="name" 
                    type="text" 
                    placeholder="John Doe" 
                    addon="@"
                    shadow
                    color={errors.name ? "failure" :"success"}
                    />
                    <HelperText>
                        Nunca compartiremos tus datos. Puedes leer nuestra
                        <Link to="/politica-de-privacidad" className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Politica de privacidad.
                        </Link>
                    </HelperText>
                    <HelperText>
                        {errors.name?.type === 'required' && "Este campo es obligatorio"}
                        {errors.name?.type === 'minLength' && "El nombre debe tener 3 caracteres como minimo"}
                        {errors.name?.type === 'pattern' && "El nombre es incorrecto"}
                    </HelperText>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="email">Tu email</Label>
                    </div>
                    <TextInput
                    {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                    id="email" 
                    type="email" 
                    placeholder="johndoe@gmail.com" 
                    addon={<FontAwesomeIcon icon={ faEnvelope } />} 
                    shadow
                    color={errors.email ? "failure" :"success"}
                    />
                    <HelperText>
                        {errors.email?.type === 'required' && "Este campo es obligatorio"}
                        {errors.email?.type === 'pattern' && "El email es incorrecto"}
                    </HelperText>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label htmlFor="videojuego">Videojuego (Si aplica)</Label>
                    </div>
                    <TextInput 
                    {...register("videojuego", {pattern: /^[a-zA-Z0-9\s]+$/})}
                    id="videojuego" 
                    type="text" 
                    placeholder="MDK 2" 
                    addon={<FontAwesomeIcon icon={faGamepad} />} 
                    color={errors.videojuego ? "failure" :"success"}
                    shadow />
                    <HelperText>
                        {errors.videojuego?.type === 'pattern' && "El videojuego es incorrecto"}
                    </HelperText>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="plataform">Plataforma (si aplica)</Label>
                    </div>
                    <Select addon={<FontAwesomeIcon icon={ faDisplay } />} id="plataform">
                        <option>Consola</option>
                        <option>PC</option>
                        <option>PS 1</option>
                        <option>PS 2</option>
                        <option>XBOX 360</option>
                        <option>Nintendo DS</option>
                        <option>nintendo 64</option>
                        <option>Dreamcast</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="comment">Tu mensaje</Label>
                    </div>
                    <Textarea 
                    {...register("textarea", {required: true, pattern: /^[a-zA-Z0-9\s]+$/})}
                    id="comment"
                    placeholder="Deja un comentario..." 
                    rows={4}
                    color={errors.textarea ? "failure" :"success"}
                    />
                    <HelperText>
                        {errors.textarea?.type === 'required' && "Este campo es obligatorio"}
                        {errors.textarea?.type === 'pattern' && "El mensaje es incorrecto"}
                    </HelperText>
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