import styled from "styled-components";
export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #ffd152;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    strong {
      font-size: 26px;
    }
  }
  nav {
    button {
      background-color: transparent;
    }
  }
`;
