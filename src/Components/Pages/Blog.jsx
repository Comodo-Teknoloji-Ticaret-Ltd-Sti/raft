import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import blogAuthor from './../../assets/blog-author.jpeg';
import blog1 from './../../assets/buggy_1.jpg';
import blog2 from './../../assets/fishing_1.jpg';
import blog3 from './../../assets/hiking_1.jpg';
import blog4 from './../../assets/nature_1.jpg';
import blog5 from './../../assets/fishing_2.jpg';

import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';

function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const blogData = [
        {
            id: 1,
            image: blog1,
            title: "Buggy Turu: Maceranın ve Özgürlüğün Tadını Çıkarın!",
            category: "Adrenalin",
            description: "Doğanın kalbinde, tozlu yollar ve engebeli arazilerde buggy turu ile unutulmaz bir maceraya hazır mısınız? Adrenalin dolu bu deneyimde, özgürlüğü ve heyecanı bir arada yaşayacak, eşsiz manzaralar eşliğinde yolculuğun keyfini süreceksiniz!"
        },
        {
            id: 2,
            image: blog2,
            title: "Balıkçılık: Oltalar Hazır Mı?",
            category: "Hobi",
            description: "Göl kenarında huzurlu bir atmosferde, sevdiklerinizle birlikte balık tutmaya ne dersiniz?. Doğanın sakinliği ve suyun dinginliğiyle, hayatın stresinden uzaklaşarak unutulmaz anılar biriktirin!"
        },
        {
            id: 3,
            image: blog3,
            title: "Experience the World with Our Travel Company",
            category: "Doğa",
            description: "Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere."
        },
        {
            id: 4,
            image: blog4,
            title: "Lavanta Bahçesi Turu: Doğanın Renkleri ve Huzuru",
            category: "Doğa",
            description: "Mis kokulu lavanta tarlalarında yürüyüş yaparak doğanın huzurunu keşfedin. Morun en güzel tonları arasında keyifli anlar yaşarken, fotoğraf çekmeyi ve bu özel atmosferin tadını çıkarmayı unutmayın."
        },
        {
            id: 5,
            image: blog5,
            title: "Assertively iterate resource maximizing",
            category: "Hobi",
            description: "Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere."
        }
    ];

    const filterByCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredBlogs = selectedCategory === 'all' 
        ? blogData 
        : blogData.filter(blog => blog.category === selectedCategory);

    const categories = [
        { name: "Adrenalin", count: blogData.filter(blog => blog.category === "Adrenalin").length },
        { name: "Doğa", count: blogData.filter(blog => blog.category === "Doğa").length },
        { name: "Hobi", count: blogData.filter(blog => blog.category === "Hobi").length },
    ];

    return (
        <>
            {/* Page Section */}
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>Aktiviteler</h2>
                        <ul>
                            <li>
                                <Link to="/">Anasayfa</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                Aktiviteler
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="blog py-5">
                <div className="container">                    <div className="row g-4 blog-page">
                        <div className="col-12 mb-4">
                            <div className="categories-card border-0 p-3 bg-light rounded">
                                <h5 className="fw-bold mb-3">Kategoriler</h5>
                                <ul className="list-group list-group-horizontal flex-wrap">
                                    {categories.map(category => (
                                        <li
                                            key={category.name}
                                            className={`list-group-item border me-2 mb-2 rounded ${selectedCategory === category.name ? 'bg-primary text-white' : 'bg-white'}`}
                                            onClick={() => filterByCategory(category.name)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className="d-flex align-items-center">
                                                <i className="bi bi-asterisk me-2"></i>
                                                <span>{category.name}</span>
                                                <span className="ms-2 badge bg-secondary">{category.count}</span>
                                            </div>
                                        </li>
                                    ))}
                                    <li
                                        className={`list-group-item border me-2 mb-2 rounded ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-white'}`}
                                        onClick={() => filterByCategory('all')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-asterisk me-2"></i>
                                            <span>Tümü</span>
                                            <span className="ms-2 badge bg-secondary">{blogData.length}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            {filteredBlogs.map(blog => (
                                <div className="col-lg-12" key={blog.id}>
                                    <div className="blog-card mb-4 shadow">
                                        <img src={blog.image} className="card-img-top img-fluid" alt="Blog Image" />
                                        <div className="blog-card-body p-4">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="blog-img mt-4">
                                                    <img src={blogAuthor} className="me-3" alt="Author" />
                                                </div>
                                            </div>
                                            <h3 className="card-title fw-bold mb-3">{blog.title}</h3>                                            
                                            <p className="card-text mb-3">{blog.description}</p>
                                            <a style={{ cursor: 'pointer' }}>
                                                {blog.category} <i className="bi bi-tag-fill ms-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4">                            <div className="recent-card">
                                <h4>Recent Post</h4>
                                {blogData.slice(0, 4).map(blog => (
                                    <div className="d-flex mb-4" key={blog.id}>
                                        <img src={blog.image} className="me-3 img-fluid" alt="Post Image" />
                                        <div>
                                            <small className="d-block">
                                                <i className="bi bi-calendar2-week me-1"></i> May 11, 2024
                                            </small>
                                            <p className="text-decoration-none">{blog.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            
            {/* gallery section */}
            <section className="gallery-grid my-5 mb-0">
                <div className="row">
                    <Swiper
                        slidesPerView={5}
                        autoplay={true}
                        loop={true}
                        breakpoints={{
                            1300: { slidesPerView: 5 },
                            575: { slidesPerView: 3 },
                            0: { slidesPerView: 3 },
                        }}
                        className="gallery-swiper">
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage1} alt="gallery" data-lightbox="image-1" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage2} alt="gallery" data-lightbox="image-2" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage3} alt="gallery" data-lightbox="image-3" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage4} alt="gallery" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage5} alt="gallery" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage2} alt="gallery" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage3} alt="gallery" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Blog;