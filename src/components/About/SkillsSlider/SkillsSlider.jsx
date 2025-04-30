import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "./slider.css";

import img1 from "@/assets/icons/image_1.svg";
import img2 from "@/assets/icons/image_2.svg";
import img3 from "@/assets/icons/image_3.svg";
import img4 from "@/assets/icons/image_4.svg";
import img5 from "@/assets/icons/image_5.svg";
import img6 from "@/assets/icons/image_6.svg";
import img7 from "@/assets/icons/image_7.svg";
import img8 from "@/assets/icons/image_8.svg";
import img9 from "@/assets/icons/image_9.svg";
import img10 from "@/assets/icons/image_10.svg";

const skillsIcons = [
  { src: img1, name: "Expo" },
  { src: img2, name: "Git" },
  { src: img3, name: "JavaScript" },
  { src: img4, name: "Material UI" },
  { src: img5, name: "Next.js" },
  { src: img6, name: "Node" },
  { src: img7, name: "React" },
  { src: img8, name: "Tailwind CSS" },
  { src: img9, name: "TypeScript" },
  { src: img10, name: "Figma" },
];

export default function Slider() {
  return (
    <section className="sliderContainer">
      <Swiper
        onSlideChange={() => console.log("slide change")}
        centeredSlides
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        onSwiper={(swiper) => {
          console.log(swiper);
          window.mySwiper = swiper;
        }}
        onTouchStart={() => {
          window.mySwiper?.autoplay.stop();
        }}
        onTouchEnd={() => {
          window.mySwiper?.autoplay.start();
        }}
        speed={600}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 9,
            spaceBetween: 20,
          },
        }}
      >
        {skillsIcons.map((slide, index) => (
          <SwiperSlide
            key={index + "slide"}
            data-tooltip-id={`tooltip-${index}`}
          >
            <div className="imgContainer">
              <img src={slide.src} alt={`Logo de ${slide.name}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {skillsIcons.map((item, index) => (
        <ReactTooltip
          key={`tooltip-${index}`}
          id={`tooltip-${index}`}
          place="top"
          content={item.name}
          openOnClick
        />
      ))}
    </section>
  );
}
