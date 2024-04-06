import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity<{bgColor?: string}>`
  background-color: ${({bgColor}) => bgColor ?? '#412545'};
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
`;
