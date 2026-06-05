import { Carousel } from "flowbite-react"

import { BotW, TES, WD2, FW, Cyber2077, W40k } from '../data/images'

function CarouselInicio() {
    return(
        <div className="h-64 sm:h-full sm:m-4">
            <Carousel theme={{item:{base:"relative"}}} className="rounded-none text-4xl cursor-default" indicators={false} leftControl={<p className="text-white hover:text-cyan-500 cursor-pointer">&lt;</p>} rightControl={<p className="text-white hover:text-cyan-500 cursor-pointer">&gt;</p>}>
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
