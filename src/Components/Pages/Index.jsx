import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules';

import btnArrow from '././../../assets/btn-arrow.svg'
import plane from '././../../assets/plane.svg'


// Data
import Destination from './../../Destination.json';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import about1 from './../../assets/about-image-1.webp'
import about2 from './../../assets/about-image-2.webp'
import checkImg from './../../assets/about-check.svg'
import tst1 from './../../assets/tst-1.webp'
import tst2 from './../../assets/tst-2.webp'
import tst3 from './../../assets/tst-3.webp'
import tst4 from './../../assets/tst-4.webp'
import abEleement1 from './../../assets/about-element-1.webp'
import abEleement2 from './../../assets/about-element-2.webp'
import abEleement3 from './../../assets/about-element-3.webp'
import DiscoverImg1 from './../../assets/Discover-image-1.webp'
import DiscoverImg2 from './../../assets/Discover-image-2.webp'
import DiscoverImg3 from './../../assets/Discover-image-3.webp'
import DiscoverImg4 from './../../assets/Discover-image-4.webp'
import steps1 from './../../assets/steps-1.svg'
import steps2 from './../../assets/steps-2.svg'
import steps3 from './../../assets/steps-3.svg'
import FeatureImg1 from './../../assets/Feature-image-1.webp'
import FeatureImg2 from './../../assets/Feature-image-2.webp'
import offerBG1 from './../../assets/offer-bg-1.webp'
import offerBG2 from './../../assets/offer-bg-2.webp'
import tstimg1 from './../../assets/tst-image-1.webp'
import tstimg2 from './../../assets/tst-3.webp'
import quote from './../../assets/quote-left.png'
import testBG from './../../assets/test-bg.webp'
import blog1 from './../../assets/blog-1.webp'
import blog2 from './../../assets/blog-2.webp'
import blog3 from './../../assets/blog-3.webp'

import footer from './../../assets/footer.webp'

import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import Footer from '../../Components/Footer/Footer';

