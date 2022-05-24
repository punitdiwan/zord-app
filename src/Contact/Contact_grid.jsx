import React from 'react';
import { FaSearchLocation, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact_grid = () => {
  return (
    <div>
          <div className="card-group container my-5 pt-5 border-0">

              <div className='row'>
                  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                      <div className="card mt-4 shadow">
                          <div className="card-body">
                              <div className='features-card-image'>
                                  <FaSearchLocation className='bg-primary rounded-circle p-2 position-absolute ' style={{width:"3rem", height:"3rem"}}/>
                              </div>
                              <div className='card_content w-75 ml-auto'>
                                  <h5 className="card-title text-dark ">Our Address:</h5>
                                  <p className="card-text">677, First Floor, Suite, 1090, 13th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                      <div className="card mt-4 shadow">
                          <div className="card-body">
                              <div className='features-card-image'>
                                  <SiGmail  className='bg-primary rounded-circle p-2 position-absolute ' style={{width:"3rem", height:"3rem"}}/>
                              </div>
                              <div className='card_content w-75 ml-auto'>
                                  <h5 className="card-title text-dark ">Our Email:</h5>
                                  <p className="card-text">contact@zordappsolutions.com</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                      <div className="card mt-4 shadow">
                          <div className="card-body">
                              <div className='features-card-image'>
                                  <FaPhoneAlt  className='bg-primary rounded-circle p-2 position-absolute ' style={{width:"3rem", height:"3rem"}}/>
                              </div>
                              <div className='card_content w-75 ml-auto'>
                                  <h5 className="card-title text-dark ">Our Phone:</h5>
                                  <p className="card-text">8807160499</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default Contact_grid;
