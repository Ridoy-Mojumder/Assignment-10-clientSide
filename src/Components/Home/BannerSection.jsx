import { useEffect, useState } from "react";


const BannerSection = () => {

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders  = [{ img: "https://i.ibb.co/wr1v3L2/beautiful-still-life-with-professional-art-materials-close-up-392895-443751.jpg", }, { img: "https://i.ibb.co/y5Fjvgx/beautiful-still-life-with-professional-art-materials-close-up-392895-322413.jpg", }, { img: "https://i.ibb.co/Vqvx8FP/school-set-with-backpack-palette-supplies-wooden-background-392895-298263.jpg", }, { img: "https://i.ibb.co/bK7Pqqg/paints-brushes-painting-200402-3222.jpg", },];
    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
      }, [currentSlider]);

    return (
        <>
            <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title}/>
                ))}
            </div>
        </>
    );
};

export default BannerSection;