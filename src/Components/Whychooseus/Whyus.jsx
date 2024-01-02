import React from 'react'
import '../Style.css'
const Whyus = () => {
  return (
    <div>
         <section id="featured-services" className="featured-services">
  <div className="container" data-aos="fade-up">
  <div className="section-title">
      <h2>WHY CHOOSE US</h2>
      <h3>Why <span>Choose Us</span></h3>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon"><i className="bi bi-globe" /></div>
          <h4 className="title"><a href>Wide Product Range</a></h4>
          <p className="description">Guaranteed overnight millionaire status with our risk-free mutual funds</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon"><i className="bi bi-currency-dollar" /></div>
          <h4 className="title"><a href>Transparent Pricing</a></h4>
          <p className="description">Transparent pricing in mutual funds ensures clarity and fairness for investors</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
          <div className="icon"><i className="bi bi-laptop" /></div>
          <h4 className="title"><a href>Innovative Tools</a></h4>
          <p className="description">Innovative tools enhance mutual fund investing with advanced analytics for informed decisions</p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
          <div className="icon"><i className="bi bi-person-gear" /></div>
          <h4 className="title"><a href>Dedicated Support</a></h4>
          <p className="description">Dedicated support offers personalized assistance for navigating mutual fund complexities with confidence</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Whyus