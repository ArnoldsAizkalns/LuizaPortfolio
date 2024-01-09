import React from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const ClientSlider = (props) => {
  const { name, position, img_url, stars, disc } = props.item;
  return (
    <Container>
      <Header>
        <span className="quote">
          <IoIosQuote />
        </span>
        <div>
          {Array(stars)
            .fill()
            .map((_, i) => (
              <span className="star" key={i}>
                <AiOutlineStar />
              </span>
            ))}
        </div>
      </Header>
      <Body>{disc}</Body>
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
  background: #62554a;
  padding: 1.5rem 1rem;
  margin: 0 1rem;
  border-radius: 5px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .quote {
    font-size: 3rem;
    color: #f1f0ed;
    opacity: 0.7;
  }

  .star {
    color: #ffcd3c;
    font-size: 1.3rem;
  }
`;
const Body = styled.p`
  font-size: 0.8rem;
  color: #c0bbb7;
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
    color: #f1f0ed;
    @media (max-width: 580px) {
      font-size: 1rem;
    }
    @media (max-width: 538px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: #f1f0ed;
    @media (max-width: 538px) {
      font-size: 0.6rem;
    }
  }
`;
