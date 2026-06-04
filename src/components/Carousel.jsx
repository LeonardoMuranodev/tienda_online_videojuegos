import { Carousel } from "flowbite-react"

function CarouselInicio() {
    return(
        <div className="h-64 sm:h-full sm:m-4">
            <Carousel theme={{item:{base:"relative"}}} className="rounded-none text-4xl cursor-default" indicators={false} leftControl={<p className="text-white hover:text-cyan-500 cursor-pointer">&lt;</p>} rightControl={<p className="text-white hover:text-cyan-500 cursor-pointer">&gt;</p>}>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src='src/data/images/BotW.jpg' className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src='src/data/images/TES.jpg' className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src='src/data/images/WD2.jpg' className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src='src/data/images/FW.png' className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src='src/data/images/Cyber2077.jpg' className="h-full object-cover"/>
                </div>
                <div className="flex h-full items-center justify-center-safe overflow-clip">
                    <img src='src/data/images/W40k.jpg' className="h-full object-cover"/>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselInicio
