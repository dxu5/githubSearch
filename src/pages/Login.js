import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login-img.svg";
import bg from "./img/bg.jpg";
import moon from "./img/moon.png";
import mountain from "./img/mountain.png";
import road from "./img/road.png";
import test from "./img/test.png";
const Login = () => {
  useEffect(() => {
    let bg = document.getElementById("bg");
    let moon = document.getElementById("moon");
    let mountain = document.getElementById("mountain");
    let road = document.getElementById("road");
    let text = document.getElementById("text");

    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      bg.style.top = value * 0.5 + "px";
      moon.style.left = -value * 0.5 + "px";
      mountain.style.top = -value * 0.15 + "px";
      road.style.top = value * 0.15 + "px";
      text.style.top = value * 1 + "px";
    });
  }, []);
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <section>
        <img src={bg} alt="starry background" id="bg"></img>
        <img src={moon} alt="moon" id="moon"></img>
        <img src={mountain} alt="mountain" id="mountain"></img>
        <img src={road} alt="road" id="road"></img>
        <h2 id="text">Github Search</h2>
      </section>
      <div className="textSpace">
        <h4 id="title">Search For Your Favorite Coder</h4>
        <p id="paragraph">
          This application uses the Github API and parses through the
          repositories, profile, followers, and stars that a specific user has.
          After fetching the data, it will display relevant information about
          the user on multiple different visualization graphs, allowing users to
          easily view statistics on a person's public repositories. Each visitor
          will have up to 60 searches per hour, and will be notified when the
          search count has been used up. My hope for this project is for users
          to easily search and digest information about their favorite coders or
          peers, allowing them to see what languages they use in their
          repositories. Ready to get started? Click the link below!
        </p>
        <img className="picture" src={test} alt="picture" />
        <button className="btn" onClick={loginWithRedirect}>
          Login / Signup
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background: #0a2a43;
  min-height: 1500px;
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
  section:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #0a2a43, transparent) !important;
    z-index: 100000;
  }
  section:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a2a43;
    z-index: 100000;
    mix-blend-mode: color;
  }
  section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
  #text {
    position: relative;
    color: #fff;
    font-size: 10em;
    z-index: 1;
  }
  .btn {
    align-self: center;
    width: 18%;
    margin-bottom: 2rem;
  }
  #title {
    position: relative;
    color: #fff;
    font-size: 5em;
    z-index: 1;
    float: left;
    margin-top: 0px;
  }
  #road {
    z-index: 2;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .textSpace {
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }
  #paragraph {
    margin-top: 2rem;
    color: #fff;
    font-size: 1.3em;
  }
  .picture {
    width: 50%;
    height: 50%;
    align-self: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
export default Login;
