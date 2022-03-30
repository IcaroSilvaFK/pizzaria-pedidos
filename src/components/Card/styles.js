import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
`;

export const Box = styled.div`
  padding: 3px;
  .title--price {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    .price {
      background-color: #ffd152;
      font-weight: bold;
      padding: 2px 10px;
      border-radius: 50px;
      display: flex;
      align-items: center;
    }
  }
  .description {
    font-size: 14px;
    text-align: center;
    margin-top: 4px;
    color: #4a5568;
  }
  .containerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 10px;
    button {
      width: 100%;
      height: 30px;
      border-radius: 5px;
      background-color: #48bb78;
      color: #fff;
    }
  }
`;
