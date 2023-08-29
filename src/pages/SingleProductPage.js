import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

import { formatPrice } from "../utils/helpers";

import { Loading, Error, AddToCart, Stars, PageHero } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    name,
    price,
    description,
    stock,
    image,
    stars,
    reviews,
    id: sku,
    company,
  } = product;
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <div className="container">
            <img src={image} />
          </div>
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>'
            <p className="description">{description}</p>
            <p className={`${stock > 1 ? "info" : "color1"}`}>
              <span>Available :</span>
              {stock > 0 ? "In stock" : "out of stock"}
              {"   "}({stock})
            </p>
            <p className="info">
              <span>SKU :</span>
              {id}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
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
