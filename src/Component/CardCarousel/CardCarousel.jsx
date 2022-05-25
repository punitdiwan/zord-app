import React, { Component } from "react";
import Slider from "react-slick";

export default class courosel1 extends Component {
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
                <div className='overflow'>
                    <div className='card_carousel h-100 py-5'>
                        <h1 className='text-white text-center py-5'>Join with Other Successful<br /> Organizations</h1>
                        <div className='row d-flex img justify-content-between'>
                            <div className='col-lg-12 col-md-12 col-sm-10 col-10'>
                                <div className=' container  mt-5'>
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12 col-sm-10 col-10'>
                                            <Slider ref={slider => (this.slider = slider)} {...settings}>
                                                <div className="carousel1 card border border-primary ml-5 w-75">
                                                    <h5 className="card-title py-3 px-2 ">Sachin Kanthaswami</h5>
                                                    <div className="card-detail">
                                                        <div className="card-body">
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card border border-primary ml-5 w-75">
                                                    <h5 className="card-title py-3 px-2 ">Sachin bhardvaj</h5>
                                                    <div className="card-detail">
                                                        <div className="card-body">
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card border border-primary ml-5 w-75">
                                                    <h5 className="card-title py-3 px-2 ">Vijay Chelliah</h5>
                                                    <div className="card-detail">
                                                        <div className="card-body">
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card border border-primary ml-5 w-75">
                                                    <h5 className="card-title py-3 px-2 ">Shri Dhanya</h5>
                                                    <div className="card-detail">
                                                        <div className="card-body">
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card border border-primary ml-5 w-75">
                                                    <h5 className="card-title py-3 px-2 ">Vijay Chelliah</h5>
                                                    <div className="card-detail">
                                                        <div className="card-body">
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card border border-primary ml-5 w-75">
                                                    <h5 className="card-title py-3 px-2 ">Sachin bhardvaj</h5>
                                                    <div className="card-detail">
                                                        <div className="card-body">
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}