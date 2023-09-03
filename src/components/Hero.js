import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpg";
import heroBcg2 from "../assets/hero-bcg-2.jpg";
import heroBcg3 from "../assets/hero-bcg-3.jpg";
import heroBcg4 from "../assets/hero-bcg-4.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Welcome to the <br />
          Part time Job founders
          <br />
          <br />
          <p>
            Many businesses are cutting back by employing lower-paid part-time
            workers. Part-time work is generally hard to find. I'm part-time. I
            work three days a week.
          </p>
        </h1>

        <Link to="/products" className="btn hero-btn">
          jobs
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
        <img src={heroBcg3} alt="person working" className="accent-img2" />
        <img src={heroBcg4} alt="person working" className="accent-img3" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      color:#141670  ; 
      margin-bottom: 2rem;
    }
    p {
       color:#393A91 ;
      font-size: 1.25rem;
    }
    .hero-btn {
      background: #4D50E3 ;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .accent-img2 {
      position: absolute;
      bottom: 0;
      left: 250px;
      width: 250px;
      height:145px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .accent-img3 {
      position: absolute;
      bottom: 0;
      left: 500px;
      width: 250px;
       height:145px;
      transform: translateX(-50%);
      border-radius: var(--radius);

  
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
