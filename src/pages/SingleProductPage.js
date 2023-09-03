import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

import { Loading, Error, AddToCart, Stars, PageHero } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";

const SingleProductPage = () => {
  const { id } = useParams();
  // console.log(id);
  // console.log("id");

  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  //console.log(product);
  useEffect(() => {
    fetchSingleProduct(`${id - 1}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    title,
    salary,
    category,
    location,
    hours,
    closeDate,
    description,
    stars,
    reviews,
    id: sku,
    company,
  } = product;
  return (
    <Wrapper>
      <PageHero title={title} product />
      <br />

      <div className="section-center">
        <Link to="/products" className="btn abc">
          back to Jobs menu
        </Link>
      </div>
      <div className="section section-center page">
        <div className="product-center">
          <section className="content">
            <h2>{title}</h2>
            <h4>{category}</h4>
            <Stars stars={stars} reviews={reviews} />
            <p className="description">{description}</p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>company :</span>
              {company}
            </p>
            <p className="info">
              <span>location :</span>
              {location}
            </p>
            <p className="info">
              <span> Hours :</span>
              {hours}
            </p>
            <p className="info">
              <span> closing :</span>
              {closeDate}
            </p>
            <h5 className="price">LKR {salary}</h5>'
            <hr />
            <p className="abcd">
              Please login and fill the form. If you not login then it's
              automatically goes home page
            </p>
            <Link to="/checkout" product={product} className="btn abc">
              fill the form
            </Link>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
.abc{
  background-color: #1B6DA0   ; 
}

h2{
  color:#001070;
}
.abcd{
  color: red;
}
p{
  font-size: 1rem;
}
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: #3B33FF  ;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .color1 {
    color : red;
  }
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
