import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Carousel.css"

export default function Carousel({ images }) {
  return (
    <section className='carousel-section' id='carousel-section'>
        <div className='carousel-container'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}        
                slidesPerView={4}        
                loop={true}               
                autoplay={{
                    delay: 1000,          
                    disableOnInteraction: false,
                }}
                speed={2500}            
                breakpoints={{
                    1024: { slidesPerView: 3 }, // Desktop
                    768: { slidesPerView: 2 },  // Tablet
                    0: { slidesPerView: 1 },    // Phone
                }}
                >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="carousel-img-container">
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className="w-full h-64 object-cover rounded-lg shadow-md carousel-img"
                            />
                        </div>                    
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
}
