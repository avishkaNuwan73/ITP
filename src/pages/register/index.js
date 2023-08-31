import React from "react";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const RightContainer = styled.div`
  flex: 1;
  display: flex;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  min-width: 300px;

  input {
    border: none;
    border-bottom: 1px solid;
    outline: none;
    width: 500px;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background-color: #963fb5;
    color: white;
  }
  a {
    text-decoration: underline;
    color: #555073;
    font-weight: 500;
    cursor: pointer;
  }
`;

function index() {
  return (
    <>
      <RegisterContainer>
        <LeftContainer>
          <Image src="/register1.jpg" alt="Image" />
        </LeftContainer>
        <RightContainer>
          <Form>
            <h1>Sign Up</h1>
            <div>
              <p>First Name</p>
              <input type="text" />

              <p>Last Name</p>
              <input type="text" />

              <p>Email</p>
              <input type="email" />

              <p>Username</p>
              <input type="text" />

              <p>Password</p>
              <input type="password" />

              <p>Confirm Password</p>
              <input type="password" />
            </div>
            <Buttons>
              <button>Sign Up</button>
              <a>Sign In</a>
            </Buttons>
          </Form>
        </RightContainer>
      </RegisterContainer>
    </>
  );
}

export default index;
