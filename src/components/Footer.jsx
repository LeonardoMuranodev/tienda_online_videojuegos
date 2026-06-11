import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faSquareFacebook, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import LogoFooter from '../data/logo-footer.svg'

function Footer() {
    const fechaActual = new Date()
    return(
        <footer className='mt-auto w-full bg-blue-400 dark:bg-gray-700 text-gray-950 dark:text-cyan-100 h-32 md:h-16'>
            <div className="flex flex-col md:flex-row h-full items-center justify-around p-1 text-[0.6rem] sm:text-lg sm:p-4">
                <img src={LogoFooter} className="invert-100 h-8 fill-current dark:invert-0"/>
                <p className='mx-4 my-2 shrink-0 text-base'> Copyright {fechaActual.getFullYear()} - GameGarage</p>
                <div className=' flex flex-wrap align-middle justify-center-safe text-4xl'> 
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