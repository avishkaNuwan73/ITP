import React from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
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
  justify-content: center;
  align-items: center;
  background-color: #555073;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  h1 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
    color: white;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
      outline: none;
    }
  }
  button {
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background-color: #963fb5;
    color: white;
  }
`;
const Signup = styled.a`
  color: white;
  font-size: 12px;
  margin: 10px 0;
  cursor: pointer;
`;
const ForgotPassword = styled.a`
  color: white;
  font-size: 12px;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function index() {
  const handleLogin = () => {
    console.log("login");
  };

  return (
    <>
      <LoginContainer>
        <LeftContainer>
          <Image src="/login.jpg" alt="Image" />
        </LeftContainer>
        <RightContainer>
          <Form>
            <h1>Sign In</h1>
            <div>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
            </div>
            <ForgotPassword>
              <Link
                to="/forgot-password1"
                style={{ textDecoration: "none", color: "white" }}
              >
                Forgot Password?
              </Link>
            </ForgotPassword>
            <button type="submit" onClick={handleLogin}>
              Sign In
            </button>
            <Signup>
              Don't have an account?
              <Link to="/register" style={{ color: "white" }}>
                Sign Up
              </Link>
            </Signup>
          </Form>
        </RightContainer>
      </LoginContainer>
    </>
  );
}

export default index;
