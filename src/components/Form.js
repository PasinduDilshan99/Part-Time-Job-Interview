import React, { useState } from "react";
import styled from "styled-components";
import FormInput from "./FormInput";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    nic: "",
    address: "",
    contactNumber: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "full name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Full name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "nic",
      type: "text",
      placeholder: "NIC number",
      errorMessage: "enter the invalid NIC Number!",
      label: "NIC Number",
      required: true,
    },
    {
      id: 5,
      name: "address",
      type: "textarea",
      placeholder: "Address",
      errorMessage: "please enter the address!",
      label: "Address",
      required: true,
    },
    {
      id: 6,
      name: "tele",
      type: "text",
      placeholder: "contact  number",
      errorMessage: "Please enter the your contact number!",
      label: "contact number",
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let a = 0;
  const handle = () => {
    //  values.filter((input) => input != null);
    if (a === 1) {
      alert("please, complete all");
    } else {
      alert("submit");
    }
  };
  return (
    <Wrapper>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Form</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .app {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3)
      ),
      url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    background-size: cover;
    background-position: center;
  }

  form {
    background-color: white;
    padding: 0px 60px;
    border-radius: 10px;
  }

  h1 {
    color: #3c72de;
    text-align: center;
  }

  button {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: #130db8;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 30px;
  }
`;

export default Form;
