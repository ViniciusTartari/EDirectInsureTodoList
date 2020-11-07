import Styled from "styled-components";

export const TaskItem = Styled.div`
  display:flex;
  align-items: center;

  input {
    margin: 5px;
  }

  p {
    padding: 0 5px;
  }

  div {
    cursor: pointer;
    display: none;
  }

  &:hover {
    div {
      display: block;
    }      
  }
`;
