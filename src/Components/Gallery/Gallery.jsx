// import { GalleryData } from "./GalleryData";
// import { useEffect, useState } from "react";
// import './Gallery.css'
// function Gallery() {
//   const [data, setData] = useState([]);
//   const [collection, setCollection] = useState([]);

//   useEffect(() => {
//     setData(GalleryData);
//     setCollection([...new Set(GalleryData.map((item) => item.titile))]);
//   }, []);

//   const gallery_filter = (itemData) => {
//     const filterData = GalleryData.filter((item) => item.titile == itemData);
//     setData(filterData);
//   };

//   return (
//     <div className="App" data-aos="fade-up">
//       <div className="section-title">
//         <h2>GALLERY</h2>
//         <h3>
//         Gallery of  <span> Growth</span>
//         </h3>
//       </div>
//       <div className="galleryWrapper">
//         {/* <div className="filterItem">
//           <ul>
//             <li>
//               <button className="btn" onClick={() => setData(GalleryData)}>All</button>
//             </li>
//             {collection.map((item) => (
//               <li data-aos="fade-in">
//                 <button
//                   className="btn" onClick={() => {
//                     gallery_filter(item);
//                   }}
//                   >
//                   {item}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div> */}
//         <div className="galleryContainer" >
//           {data.map((item) => (
//             <div key={item.id} className="galleryItem" data-aos="fade-up">
//               < img src={item.image}  />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gallery;

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Gallery.css'
import img1 from './Galleryimages/G1.jpg'
import img2 from './Galleryimages/g2.jpg'
import img3 from './Galleryimages/g3.jpg'
import img4 from './Galleryimages/g4.jpg'
import img5 from './Galleryimages/g5.jpg'
import img6 from './Galleryimages/g6.jpg'
import img7 from './Galleryimages/g7.jpg'
import img8 from './Galleryimages/g8.jpg'
import img9 from './Galleryimages/g9.jpg'
import img10 from './Galleryimages/g10.jpg'
import img11 from './Galleryimages/g11.jpg'
import img12 from './Galleryimages/g12.jpg'
import img13 from './Galleryimages/g13.jpg'
import img14 from './Galleryimages/g14.jpg'
import img15 from './Galleryimages/g15.jpg'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Gallery() {
  return (
    <>
    <div className="section-title">
        <h2>GALLERY</h2>
        <h3>
        Gallery of  <span> Growth</span>
        </h3>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        
      >
        <SwiperSlide><img className='image' src={img1}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img2}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img3}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img4}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img5}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img6}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img7}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img8}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img9}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img10}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img11}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img12}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img13}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img14}/></SwiperSlide>
        <SwiperSlide><img className='image' src={img15}/></SwiperSlide>
      </Swiper>
    </>
  );
}

