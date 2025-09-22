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
  linkedin?: string;
  website?: string;
}

interface SpeakerSliderProps {
  speakers: Speaker[];
}

const SpeakerSlider: React.FC<SpeakerSliderProps> = ({ speakers }) => {
    return (
        <div>
          <div className="hidden relative z-10 lg:flex space-x-8 top-[680px] sm:top-[690px] lg:top-[710px] xl:top-[730px] 2xl:top-[780px]">
            <button className="image-swiper-button-prev pr-1 focus:outline-none touch-manipulation absolute mr-20 w-16 h-16 text-[1.5rem] rounded-full bg-background border-2 border-white cursor-pointer transition-opacity duration-300 ease-in-out hover:border-accent hover:text-accent active:border-accent active:text-accent focus:border-white focus:text-white left-[30vw] sm:left-[36vw] md:left-[35vw] xl:left-[40vw] 2xl:left-[530px]">◀</button>
            <button className="image-swiper-button-next pl-1 focus:outline-none touch-manipulation absolute mr-20 w-16 h-16 text-[1.5rem] rounded-full bg-background border-2 border-white cursor-pointer transition-opacity duration-300 ease-in-out hover:border-accent hover:text-accent active:border-accent active:text-accent focus:border-white focus:text-white right-[30vw] sm:right-[36vw] md:right-[35vw] xl:right-[40vw] 2xl:right-[530px]">▶</button>
          </div>
          <div className="relative w-full flex justify-center overflow-hidden max-w-[95vw] sm:max-w-[75vw] md:max-w-[75vw] lg:max-w-[75vw] xl:max-w-[75vw] 2xl:max-w-[75vw] mx-auto">
            <div className="absolute left-0 top-0 h-full w-[50px] md:w-[50px] lg:w-[300px] bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 h-full w-[50px] md:w-[50px] lg:w-[300px] bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                speed={1000}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
                }}
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
                className="mySwiper pagination-below overflow-visible pr-[10vw] gap-8  sm:max-w-[640px] xl:max-w-[1280px] mx-auto px-6 mb-8 md:max-w-[768px] lg:max-w-[1024px] max-w-[345px] 2xl:max-w-[1536px]"
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
                        linkedin={speaker.linkedin}
                        website={speaker.website}
                    />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    );
};

export default SpeakerSlider;