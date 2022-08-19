import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper';
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import apim from '../API/API'



function Swipers() {



    return (
        <div className=' swipers  '>
            <h3 className='header-medicine'>Ən yeni dərmanlarımız</h3>
            <Swiper
                modules={[FreeMode, Autoplay, Pagination, Navigation]}
                loop={true}
                autoplay={true}
                grabCursor={true}
                freeMode={true}
                className="mySwiper"
             
                spaceBetween={50}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    480: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    768: {
                        spaceBetween: 15,
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: 15,
                        slidesPerView: 4,
                    },
                   

                }}
            >

              

                {apim.map((item, index) => {
                    return (
                        <>
                            <SwiperSlide  key={item.id} index={index}>
                                <a href={item.link} >
                                    <img src={item.img}  alt='medicine' className="swiper-photo"/>
                                </a>
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </div>
        

    )
}
export default Swipers; 