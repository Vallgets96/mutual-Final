import React from "react";
import "../Style.css";

const Service = () => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Our Services</h2>
            <h3>
              Ignite <span> Your Investments</span>
            </h3>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-bank" />
                </div>
                <h4>
                  <a href>Mutual Funds</a>
                </h4>
                <p>
                  Our expertly managed Mutual Fund Services pool diverse
                  investments for financial growth, eliminating the need for
                  extensive individual research.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-cash-coin" />
                </div>
                <h4>
                  <a href>SIP</a>
                </h4>
                <p>
                Our SIP service facilitates disciplined wealth creation,
                  enabling investors to automate mutual fund investments with
                  predetermined amounts.
                 
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                <i className="bi bi-safe" />


                </div>
                <h4>
                  <a href>Fixed Deposit</a>
                </h4>
                <p>
                A secure investment option, fixed deposits involve depositing
                  a lump sum with a fixed interest rate, offering a stable and
                  reliable return on investment.
                 
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-piggy-bank" />
                </div>
                <h4>
                  <a href>Mediclaim Insurance</a>
                </h4>
                <p>
                  Our Mediclaim Insurance assures transparent, affordable, and personalized health coverage,
                  prioritizing your well-being and financial stability.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                <i className="bi bi-shield-shaded" />
                </div>
                <h4>
                  <a href>Life Insurance</a>
                </h4>
                <p>
                We offer diverse insurance products, including term life and
                  whole life plans, tailored to individual preferences and
                  financial goals.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                <i className="bi bi-newspaper" />
                </div>
                <h4>
                  <a href>Bonds</a>
                </h4>
                <p>
                Bonds, as loans to issuers with regular interest payments, 
                  offer a stable income stream,
                  presenting lower risk than stocks. 
                  They play a crucial role in achieving portfolio balance.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                  <i class="bi bi-coin"></i>
                </div>
                <h4>
                  <a href>Financial Planning</a>
                </h4>
                <p>
                Our financial planning services are tailored to align with your unique goals and risk tolerance.
                 Whether you're saving for education, retirement, or wealth accumulation,
                 our expert advisors leverage a diverse range of mutual funds to optimize your portfolio
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-person-wheelchair" />
                </div>
                <h4>
                  <a href>Retirement Planning</a>
                </h4>
                <p>
                  Tailored for diverse needs, our retirement plans offer
                  expertly managed funds, personalized guidance, and a range of
                  investment options.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-bullseye" />
                </div>
                <h4>
                  <a href>Goal Based Planning</a>
                </h4>
                <p>
                  Goal-based planning in mutual funds involves creating a
                  personalized investment strategy to achieve specific financial
                  objectives.{" "}
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
