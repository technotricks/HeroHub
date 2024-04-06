import styled from 'styled-components/native';

export const ItemText = styled.Text`
  font-size: 16px;
`;

export const HText = styled.Text<{
  color: string;
  isBold?: boolean;
  fontSize?: string;
  aligin?: 'center' | 'left' | 'right';
}>`
  font-size: ${({fontSize}) => fontSize ?? '20px'};
  font-weight: ${({isBold}) => (isBold ? 'bold' : 'normal')};
  color: ${({color}) => color};
  text-align: ${({aligin}) => aligin ?? 'left'};
`;

// const H3 = styled.Text`
//   font-family: ${fonts.bold};
//   font-size: 20px;
//   color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
//   margin-bottom: 20px;
// `;

// const H4 = styled.Text`
//   font-family: ${fonts.bold};
//   font-size: 20px;
//   color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
//   margin-bottom: 20px;
// `;

// const H5 = styled.Text`
//   font-family: ${fonts.bold};
//   font-size: 18px;
//   color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
//   margin-bottom: 20px;
// `;

// const H6 = styled.Text`
//   font-family: ${fonts.bold};
//   font-size: 15px;
//   color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
//   margin-bottom: 20px;
// `;
