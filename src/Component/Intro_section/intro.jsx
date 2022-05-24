import React from 'react';
import { BiX } from "react-icons/bi";

const intro = () => {
    return (
        <div>


            <div className='anm_circl container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className="box">
                            <div className="text animated bounce ml-auto mr-5"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container int_detail  mt-5 pt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-sm-12 m-0'>
                        <div className="box">
                            <div className="text animated bounce ml-auto mr-5"></div>
                        </div>

                        <p className='nm'>ZordAPP</p>
                        <h1>Hire Software Developers in an instant</h1>
                        <p>With the growing competition in the market, we at Zordapps help you outstand your competitors with a solid digital presence for your company. We develop engaging websites and mobile applications that help you turn your business global.</p>
                        <button className='btn bg-primary text-white'>Hire Developers!</button>
                        <div className="box">
                            <div className="text animated bounce "></div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12 mt-sm-5 mt-md-3 text-sm-center m-0'>
                        <form>
                            <BiX className="rotate ml-5" />
                            <p className='nm text-left'>Get in touch with us</p>
                            <h1 className='text-left'>What can we do for you?</h1>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4 ">
                                    <input type="text" className="form-control" placeholder="E-mail" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4 ">
                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4 ">
                                    <input type="text" className="form-control" placeholder="Company" />
                                    {/* <img className='rotate rotate_circle img-fluid position-absolute' src="/image/shape-banner-circle.png" alt="" /> */}
                                </div>

                            </div>
                            <div className='row'>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-4 mb-4 ">
                                    <input type="text" className="form-control" placeholder="Your Messages" />
                                </div>
                            </div>
                            <button className='btn bg-primary text-white mt-5'>Send Message</button>

                        </form>
                        <img className='rotate rotate_circle img-fluid' src="/image/shape-banner-circle.png" alt="" />
                        <div className="box">
                            <div className="text animated bounce "></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default intro;
