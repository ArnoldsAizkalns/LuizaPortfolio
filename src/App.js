// App.js
import React, { Suspense, useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import styled from "styled-components";

import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";

const locales = {
  en: { title: "English" },
  lv: { title: "Latviski" },
  ru: { title: "Russian" },
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: require("./locales/en/translation.json") },
    lv: { translation: require("./locales/lv/translation.json") },
    ru: { translation: require("./locales/ru/translation.json") },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
  };

  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        <Projects />
      </LightColor>
      <Clients />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}

const Container = styled.div``;
const Banner = styled.div`
  background: #fff;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: #fff;
`;
