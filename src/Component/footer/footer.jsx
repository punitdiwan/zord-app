import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer /--> */}
            <footer className="page-footer footer-css font-small blue pt-4 text-md-center">

                {/* <!-- Footer Links --> */}
                <div className="container text-center p-5 text-md-left">

                    {/* <!-- Grid row --> */}
                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 mt-md-0 mt-3">

                            {/* <!-- Content --> */}
                            <a className="navbar-brand" href="/#"><img src="/image/images-white-logo.png" alt="" className='img-fluid' /></a>
                            <hr className='bg-dark' />
                            <p className='mt-4'>With the growing competition in the market, we at Zordapps help you outstand your competitors with a solid digital presence for your company. We develop engaging websites and mobile applications that help you turn your business global.</p>

                            <div className="Footer_icon d-flex w-100 mr-lg-5  pr-lg-5">
                                <p className='font-weight-bold'>Follow us:</p>
                                <FaFacebookF className="rounded-circle icn_li  m-1" />
                                <FaLinkedinIn className="rounded-circle icn_li m-1" />
                                <FaTwitter className="rounded-circle icn_li m-1" />
                                <FaInstagram className="rounded-circle icn_li m-1" />
                            </div>
                        </div>
                        <div className="col-md-3 mt-md-0 mt-3">

                            {/* <!-- Content --> */}
                            <h5 className="text-uppercase ">Get in Touch</h5>
                            <hr className='bg-dark mt-4' />
                            <h6 className='font-weight-bold mt-lg-4'>Loation</h6>
                            <p>677, First Floor, Suite, 1090, 13th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>


                            <h6 className='font-weight-bold'>email:</h6>
                            <p>contact@zordappsolutions.com</p>

                            <h6 className='font-weight-bold'>phone:</h6>
                            <p>+91-8807160499</p>



                        </div>

                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 mb-md-0 mb-3">

                            {/* <!/-- Links --> */}
                            <h5 className="text-uppercase">Services</h5>
                            <hr className='bg-dark mt-4' />
                            <ul className="list-unstyled mt-lg-4">
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/> Android App development</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/>Flutter App development</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/>ReactJS development</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/> Angular development</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/>NodeJS development</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/>React Native App development</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/>Vue App development</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 mb-md-0 mb-3">

                            {/* <!-- Links --> */}
                            <h5 className="text-uppercase">Hire Software Developers</h5>
                            <hr className='bg-dark' />
                            <ul className="list-unstyled mt-lg-4">
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/>Android / iOS Developers</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/> Full Stack Developers</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/> ReactJS Developers</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/> Front End Developers</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/> NodeJS Developers</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/>  Angular Developers</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/> React Native Developers</a>
                                </li>
                                <li>
                                    <a href="#!"><RiArrowDropRightLine className='a_icon'/> Flutter Developers</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
            </footer>
            {/* <!-- Footer Links --> */}

            {/* <!-- Copyright --> */}
            <div className="footer-copyright text-center text-white py-3">Designed With 💕 by
                <a href="https://maitretech.com/">  Maitretech.com</a>
            </div>
            {/* <!-- Copyright --> */}

        </div>

    )
}

export default Footer;
