// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import slider images
import sliderImg1 from "../../assets/banner/image01.jpg"
import sliderImg2 from "../../assets/banner/image02.jpg"
import sliderImg3 from "../../assets/banner/image03.jpg"
import sliderImg4 from "../../assets/banner/image04.jpg"
import sliderImg5 from "../../assets/banner/image05.jpg"


const Banner = () => {
    return (
        <div>
            {/* Slider */}
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Swiper-Slide-01 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[600px] object-cover bg-contain' src={sliderImg1} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Your Dreams, Our Mission</h1>
                                <p className="mb-5">
                                    Education changes lives, and we want to be a part of your story. Apply for our scholarship and take the next step toward achieving your goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-02 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[600px] object-cover' src={sliderImg2} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Breaking Barriers, Building Futures</h1>
                                <p className="mb-5">
                                    We believe that every student deserves a chance to succeed. Our scholarship program is designed to eliminate obstacles and support your academic journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-03 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[600px] object-cover' src={sliderImg3} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Learn Today, Lead Tomorrow</h1>
                                <p className="mb-5">
                                    Shape the future you deserve with our education scholarship. We’re here to fuel your passion for learning and leadership.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-04 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[600px] object-cover' src={sliderImg4} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">A Brighter Future Starts Here</h1>
                                <p className="mb-5">
                                    Your potential is limitless, and so are the opportunities ahead. With our education scholarship, we’ll help you turn aspirations into achievements.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-05 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[600px] object-cover' src={sliderImg5} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Invest in Yourself, We’ll Invest in You</h1>
                                <p className="mb-5">
                                    Education is the foundation of success, and we’re here to make it accessible. Apply now for a scholarship that brings your dreams within reach.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-06 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[600px] object-cover' src={sliderImg1} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Empowering Tomorrow's Leaders</h1>
                                <p className="mb-5">
                                    Take the first step toward becoming a changemaker. Our scholarship is here to help you achieve your academic goals and make an impact on the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide 07 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[600px] object-cover' src={sliderImg2} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Your Future, Funded</h1>
                                <p className="mb-5">
                                    Dream big, aim high, and let us support your journey. Apply for our education scholarship and unlock the opportunity to pursue your passions without financial barriers.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;