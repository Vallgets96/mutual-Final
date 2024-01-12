import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
import './Gallery.css'
function Gallery() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  };

  return (
    <div className="App" data-aos="fade-up">
      <div className="section-title">
        <h2>GALLERY</h2>
        <h3>
        Gallery of  <span> Growth</span>
        </h3>
      </div>
      <div className="galleryWrapper">
        {/* <div className="filterItem">
          <ul>
            <li>
              <button className="btn" onClick={() => setData(GalleryData)}>All</button>
            </li>
            {collection.map((item) => (
              <li data-aos="fade-in">
                <button
                  className="btn" onClick={() => {
                    gallery_filter(item);
                  }}
                  >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="galleryContainer" >
          {data.map((item) => (
            <div key={item.id} className="galleryItem" data-aos="fade-up">
              < img src={item.image}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
