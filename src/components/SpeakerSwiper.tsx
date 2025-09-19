import { Swiper, SwiperSlide } from "swiper/react";
import SpeakerCard from "./SpeakerCard2.tsx";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";

interface Speaker {
  name: string;
  title: string;
  image: string;
  company?: string;
}

interface SpeakerSliderProps {
  speakers: Speaker[];
}

const SpeakerSlider: React.FC<SpeakerSliderProps> = ({ speakers }) => {
    return (
        <div>
          <div className="relative z-10 flex space-x-8 top-[680px] sm:top-[730px]">
            <button className="image-swiper-button-prev pr-1 focus:outline-none touch-manipulation absolute mr-20 w-16 h-16 text-[1.5rem] rounded-full bg-background border-2 border-white cursor-pointer transition-opacity duration-300 ease-in-out hover:border-accent hover:text-accent active:border-accent active:text-accent focus:border-white focus:text-white left-[30vw]">◀</button>
            <button className="image-swiper-button-next pl-1 focus:outline-none touch-manipulation absolute w-16 h-16 text-[1.5rem] rounded-full bg-background border-2 border-white cursor-pointer transition-opacity duration-300 ease-in-out hover:border-accent hover:text-accent active:border-accent active:text-accent focus:border-white focus:text-white right-[30vw]">▶</button>
          </div>
          <div className="relative w-full flex justify-center overflow-hidden">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                speed={1000}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                rotate: 59,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
                }}
                autoHeight={true} 
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },     // mobile
                    640: { slidesPerView: 2 },     // mobile sideways
                    1024: { slidesPerView: 3 },   // desktop
                }}
                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                className="mySwiper pagination-below overflow-visible pr-[10vw] gap-8  sm:max-w-[880px] xl:max-w-[1280px] mx-auto px-6 mb-8 lg:max-w-[1000px] max-w-[375px] 2xl:max-w-[1500px]"
                style={{
                    "--swiper-pagination-color": "#ffffffff",
                    overflow: "visible",
                } as React.CSSProperties }
            >
              {speakers.map((speaker) => (
                <SwiperSlide key={speaker.name} className="flex h-full items-stretch">
                    <SpeakerCard
                        name={speaker.name}
                        title={speaker.title}
                        image={speaker.image}
                        company={speaker.company}
                    />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    );
};

export default SpeakerSlider;