import React from 'react'

import ins1 from '../../assets/Footer/buggy.jpg'
import ins2 from '../../assets/Footer/fishing.jpg'
import ins3 from '../../assets/Footer/lavender.jpg'
import ins4 from '../../assets/Footer/rafting.jpg'
import ins5 from '../../assets/Footer/zipline.jpg'

function Footer() {
    return (
        <>
            <footer className="bg-light py-5  pb-0">
                <div className="container">
                    <div className="row g-4">
                        <h2 className="fw-bold mb-4">Hızlı Bağlantılar:</h2>
                        <div className="row g-3 w-100">
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>Rafting Turları</p>
                                <p><i className="fas fa-check me-2"></i>ATV (Quad) Safari</p>
                                <p><i className="fas fa-check me-2"></i>Balık Tutma Turları</p>
                            </div>
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>Buggy Safari</p>
                                <p><i className="fas fa-check me-2"></i>Jeep Safari</p>
                                <p><i className="fas fa-check me-2"></i>Lavanta Bahçeleri Gezisi</p>
                            </div>
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>Tazı Kanyonu Turu</p>
                                <p><i className="fas fa-check me-2"></i>Macera Parkı</p>
                                <p><i className="fas fa-check me-2"></i>Zipline Deneyimi</p>
                            </div>
                            <div className="footer-social col-md-3">
                                <p><i className="fas fa-phone-alt me-2"></i>+90 533 153 02 29</p>
                                <p><i className="fas fa-envelope me-2"></i>info@macerapark.com</p>
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