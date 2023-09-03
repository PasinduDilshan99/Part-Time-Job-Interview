import React from "react";
import Form from "../components/Form";
import styled from "styled-components";

const CheckoutPage = ({ products }) => {
  return (
    <>
      <Form />
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
