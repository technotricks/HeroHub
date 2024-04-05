import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* align-items: center;
  justify-content: center;
  background-color: red;
  height: 100%; */
`;

// export const Container = styled.View`
//   background-color: #4b6c8d;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   height: 100%;
// `;

export const Middle = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Centered = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.View`
  background: #f9da2e;
  border-radius: 8px;
  letter-spacing: 0;
  width: 100px;
  height: 46px;
  margin-left: 15px;
  padding: 10px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #4b6c8d;
`;

export const TopText = styled.Text`
  font-size: 20px;
  color: #434343;
  margin-bottom: 10px;
`;

export const ItemContainer = styled.View`
  flex: 1;
  padding: 10px;
  margin: 5px;
  background-color: #ffffff;
  border-radius: 10px;
  elevation: 5;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const ItemText = styled.Text`
  font-size: 16px;
`;
