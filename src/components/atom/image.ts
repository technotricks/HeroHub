import styled from 'styled-components/native';

export const CharacterImageSmall = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

interface ITestAtomStyled {
  filled?: boolean;
}

export const TestAtomStyled = styled.TouchableOpacity<ITestAtomStyled>`
  border-color: ${({filled, theme}) =>
    filled ? theme.colors.secondary : 'white'};
  border-width: 1px;
  border-radius: 3px;
  padding: 2px 5px 2px 5px;
`;

export const ProfileImage = styled.Image<{borderColor: string}>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border-width: 10px;
  border-color: ${props => props.borderColor || '#ffffff'};
`;
