import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>{t('contact.title')}</h2>

                        <ul>
                            <li>
                                <Link to="/">{t('nav.home')}</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                {t('contact.title')}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="contact-section py-5 my-5">
                <div className="container">
                    <div className="section-title contact-title">
                        <h2 className="fw-bold ">
                            {t('contact.get_in_touch_line1')} <br /> {t('contact.get_in_touch_line2')}
                        </h2>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 contact-info d-flex flex-column justify-content-center">
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-text">
                                    <h5>{t('contact.address')}</h5>
                                    <p className="mb-0">Akyaka Sk. 70/1, 07550 Antalya, Manavgat Türkiye</p>
                                    <p>MC RIVER PARK OUTDOOR (MC RAFT)</p>
                                </div>
                            </div>
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="info-text">
                                    <h5>{t('contact.phone')}</h5>

                                    <p className="mb-0">(+90) 533 153 02 29</p>
                                    <p>(+90) 539 721 85 14</p>
                                </div>
                            </div>
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <h5>{t('contact.email')}</h5>
                                    <p className="mb-0">info.mcoutdoor@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="maps-container h-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3178.8752448176824!2d31.1817474758558!3d37.17943567214141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDEwJzQ2LjAiTiAzMcKwMTEnMDMuNiJF!5e0!3m2!1str!2str!4v1748243381080!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: "15px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>                        <div className="contact-icons d-flex gap-2">
                            <i className="fab fa-facebook-f" onClick={() => window.open('https://www.facebook.com', '_blank')} style={{ cursor: 'pointer' }}></i>
                            <i className="fab fa-instagram" onClick={() => window.open('https://www.instagram.com/mc_rafting/', '_blank')} style={{ cursor: 'pointer' }}></i>
                            <i className="fab fa-whatsapp" onClick={() => window.open('https://wa.me/905331530229', '_blank')} style={{ cursor: 'pointer' }}></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact