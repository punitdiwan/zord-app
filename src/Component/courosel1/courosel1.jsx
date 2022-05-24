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
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <div className='carousel1 container mt-5'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
              <Slider ref={slider => (this.slider = slider)} {...settings}>
                <div>
                  <img src="/image/brand-br6.png" alt="" />
                </div>
                <div>
                  <img src="/image/brand-br2.png" alt="" />
                </div>
                <div>
                  <img src="/image/brand-br3.png" alt="" />

                </div>
                <div>
                  <img src="/image/brand-br4.png" alt="" />
                </div>
                <div>
                  <img src="/image/brand-br5.png" alt="" />
                </div>

                <div>
                  <img src="/image/brand-br1.png" alt="" />
                </div>
              </Slider>

            </div>
          </div>
        </div>
      </div>
    );
  }
}