import React from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import "../Style.css";

const ClientSlider = (props) => {
  const { name, position, img_url, stars, disc } = props.item;
  return (
    <Container className="border shadow rounded client-box" data-aos="fade-up" >
      
      
      
      
      <Header >
        <div>
          {Array(stars)
            .fill()
            .map((_, i) => (
              <span className="star"  key={i}>
                <FaStar />
              </span>
            ))}
        </div>
      </Header>
      <Body style={{ fontFamily: "",marginTop:"10px" }}>{disc}</Body>
      <Footer>
        <img src={img_url} alt={name} />
        <div className="details">
          <h1>{name}</h1>
          <p>{position}</p>
        </div>
      </Footer>
      
      
      
    </Container>
  );
};

export default ClientSlider;

const Container = styled.div`
  background: #fffff    
  );
  padding: 1.5rem 1rem;
  margin: 0 1rem;
    font-family:" system-ui, -apple-system, 
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .quote {
    font-size: 3rem;
    color: #01be96;
    opacity: 0.7;
  }

  .star {
    color: #ffc400f1;
    font-size: 1.3rem;
  }
`;
const Body = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    object-fit: cover;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    @media (max-width: 580px) {
      font-size: 1rem;
    }
    @media (max-width: 538px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 538px) {
      font-size: 0.6rem;
    }
  }
`;
