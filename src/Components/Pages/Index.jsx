import React from 'react'
import { useTranslation } from 'react-i18next'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, EffectFade } from 'swiper/modules';

import btnArrow from '././../../assets/btn-arrow.svg'
import plane from '././../../assets/raftico.svg'


// Data
import Destination from './../../Destination.json';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


import steps1 from './../../assets/steps-1.svg'
import steps2 from './../../assets/steps-2.svg'
import steps3 from './../../assets/steps-3.svg'
import FeatureImg1 from './../../assets/Feature-image-1.webp'

import testBG from './../../assets/test-bg.webp'



import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import Footer from '../../Components/Footer/Footer';
import discoverData from '../../AfisDesination.json';
import comment from '../../Comment.json';
import LanguageSwitcher from '../LanguageSwitcher';

function Index() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="position-fixed top-0 end-0 m-3 z-3">
                <LanguageSwitcher />
            </div>
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
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className='text-white'>MC Raft</h1>
                            <h2 className="text-white">{t('hero.slide1.title')}</h2>
                            <p className="text-white fs-5">{t('hero.slide1.description')}</p>
                            <button className="btn text-white hero-btn mt-4">{t('explore')} <img src={btnArrow} className="img-fluid ms-2" alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero hero2 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className='text-white'>MC Raft</h1>
                            <h2 className="text-white">{t('hero.slide2.title')}</h2>
                            <p className="text-white fs-5">{t('hero.slide2.description')}</p>
                            <button className="btn text-white hero-btn mt-4">{t('viewTour')} <img src={btnArrow} className="img-fluid ms-2" alt="" /></button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero hero3 d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className='text-white'>MC Raft</h1>
                            <h2 className="text-white">{t('hero.slide3.title')}</h2>
                            <p className="text-white fs-5">{t('hero.slide3.description')}</p>
                            <button className="btn text-white hero-btn mt-4">{t('viewDetails')} <img src={btnArrow} className="img-fluid ms-2" alt="" /></button>
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
                    <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">                        <span>{t('destinations.subtitle')}</span>
                        <div className=" d-flex align-items-center gap-2">
                            <img src={plane} alt="" className="img-fluid" style={{ width: 60, height: 60 }} />
                            <h2>{t('destinations.title')}</h2>
                            <img src={plane} alt="" className="img-fluid" style={{ width: 60, height: 60 }} />
                        </div>
                        <p>{t('destinations.description')}</p>
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
                        <SplideTrack>                            {Destination.map(dest => {
                            const t = dest.translations?.[i18n.language];
                            if (!t) return null; // seçilen dilde veri yoksa atla

                            return (
                                <SplideSlide key={dest.id}>
                                    <div className="dest-card position-relative">
                                        <div className="dest-img overflow-hidden rounded">
                                            <img src={t.image} className='img-fluid' alt={t.name} />
                                            <span className="dest-price position-absolute top-0 end-0"> {dest.buy?.[i18n.language]}</span>
                                        </div>
                                        <div className="dest-content p-4 rounded border top-0 start-0 mt-3 position-absolute">
                                            <i className="fa-solid fa-arrow-right dest-arrow position-absolute"></i>
                                            <h2>{t.name}</h2>
                                            <p>{t.pere}</p>                                                <div className="dest-day border-top pt-3">
                                                <i className="bi bi-send-fill me-2"></i>
                                                <span>{dest.days?.[i18n.language]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            );
                        })}
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
                    <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">                        <span>{t('discover.subtitle')}</span>
                        <div className=" d-flex align-items-center gap-2">
                            <img src={plane} alt="" className="img-fluid" style={{ width: 60, height: 60 }} />
                            <h2>{t('discover.title')}</h2>
                            <img src={plane} alt="" className="img-fluid" style={{ width: 60, height: 60 }} />
                        </div>
                        <p>{t('discover.description')}</p>
                    </div>
                </motion.div>
                <div className="row px-5 my-5 mx-0 gap-3 align-items-center justify-content-center">                    {discoverData.map((item, index) => {
                    const t = item.translations?.[i18n.language];
                    if (!t) return null;

                    return (
                        <motion.div
                            key={item.id}
                            className="col-lg-2 discover-card position-relative"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <img src={t.image} className="img-fluid" alt={t.name} />
                            <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
                                <span><i className="bi bi-geo-alt-fill"></i> {t.name}</span>
                                <h2 className="mt-4">{t.pere}</h2>
                            </div>
                        </motion.div>
                    );
                })}
                </div>
            </div>
            {/* working Steps */}
            <div className="working py-5 position-relative">
                <img src={FeatureImg1} className='FeatureImg FeatureImg1 img-fluid position-absolute' alt="" />
                {/* <img src={FeatureImg2} className='FeatureImg FeatureImg2 img-fluid position-absolute' alt="" /> */}
                <div className="container">
                    <div className="row">
                        <div className="section-title discover-title">
                            <div className="text-start flex-column d-flex align-items-start justify-content-start gap-3">                                <span>{t('steps.section.subtitle')}</span>
                                <div className=" d-flex align-items-center gap-2">
                                    <img src={plane} alt="" className="img-fluid" style={{ width: 60, height: 60 }} />
                                    <h2>{t('steps.section.title')}</h2>
                                    <img src={plane} alt="" className="img-fluid" style={{ width: 60, height: 60 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 gap-3">
                        <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img rounded">
                                <img src={steps1} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>{t('steps.step1.title')}</h2>
                                <p>{t('steps.step1.description')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img step-img2 rounded">
                                <img src={steps2} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>{t('steps.step2.title')}</h2>
                                <p>{t('steps.step2.description')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
                            <div className="step-img step-img3 rounded">
                                <img src={steps3} className='img-fluid' alt="" />
                            </div>
                            <div className="step-content">
                                <h2>{t('steps.step3.title')}</h2>
                                <p>{t('steps.step3.description')}</p>
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
                    <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">                        <span>{t('testimonials.subtitle')}</span>
                        <div className=" d-flex align-items-center gap-2">
                            <img src={plane} alt="" className="img-fluid" style={{ width: 60, height: 60 }} />
                            <h2>{t('testimonials.title')}</h2>
                            <img src={plane} alt="" className="img-fluid" style={{ width: 60, height: 60 }} />
                        </div>
                        <p>{t('testimonials.description')}</p>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <Swiper slidesPerView={1} spaceBetween={10} loop={true} className="test-Swiper">
                            {comment.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="test-img d-flex align-items-center justify-content-center">
                                                <img src={item.image} className="img-fluid" alt="testimonial" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="test-content">
                                                <img src={item.quoteImage} className="img-fluid test-content-img" alt="quote" />                                                <p className="test-pere">"{item.text[i18n.language]}"</p>
                                                <div className="test-stars">
                                                    {[...Array(item.stars)].map((_, i) => (
                                                        <i key={i} className="bi bi-star-fill"></i>
                                                    ))}
                                                </div>
                                                <div className="test-user mt-3 d-flex align-items-center gap-2">
                                                    <img src={item.user.avatar} className="img-fluid" alt={item.user.name} />
                                                    <div className="test-user-info">
                                                        <h3>{item.user.name}</h3>
                                                        <p className="m-0">{item.user.info[i18n.language]}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}

export default Index