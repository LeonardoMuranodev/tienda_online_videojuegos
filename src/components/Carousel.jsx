import { Carousel } from "flowbite-react"

import { BotW, TES, WD2, FW, Cyber2077, W40k } from '../data/images'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"

function CarouselInicio() {
    const ControlesStyle = "text-gray-300 hover:text-gray-100"
    const CarouselStyle = {
  "root": {
    "base": "relative h-full w-full",
    "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  "indicators": {
    "active": {
      "off": "bg-gray-100/50 hover:bg-gray-100 dark:bg-gray-100/50 dark:hover:bg-gray-100",
      "on": "bg-gray-300 dark:bg-gray-100"
    },
    "base": "h-3 w-3 rounded-full",
    "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  "item": {
    "base": "relative left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    "wrapper": {
      "off": "w-full shrink-0 transform cursor-default snap-center",
      "on": "w-full shrink-0 transform cursor-grab snap-center"
    }
  },
  "control": {
    "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70",
    "icon": "h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800"
  },
  "scrollContainer": {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    "snap": "snap-x"
  }
}

    return(
        <div className="h-64 sm:h-full sm:my-4">
            <Carousel theme={CarouselStyle} pauseOnHover={true} className="text-4xl cursor-default" leftControl={<FontAwesomeIcon icon={faCaretLeft} className={ControlesStyle}/>} rightControl={<FontAwesomeIcon icon={faCaretRight} className={ControlesStyle}/>}>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src={BotW} className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src={TES} className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src={WD2} className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src={FW} className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src={Cyber2077} className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src={W40k} className="h-full object-cover"/>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselInicio
