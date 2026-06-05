import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faSquareFacebook, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    const fechaActual = new Date()
    return(
        <footer className='mt-auto bg-blue-900 dark:bg-gray-900 text-cyan-100 h-16'>
            <div className="flex h-full items-center justify-between p-4">
                <img src='src/data/logo-footer.svg' className="invert-100 h-8 fill-current dark:invert-0"/>
                <p> Copyright {fechaActual.getFullYear()} - GameGarage</p>
                <div className='text-2xl'> 
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faSquareFacebook} />
                    <FontAwesomeIcon icon={faTelegram} />
                    <FontAwesomeIcon icon={faWhatsapp} />
                </div>
            </div>
        </footer>
    )
}

export default Footer