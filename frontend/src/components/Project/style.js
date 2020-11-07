import Styled from "styled-components";
import { shade } from "polished";

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 20px;
  border: 1px solid #efefef;
`;

export const ProjectHeader = Styled.header`
  background-color: #efefef;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  div {
    display: flex;
    cursor: pointer;

    div{
      margin: 0 5px;
    }
  }
`;

export const TaskList = Styled.div`
  padding: 20px;

  h4{
    padding: 10px 0;
  }
`;

export const TaskForm = Styled.form`
  display: flex;
  margin: 10px;
  
  input {
    flex:1;
    margin-right: 5px;
  }

  button {
    width: 100px;
    background-color: #54ab26;
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#54ab26")};
    }
  }
`;
