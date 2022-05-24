import React, { Component } from "react";
import Slider from "react-slick";

export default class BestCompany extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };

        return (
            <div>
                <div className='BeastComapny h-100 container text-center position-relative my-5 py-5'>
                    <h1 className=''>Join with Other Successful<br /> Organizations</h1>

                    <div className='Company  mt-5'>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-lg-12 col-md-12 col-sm-10 col-10'>
                                <Slider ref={slider => (this.slider = slider)} {...settings}>




                                    <div className="cards w-75 h-100">
                                        <div className='image'> <img src="/image/icons-012-analytic.png" alt="" className='img-fluid' /></div>
                                        <div className='Hv'><span></span></div>
                                        <h5 className="card-title font-weight-bold ">Sachin bhardvaj</h5>
                                        
                                            <div className="card-body">
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text-link"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        
                                    </div>


                                    <div className="cards w-75 h-100">
                                        <div className='image'> <img src="/image/icons-013-customer-service-agent.png" alt="" className='img-fluid' /></div>
                                        <div className='Hv'><span></span></div>
                                        <h5 className="card-title font-weight-bold ">Vijay Chelliah</h5>
                                        
                                            <div className="card-body">
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        
                                    </div>



                                    <div className="cards w-75 h-100">
                                        <div className='image'> <img src="/image/icons-011-content-1.png" alt="" className='img-fluid' />
                                        </div>                                    <div className='Hv'><span></span></div>
                                        <h5 className="card-title font-weight-bold ">Shri Dhanya</h5>
                                        
                                            <div className="card-body">
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text-link"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        
                                    </div>


                                    <div className="cards w-75 h-100">
                                        <div className='image'> <img src="/image/icons-012-analytic.png" alt="" className='img-fluid' />
                                        </div>                                   <div className='Hv'><span></span></div>
                                        <h5 className="card-title font-weight-bold ">Vijay Chelliah</h5>
                                        
                                            <div className="card-body">
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text-link"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        
                                    </div>


                                    <div className="cards w-75 h-100">
                                        <div className='image'> <img src="/image/icons-013-customer-service-agent.png" alt="" className='img-fluid' /></div>
                                        <div className='Hv'><span></span></div>
                                        <h5 className="card-title font-weight-bold ">Sachin bhardvaj</h5>
                                        
                                            <div className="card-body">
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text-link"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        
                                    </div>

                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}