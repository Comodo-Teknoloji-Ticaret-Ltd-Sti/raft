import React from 'react'

import { useTranslation } from 'react-i18next';
import ins1 from '../../assets/Footer/buggy.jpg'
import ins2 from '../../assets/Footer/fishing.jpg'
import ins3 from '../../assets/Footer/lavender.jpg'
import ins4 from '../../assets/Footer/rafting.jpg'
import ins5 from '../../assets/Footer/zipline.jpg'

function Footer() {
    const { t } = useTranslation();
    return (
        <>
            <footer className="bg-light py-5 pb-0">
                <div className="container">
                    <div className="row g-4">
                        <h2 className="fw-bold mb-4">{t('footer.quick_links')}</h2>
                        <div className="row g-3 w-100">
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>{t('footer.rafting')}</p>
                                <p><i className="fas fa-check me-2"></i>{t('footer.quad')}</p>
                                <p><i className="fas fa-check me-2"></i>{t('footer.fishing')}</p>
                            </div>
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>{t('footer.buggy')}</p>
                                <p><i className="fas fa-check me-2"></i>{t('footer.jeep')}</p>
                                <p><i className="fas fa-check me-2"></i>{t('footer.lavender')}</p>
                            </div>
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>{t('footer.tazi')}</p>
                                <p><i className="fas fa-check me-2"></i>{t('footer.adventure_park')}</p>
                                <p><i className="fas fa-check me-2"></i>{t('footer.zipline')}</p>
                            </div>
                            <div className="footer-social col-md-3">
                                <p><i className="fas fa-phone-alt me-2"></i>+90 533 153 02 29</p>
                                <p><i className="fas fa-envelope me-2"></i>info.mcoutdoor@gmail.com</p>
                                <div className="mt-3 footer-icons">
                                    <a href="#" className="text-dark me-3"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-dark me-3"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="text-dark"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row mt-5">
                        <div className="col">
                            <div className="footer-img d-flex flex-wrap justify-content-center gap-3">
                                <div className="img-wrapper">
                                    <img src={ins1} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins2} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins3} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins4} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins5} alt="ins-image" />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="copyright text-center mt-4 py-3 border-top">
                        <small></small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer