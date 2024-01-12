import React from "react";
import CountUp from "react-countup";
import "../Style.css";
import happyclientbg from '../img/happyclientbg.jpg'

const Happyclients = () => {
  return (
    <div>
      {/* <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <p>Happy Clients</p>
                <h4>
                  <CountUp start={0} end={232} duration={1} />
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <p>Projects</p>
                <h4>
                  <CountUp start={0} end={521} duration={1} />
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset" />
                <p>Hours Of Support</p>
                <h4>
                  <CountUp start={0} end={1463} duration={1} />
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-people" />
                <p>Hard Workers</p>
                <h4>
                  <CountUp start={0} end={15} duration={1} />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="stats" className="stats mt-5">
        <img src={happyclientbg}  />

        <div
          class="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  {" "}
                  54Crs{" "}
                </span>
                <p>AUM</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  649
                </span>
                <p>Clients</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  297
                </span>
                <p>Family</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  class="purecounter"
                >
                  25L
                </span>
                <p>SIP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Happyclients;
