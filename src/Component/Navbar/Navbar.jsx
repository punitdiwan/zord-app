import React from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaHeadset, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar nav_clr navbar-dark" >
                <div className='row container'>
                    <div className=' col-lg-10 col-md-6 col-sm-12 col-12'>
                        <div className="nav_detail text-sm-center text-lg-left ml-lg-5 pl-5">
                            <p><FaPhoneAlt className="icn rounded-circle  mr-2" /> 8807160499</p>
                            <p className=''> <FaMapMarkerAlt className="icn rounded-circle mr-2" />677, First Floor, Suite, 1090, 13th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6 col-sm-12 col-12'>
                        <div className="nav_icon text-lg-right text-sm-center mx-lg-auto  ml-5 mt-sm-2 mb-2">
                            <FaFacebookF className="rounded-circle icn_li m-1" />
                            <FaLinkedinIn className="rounded-circle icn_li m-1" />
                            <FaTwitter className="rounded-circle icn_li m-1" />
                            <FaInstagram className="rounded-circle icn_li m-1" />
                        </div></div>

                </div>
            </nav>



            <nav className="navbar navbar-expand-lg navbar-light bg-light container  ">
                <a className="navbar-brand img-fluid" href="/#"><img src="/image/images-logo.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



                <div className="collapse nav_button navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item active">
                            <a className="nav-link mr-4" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link mr-4" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded='false' aria-haspopup="true">
                                Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/mobileapp">Mobile App Development</a>
                                <a className="dropdown-item" href="/reactapp">React Js Development</a>
                                <a className="dropdown-item" href="/nodeapp">Node Js Development</a>
                                <a className="dropdown-item" href="/angular">Angular Js Development</a>
                                <a className="dropdown-item" href="/#">Vue Js Development</a>

                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/#">jbxkasx</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-4" href="/about">About US</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link mr-4" href='/contact'>Contact</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn text-dark border-danger py-2">hire us!<FaArrowRight className="bg-danger icon rounded m-1 text-white p-1" /></button>
                    </form>
                    <div className="nav-item Que nav-link text-left d-flex">
                        <FaHeadset className="head m-2" />
                        <div>
                            <p className="my-1">Have Any <span>Questions?</span></p>
                            <p>8807160499</p></div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