function Index() {

    return (
        <>
            {/* Hero Slider */}
            <Swiper
                modules={[Navigation, EffectFade]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                effect={"fade"}
                navigation={{
                    prevEl: '.swiper-prev',
                    nextEl: '.swiper-next',
                }}
                className='overflow-hidden'
            >
                <SwiperSlide>
                    <div className="hero hero1 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className='text-white'>Maceranın Doruğuna...</h2>
                            <h1 className='text-white'>MC Raft</h1>
                            <button className="btn text-white hero-btn mt-5">DAHA FAZLASI İÇİN<img src={btnArrow} className='img-fluid' alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero hero2 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className='text-white'>Maceranın Doruğuna...</h2>
                            <h1 className='text-white'>MC Raft</h1>
                            <button className="btn text-white hero-btn mt-5">DAHA FAZLASI İÇİN<img src={btnArrow} className='img-fluid' alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero hero3 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
                            <h2 className='text-white'>Maceranın Doruğuna...</h2>
                            <h1 className='text-white'>MC Raft</h1>
                            <button className="btn text-white hero-btn mt-5">DAHA FAZLASI İÇİN<img src={btnArrow} className='img-fluid' alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <i className="bi bi-arrow-left-short swiper-btn swiper-prev"></i>
                <i className="bi bi-arrow-right-short swiper-btn swiper-next"></i>
            </Swiper>
            {/* Destinations */}
            <div className="destinations py-5 my-5">
                <motion.div className="section-title"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">
                        <span className=" d-flex align-items-center gap-2">
                            <img src={plane} alt="" className="img-fluid" />
                            <span>Travel Destinantion</span>
                            <img src={plane} alt="" className="img-fluid" />
                        </span>
                        <h2>Top Destinations</h2>
                        <p>Explore our top destinations voted by more than 100,000+
                            customers around the world.</p>
                    </div>
                </motion.div>
                <motion.div className="destinations-wrapper mt-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Splide
                        hasTrack={false}
                        options={{
                            type: 'loop',
                            drag: 'free',
                            focus: 'center',
                            gap: 50,
                            perPage: 3,
                            arrows: false,
                            pagination: false,
                            autoScroll: {
                                speed: 1,
                                autoStart: true,
                            },
                            breakpoints: {
                                1199: { perPage: 3 },
                                991: { perPage: 2 },
                                767: { perPage: 2 },
                                575: { perPage: 1 },
                                0: { perPage: 1 },
                            },
                        }}

                        extensions={{ AutoScroll }}
                    >
                        <SplideTrack>
                            {Destination.map(dest => (
                                <SplideSlide key={dest.id}>
                                    <div className="dest-card position-relative">
                                        <div className="dest-img overflow-hidden rounded">
                                            <img src={dest.image} className='img-fluid' alt={dest.name} />
                                            <span className="dest-price position-absolute top-0 end-0">{dest.price}</span>
                                        </div>
                                        <div className="dest-content p-4 rounded border top-0 start-0 mt-3 position-absolute">
                                            <i className="fa-solid fa-arrow-right dest-arrow position-absolute"></i>
                                            <h2>{dest.name}</h2>
                                            <p>{dest.pere}</p>
                                            <div className="dest-day border-top pt-3">
                                                <i className="bi bi-send-fill me-2"></i>
                                                <span>{dest.days}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                </motion.div>
            </div>
            {/* Discover */}
            <div className="discover py-5">
                <motion.div className="section-title discover-title"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">
                        <span className=" d-flex align-items-center gap-2">
                            <img src={plane} alt="" className="img-fluid" />
                            <span>Travel Destinantion</span>
                            <img src={plane} alt="" className="img-fluid" />
                        </span>
                        <h2>Discover the Touch of Nature</h2>
                        <p>Our clients rave about our exceptional the seamless experiences
                            that exceeded their expectations.</p>
                    </div>
                </motion.div>
                <div className="row px-5 my-5 mx-0 gap-3 align-items-center justify-content-center">
                    <motion.div className="col-lg-2 discover-card position-relative"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <img src={DiscoverImg1} className='img-fluid' alt="" />
                        <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
                            <span><i className="bi bi-geo-alt-fill"></i> Maldives</span>
                            <h2 className='mt-4'>Beautiful tropical beach sea with umbrella chair around swimming pool</h2>
                        </div>
                    </motion.div>
                    <motion.div className="col-lg-2 discover-card position-relative"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <img src={DiscoverImg2} className='img-fluid' alt="" />
                        <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
                            <span><i className="bi bi-geo-alt-fill"></i> vietnam</span>
                            <h2 className='mt-4'>Beautiful tropical beach sea with umbrella chair around swimming pool</h2>
                        </div>
                    </motion.div>
                    <motion.div className="col-lg-2 discover-card position-relative"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <img src={DiscoverImg3} className='img-fluid' alt="" />
                        <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
                            <span><i className="bi bi-geo-alt-fill"></i> Dubai</span>
                            <h2 className='mt-4'>Beautiful tropical beach sea with umbrella chair around swimming pool</h2>
                        </div>
                    </motion.div>
                    <motion.div className="col-lg-2 discover-card position-relative"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <img src={DiscoverImg4} className='img-fluid' alt="" />
                        <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
                            <span><i className="bi bi-geo-alt-fill"></i> Nepal</span>
                            <h2 className='mt-4'>Beautiful tropical beach sea with umbrella chair around swimming pool</h2>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* working Steps */}
            <div className="working py-5 position-relative">
                <img src={FeatureImg1} className='FeatureImg FeatureImg1 img-fluid position-absolute' alt="" />
                <img src={FeatureImg2} className='FeatureImg FeatureImg2 img-fluid position-absolute' alt="" />
                <div className="container">
                    <div className="row">
                        <div className="section-title discover-title">
                            <div className="text-start flex-column d-flex align-items-start justify-content-start gap-3">
                                <span className=" d-flex align-items-center gap-2">
                                    <img src={plane} alt="" className="img-fluid" />
                                    <span>working Steps</span>
                                    <img src={plane} alt="" className="img-fluid" />
                                </span>
                                <h2>Book Your Next Trip <br />
                                    in 3 Steps</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 gap-3">
                        <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img rounded">
                                <img src={steps1} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>Choose Destination</h2>
                                <p>Lobortis luctus neque duis lacinia volutp suspendisse pulvinar pen atibus malesu ada placerat..</p>
                            </div>
                        </div>
                        <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img step-img2 rounded">
                                <img src={steps2} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>Make Payment</h2>
                                <p>Lobortis luctus neque duis lacinia volutp suspendisse pulvinar pen atibus malesu ada placerat..</p>
                            </div>
                        </div>
                        <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img step-img3 rounded">
                                <img src={steps3} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>Reach Airport on Date</h2>
                                <p>Lobortis luctus neque duis lacinia volutp suspendisse pulvinar pen atibus malesu ada placerat..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial */}
            <div className="testimonial py-5 position-relative">
                <img src={testBG} className='img-fluid test-bg-img position-absolute' alt="" />
                <img src={testBG} className='img-fluid test-bg-img2 position-absolute' alt="" />
                <div className="section-title test-title">
                    <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">
                        <span className=" d-flex align-items-center gap-2">
                            <img src={plane} alt="" className="img-fluid" />
                            <span>Testimonials</span>
                            <img src={plane} alt="" className="img-fluid" />
                        </span>
                        <h2>What’s Our Clients Saying!</h2>
                        <p>Our clients rave about our exceptional the seamless experiences
                            that exceeded their expectations.</p>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            className='test-Swiper'
                        >
                            <SwiperSlide>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="test-img d-flex align-items-center justify-content-center">
                                            <img src={tstimg1} className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="test-content">
                                            <img src={quote} className='img-fluid test-content-img' alt="" />
                                            <p className='test-pere'>"Booking with this travel agency was a game changer their meticulous planning and personalized approach made our trip not just a vacation but a collection of unforgettable moments. From seamless logistics to hidden gems, they turned our travel dreams into a reality, earning our trust and loyalty."</p>
                                            <div className="test-stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <div className="test-user mt-3 d-flex align-items-center gap-2">
                                                <img src={tstimg2} className='img-fluid' alt="" />
                                                <div className="test-user-info">
                                                    <h3>TASHA STEWART</h3>
                                                    <p className='m-0'>Web Developer at ThemeXriver</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="test-img d-flex align-items-center justify-content-center">
                                            <img src={tstimg1} className='img-fluid' alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="test-content">
                                            <img src={quote} className='img-fluid test-content-img' alt="" />
                                            <p className='test-pere'>"Booking with this travel agency was a game changer their meticulous planning and personalized approach made our trip not just a vacation but a collection of unforgettable moments. From seamless logistics to hidden gems, they turned our travel dreams into a reality, earning our trust and loyalty."</p>
                                            <div className="test-stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <div className="test-user mt-3 d-flex align-items-center gap-2">
                                                <img src={tstimg2} className='img-fluid' alt="" />
                                                <div className="test-user-info">
                                                    <h3>TASHA STEWART</h3>
                                                    <p className='m-0'>Web Developer at ThemeXriver</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Index