import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #222c56;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormBox = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
    input {
      width: 300px;
      height: 40px;
      border: none;
      border-bottom: 1px solid;
      outline: none;
      margin: 10px;
    }

    h1 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
`;
const Button = styled.button`
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#963fb5" : "grey")};
  color: white;
  margin: 10px;
`;

function ForgotPasswordEmail() {
  const navigate = useNavigate();
  return (
    <Container>
      <FormBox>
        <form>
          <h1>Forgot Password</h1>
          <p>Enter your email address</p>
          <input type="email" placeholder="Email" />
          <Button primary>Send</Button>
          <Button onClick={() => navigate("/")}>Cancel</Button>
        </form>
      </FormBox>
    </Container>
  );
}

export default ForgotPasswordEmail;
