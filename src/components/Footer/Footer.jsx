"use client";
import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const initValues = { name: "", email: "", phoneNumber: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

const Footer = () => {
  const [state, setState] = useState(initState);
  const { values, isLoading } = state;
  const toast = useToast();
  const [touched, setTouched] = useState({});

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const isFieldValid = (field) => !!values[field];

  const isFormValid = () =>
    Object.keys(values).every((field) => isFieldValid(field));

  /*   const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      if (!isFormValid()) {
        toast({
          title: "Please fill out all fields.",
          status: "error",
          duration: 2000,
          position: "top",
        });
        return;
      }

      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  }; */

  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Portfolio</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>Jūrmalas gatve 80, Rīga</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+37127440554">+371 27440554</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:miladamiri@gmail.com">miladamiri@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="/">
                  <AiFillInstagram />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <FaTiktok />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
        <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input
                id="name"
                name="name"
                value={values.name}
                type="text"
                placeholder="Full Name..."
                onBlur={onBlur}
                onChange={handleChange}
              />
            </div>
            {touched.name && !isFieldValid("name") && (
              <span className="error-message">Name is required</span>
            )}
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input
                id="email"
                name="email"
                value={values.email}
                type="email"
                placeholder="Email..."
                onBlur={onBlur}
                onChange={handleChange}
              />
            </div>
            {touched.email && !isFieldValid("email") && (
              <span className="error-message">Email is required</span>
            )}
            <div className="phone">
              <span>
                <MdPhone />
              </span>
              <input
                id="phone"
                name="phone"
                onBlur={onBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                type="phone"
                placeholder="Phone number..."
              />
            </div>
            {touched.phone && !isFieldValid("phone") && (
              <span className="error-message">Phone number is required</span>
            )}
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea
                id="message"
                name="message"
                value={values.message}
                cols="30"
                rows="10"
                placeholder="Message..."
                onChange={handleChange}
                onBlur={onBlur}
              ></textarea>
            </div>
            <div className="form-button">
              {touched.message && !isFieldValid("message") && (
                <span className="error-message">Message is required</span>
              )}
              <button /* onClick={onSubmit} */ disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </Slide>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #62554a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #f1f0ed;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .phone,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #62554a;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: rgba(98, 85, 74, 0.4);
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #62554a;
      border: none;
      color: #fff;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #62554a);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #62554a);
      }
    }
  }
  .form-button {
    display: flex;
    flex-direction: column;
  }
  .error-message {
    margin-bottom: 8px;
    color: red;
  }
`;
