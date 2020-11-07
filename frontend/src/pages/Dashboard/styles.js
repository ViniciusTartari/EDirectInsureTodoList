import Styled from "styled-components";
import { shade } from "polished";

export const Header = Styled.header`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #333;
  display:flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  background-color: #eeefee;

  div {
    button {
      margin: 0 10px;
    }
  }
`;

export const Content = Styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  height:auto;
`;

export const NewProject = Styled.form`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #eeefee;
  margin: 20px;
  padding: 20px;
  max-width: 300px;
  max-height: 200px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    place-content: center;
    margin-top: 20px;
    
    input {
      flex: 1;
      height: 50px;
      padding: 0 24px;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;
      border: 2px solid #fff;
      border-right: 0;

      &::placeholder {
        color: #a8a8b3;
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
      color: #fff;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, "#48b9db")};
      }
    }
  }
`;

export const ProjectList = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height:auto;
`;
