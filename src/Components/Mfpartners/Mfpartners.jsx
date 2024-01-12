import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "./logos/MFP1.jpg";
import img2 from "./logos/MFP2.jpg";
import img3 from "./logos/MFP3.jpg";
import img4 from "./logos/MFP4.jpg";
import img5 from "./logos/MFP5.jpg";
import img6 from "./logos/MFP6.jpg";
import img7 from "./logos/MFP7.jpg";
import img8 from "./logos/MFP8.jpg";
import img9 from "./logos/MFP9.jpg";
import img10 from "./logos/MFP10.jpg";
import img11 from "./logos/MFP11.jpg";
import img12 from "./logos/MFP13jpg.jpg";
import img14 from "./logos/MFP14.jpg";
import img15 from "./logos/MFP15.jpg";
import img16 from "./logos/MFP16.jpg";
import img17 from "./logos/MFP17.jpg";
import img18 from "./logos/MFP18.jpg";
import img19 from "./logos/MFP19.jpg";
import "./Mfpartners.css";
import { Container } from "react-bootstrap";

function Mfpartners() {
  return (
    <>
      <div className="section-title " data-aos="fade-up">
        <h2>Mutual Fund Partners</h2>
        <h3>
        Mutual  <span> Success Bond.</span>
        </h3>
      </div>
      <Container data-aos="fade-up">
        <div className="App">
          <div className="mb-3">
            <Marquee direction="right" speed={100} delay={2}>
              <div className="image_wrapper mfp">
                <img src={img1} alt="" />
              </div>
              <div className="image_wrapper mfp">
                <img src={img2} alt="" />
              </div>
              <div className="image_wrapper mfp">
                <img src={img3} alt="" />
              </div>
              <div className="image_wrapper mfp">
                <img src={img4} alt="" />
              </div>
              <div className="image_wrapper mfp">
                <img src={img6} alt="" />
              </div>
              <div className="image_wrapper mfp">
                <img src={img7} alt="" />
              </div>
              {/* {/* <div className="image_wrapper mfp">
                <img src={img8} alt="" />
              </div>
              <div className="image_wrapper mfp">
                <img src={img9} alt="" />
              </div> */}
              <div className="image_wrapper mfp">
                <img src={img10} alt="" />
              </div>
              <div className="image_wrapper mfp w-50">
                <img src={img11} alt="" />
              </div>
              {/* <div className="image_wrapper mfp w-50">
                <img src={img12} alt="" />
              </div>
              <div className="image_wrapper mfp w-50">
                <img src={img14} alt="" />
              </div>
              <div className="image_wrapper mfp">
                <img src={img15} alt="" />
              </div> */}
              <div className="image_wrapper mfp">
                <img src={img16} alt="" />
              </div>
              {/* <div className="image_wrapper mfp w-50">
                <img src={img17} alt="" />
              </div> */}
              <div className="image_wrapper mfp w-50">
                <img src={img18} alt="" />
              </div>
              {/* <div className="image_wrapper mfp w-50">
                <img src={img19} alt="" />
              </div>
              <div className="image_wrapper mfp">
                <img src={img5} alt="" />
              </div>  */}
            </Marquee>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Mfpartners;
