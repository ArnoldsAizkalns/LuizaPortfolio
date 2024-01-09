import React, { useState } from "react";
import styled from "styled-components";
import { GiCandleFlame } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const locales = {
  en: { title: "Eng" },
  lv: { title: "Lv" },
  ru: { title: "Ru" },
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const [bar, setBar] = useState(false);

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
  };
  return (
    <Container bar={bar}>
      <Logo>
        <span className="green">
          <GiCandleFlame />
        </span>
        <h1>{t("main.header")}</h1>
      </Logo>
      <Nav bar={bar}>
        <span>
          <a href="#home" onClick={() => setBar(false)}>
            {t("header.home")}
          </a>
        </span>
        <span>
          <a href="#service" onClick={() => setBar(false)}>
            {t("header.services")}
          </a>
        </span>
        <span>
          <a href="#project" onClick={() => setBar(false)}>
            {t("header.projects")}
          </a>
        </span>
        <span>
          <a href="#client" onClick={() => setBar(false)}>
            {t("header.testimonials")}
          </a>
        </span>
        <span>
          <a href="#footer" onClick={() => setBar(false)}>
            {t("header.portfolio")}
          </a>
        </span>
      </Nav>
      <LanguageSwitcher>
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              style={{
                fontWeight: i18n.language === locale ? "bold" : "normal",
              }}
              type="button"
              onClick={() => changeLanguage(locale)}
            >
              {locales[locale].title}
            </button>
          </li>
        ))}
      </LanguageSwitcher>
      <div onClick={() => setBar(!bar)} className="bars">
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
  animation: header 500ms ease-in-out;
  @media (max-width: 840px) {
    width: 90%;
  }
  .bars {
    display: none;
  }
  @media (max-width: 1249px) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#62554a")};
        transition: all 400ms ease-in-out;
        :before,
        :after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #62554a;
          position: absolute;
        }

        :before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }

        :after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
`;

const LanguageSwitcher = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  li {
    margin-right: 4px;
  }

  button {
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    background-color: #fff;
    border: none;
    padding: 5px 2px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #ccc;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
const Nav = styled.div`
  @media (max-width: 1250px) {
    display: none;
  }
  @media (max-width: 1250px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #f1f0ed;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
  span {
    margin-left: 1rem;
    a {
      color: #62554a;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #62554a;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
