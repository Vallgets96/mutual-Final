import React from "react";
import "../Style.css";
const Whyus = () => {
  return (
    <div>
      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>WHY CHOOSE US</h2>
            <h3>
              Why <span>MR Distribution Services?</span>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon">
                  <i className="bi bi-globe" />
                </div>
                <h4 className="title">
                  <a href>Wide Product Range</a>
                </h4>
                <p className="description ">
                MR Distribution Services offers a diverse mix of investment options, enabling you to tailor 
                your portfolio to align with specific financial goals.


                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon">
                  <i className="bi bi-currency-dollar" />
                </div>
                <h4 className="title">
                  <a href>Ease of Investment</a>
                </h4>
                <p className="description">
                Clarity and integrity are paramount which makes your investment easy

                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch why-box mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon">
                  <i className="bi bi-laptop" />
                </div>
                <h4 className="title">
                  <a href>Innovative Tools</a>
                </h4>
                <p className="description">
                Empower your financial journey with our cutting-edge tools
                 for confident decision-making in today's dynamic market.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                <div className="icon">
                  <i className="bi bi-person-gear" />
                </div>
                <h4 className="title">
                  <a href>Dedicated Support</a>
                </h4>
                <p className="description">
                Customer support available 24/7 for personalized assistance, ensuring you navigate through any complexities with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whyus;
