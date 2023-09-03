import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Jobs</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #d5e9fe;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: #0020a7;
  a {
    color: #001672;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: #032acf;
  }
`;

export default PageHero;
