import React from 'react';
import './ProjectSection.css';
import img1 from '../../../images/img1.JPG';
import img2 from '../../../images/bg3.JPG';
import img3 from'../../../images/pd2.JPG';
import img4 from '../../../images/pd4.JPG';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);


const ProjectSection = () => {
    return (
        <div className="section-wrapper">
            <h1 className="text-center text-white pt-4 ">Some of My Works</h1>
            <div className="container cardStyle">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>

                        <div class="card" style={{ width: '24rem',height:'32rem' }}>
                            <img className="img-border" style={{height:'250px'}} src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="">
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn btn-success m-2" href="https://travelagencywinter.netlify.app/"  target='_blank' >Live Site</a>

                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card" style={{ width: '24rem',height:'32rem' }}>
                            <img className="img-border" style={{height:'250px'}}src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="">
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn btn-success m-2" href="https://ride-sharing-simple.netlify.app/"  target='_blank' >Live Site</a>

                                    </div>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card" style={{ width: '24rem',height:'32rem' }}>
                            <img className="img-border" style={{height:'250px'}}src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="">
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn btn-success m-2" href="https://freshbazar.netlify.app/"  target='_blank' >Live Site</a>

                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card" style={{ width: '24rem',height:'32rem' }}>
                            <img className="img-border" style={{height:'250px'}}src={img4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="">
                                        <a className="btn button m-2" >React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn button m-2">React js</a>
                                        <a className="btn btn-success m-2" href="https://info-sports.netlify.app/"  target='_blank' >Live Site</a>

                                    </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        // <div className="container">
        //     <div className="col-md-12">
        //             <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
        //                 "rotate": 50,
        //                 "stretch": 0,
        //                 "depth": 100,
        //                 "modifier": 1,
        //                 "slideShadows": true
        //             }} pagination={true} className="mySwiper">
        //                 <SwiperSlide>
        //                     <div class="card" style={{width:'18rem'}}>
        //                         <img src={img1} class="card-img-top" alt="..."/>
        //                             <div class="card-body">
        //                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                             </div>
        //                     </div>
        //                 </SwiperSlide>
        //                     <SwiperSlide>
        //                     <div class="card" style={{width:'18rem'}}>
        //                         <img src={img1} class="card-img-top" alt="..."/>
        //                             <div class="card-body">
        //                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                             </div>
        //                     </div>
        //                     </SwiperSlide>
        //                     <SwiperSlide>
        //                     <div class="card" style={{width:'18rem'}}>
        //                         <img src={img1} class="card-img-top" alt="..."/>
        //                             <div class="card-body">
        //                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                             </div>
        //                     </div>
        //                     </SwiperSlide>
        //                     <SwiperSlide>
        //                     <div class="card" style={{width:'18rem'}}>
        //                         <img src={img1} class="card-img-top" alt="..."/>
        //                             <div class="card-body">
        //                                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                             </div>
        //                     </div>
        //                     </SwiperSlide>
        //             </Swiper>

        //         </div>
        //     </div>
    );
};

export default ProjectSection;
