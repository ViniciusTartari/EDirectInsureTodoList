import Styled from "styled-components";
import { shade } from "polished";

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  
  h1 {
    margin: 40px;
    padding-top: 40px;
    text-align: center;
  }
`;

export const Form = Styled.form`
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    height: 70px;
    padding: 5px 20px;
    margin: 0 5px;
    border: 0;
    border-radius: 5px;
    border: 1px solid #777;
    border-right: 0;

    &::placeholder {
      color: #777;
    }

    & + input {
      margin-top: 20px;
    }
  }

  button {
    padding: 10px;
    margin: 20px;
    background: #48b9db;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#48b9db")};
    }
  }
`;
