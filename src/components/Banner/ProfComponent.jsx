import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import luiza from "./luiza.png";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const ProfComponent = () => {
  const { t } = useTranslation();

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            {t("profComponent.greeting")}{" "}
            <span className="green">{t("profComponent.iAm")}</span>
          </h4>
          <h1 className="green">Luize Čaikovska</h1>
          <h3>{t("profComponent.title")}</h3>
          <p>{t("profComponent.description")}</p>
          <button>{t("profComponent.button")}</button>
          <Social>
            <p>{t("profComponent.social")}</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiFillInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaTiktok />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={luiza} alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 3rem;
  width: 80%;
  align-items:center;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #62554a;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #62554a);
    :hover {
      filter: drop-shadow(0px 10px 10px #62554a);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #62554a;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 32rem;
    filter: drop-shadow(0px 10px 10px #f1f0ed);
    transition: transform 400ms ease-in-out;
    @media (max-width: 1250px) {
      width: 28rem;
    }
    @media (max-width: 1100px) {
      width: 24rem;
    }
    @media (max-width: 999px) {
      width: 20rem;
    }
    @media (max-width: 790px) {
      width: 19rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
