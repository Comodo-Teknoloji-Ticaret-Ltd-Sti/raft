import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>İletişim</h2>
                        <ul>
                            <li>
                                <Link to="/">Anasayfa</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                İletişim
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="contact-section py-5 my-5">
                <div className="container">
                    <div className="section-title contact-title">
                        <h2 className="fw-bold ">
                            Bizimle <br /> İletişime Geçin!
                        </h2>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 contact-info d-flex flex-column justify-content-center">
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-text">
                                    <h5>Adres</h5>
                                    <p className="mb-0">Akyaka Sk. 70/1, 07550 Antalya, Manavgat Türkiye</p>
                                    <p>MC RIVER PARK OUTDOOR (MC RAFT)</p>
                                </div>
                            </div>
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="info-text">
                                    <h5>Telefon Numarası</h5>
                                    <p className="mb-0">(+90) 533 153 02 29</p>
                                    <p>(0500) 111-1111</p>
                                </div>
                            </div>
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <h5>Mail Adresi</h5>
                                    <p className="mb-0">info@macerapark.com</p>
                                    <p>support@macerapark.com</p>
                                </div>
                            </div>
                        </div>                        <div className="col-lg-6">
                            <div className="maps-container h-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25562.818404558282!2d31.428061462746378!3d36.7861027240488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3577c5458f7a9%3A0x6dd8245f304b741!2sManavgat%2C%2007600%20Manavgat%2FAntalya!5e0!3m2!1str!2str!4v1747837463924!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: "15px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                        <div className="contact-icons d-flex gap-2">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact