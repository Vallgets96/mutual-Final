import "./App.css";
import Home from "./Components/Home/Home";
import Whyus from "./Components/Whychooseus/Whyus";
// import Aboutus from "./Components/Aboutus/Aboutus";
import Happyclients from "./Components/Happyclients/Happyclients";
import Service from "./Components/Service/Service";

import Contactus from "./Components/Contactus/Contactus";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonial/Testimonial";
import Mission from "./Components/Mission/Mission";

import Newfooter from "./Components/Footer/Newfooter";
import Owner from "./Components/Aboutus/Aboutus";

import Clients from "./Components/Clients/Clients";
import Newpartner from "./Components/Partner/NewPartner";
import MV from "./Components/Mission/Mission";
import { useState,useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import MutualFundGallery from "./Components/Gallery/Gallery";
import Mfpartners from "./Components/Mfpartners/Mfpartners";
import Partner from "./Components/Partner/Partner";
import Gallery from "./Components/Gallery/Gallery";

function App() {
const [loading,setLoading] = useState(false)
useEffect(()=>{
  setLoading(false)
  setTimeout(()=>{
    setLoading(false)
  },5000)
},[])

  return (
    <div className="app">
    {
      loading?
      <ClipLoader
        color={'#111e6c'}
        loading={loading}
        size={150}
      
      />:<div>
      <Home />
      <Whyus />
      <MV />
      <Owner />
      <Mfpartners/>
      <Happyclients />
      <Service />
      <Gallery/>
      <Newpartner />
      <Faq />
      <Clients />
      <Contactus />
      <Newfooter/>
      </div>
    }
      
    </div>
  );
}

export default App;
