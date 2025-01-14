// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import slider images
import sliderImg1 from "../../assets/image01.jpg"
import sliderImg2 from "../../assets/image02.jpg"
import sliderImg3 from "../../assets/image03.jpg"
import sliderImg4 from "../../assets/image04.jpg"
import sliderImg5 from "../../assets/image05.jpg"


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
                    <div className="hero place-items-stretch">
                        <div>
                            <img className='w-full h-[500px]' src={sliderImg1} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Experience Comfort and Luxury Like Never Before</h1>
                                <p className="mb-5">
                                    Welcome to Modern Hotel, your gateway to unforgettable stays. Whether you are traveling for leisure or business, our exquisite accommodations and top-notch services ensure a seamless and delightful experience. Book your stay today and let us redefine comfort for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-02 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[500px]">
                        <div>
                            <img className='w-full h-[500px]' src={sliderImg2} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Escape to a World of Luxury and Relaxation</h1>
                                <p className="mb-5">
                                    At Modern Hotel, we offer a perfect retreat where luxury meets tranquility. Whether for a weekend getaway or an extended stay, experience unmatched comfort and hospitality designed to rejuvenate your senses.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-03 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[500px]">
                        <div>
                            <img className='w-full h-[500px]' src={sliderImg3} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Where Every Stay Feels Like Home</h1>
                                <p className="mb-5">
                                    Step into Modern Hotel, where comfort meets elegance. Our thoughtfully designed rooms and personalized services make every guest feel at home, whether you are here for business or leisure.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-04 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[500px]">
                        <div>
                            <img className='w-full h-[500px]' src={sliderImg4} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Your Journey to Comfort Begins Here</h1>
                                <p className="mb-5">
                                    Modern Hotel is your ideal destination for a seamless and memorable stay. Discover a world of modern amenities, impeccable service, and an ambiance crafted for your utmost satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-05 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[500px]">
                        <div>
                            <img className='w-full h-[500px]' src={sliderImg5} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Indulge in the Art of Hospitality</h1>
                                <p className="mb-5">
                                    At Modern Hotel, we believe every guest deserves the best. From luxurious rooms to world-class dining, let us elevate your travel experience with unparalleled care and attention.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-06 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[500px]">
                        <div>
                            <img className='w-full h-[500px]' src={sliderImg1} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">Relax, Refresh, Rejuvenate</h1>
                                <p className="mb-5">
                                    Escape the ordinary at Modern Hotel. Unwind in our serene spaces, enjoy gourmet dining, and let us take care of every detail to make your stay extraordinary.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide 07 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[500px]">
                        <div>
                            <img className='w-full h-[500px]' src={sliderImg2} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl md:text-5xl font-bold">A Stay Beyond Expectations</h1>
                                <p className="mb-5">
                                    Welcome to Modern Hotel, where every detail is crafted to perfection. Enjoy a harmonious blend of luxury, convenience, and personalized service tailored to make your visit unforgettable.
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