import React from 'react';


const About_us_form = () => {
  return (
    <div>
     
      <div className='container int_detail  my-5 py-5'>
        <div className='row'>         
         <div className='col-lg-6 col-md-6 col-sm-12 mt-sm-5 mt-md-3  m-0'>
          <form>

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

        </div>
          <div className='col-12 col-md-6 col-sm-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.491665562218!2d77.6500742!3d12.9158885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x43e8df4694b2714d!2sZordapp%20Solutions!5e0!3m2!1sen!2sin!4v1653294548996!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='img-fluid'></iframe>

          </div>


        </div>
      </div>
    </div>
  )
}

export default About_us_form;
