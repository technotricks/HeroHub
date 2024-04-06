import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  height: 100%;
`;

export const Centered = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CenteredVH = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ScrollContainer = styled.ScrollView`
  height: 100%;
`;

export const ItemContainer = styled.View`
  flex: 1;
  padding: 10px;
  margin: 5px;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const OverlayNameBottom = styled.View<{bgColor?: string}>`
  position: absolute;
  border-radius: 100px;
  padding: 2px 7px 2px 7px;
  bottom: 2px;
  text-align: center;
  background-color: ${({bgColor}) => bgColor ?? '#fff'};
`;

export const HeadingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const Row = styled.View<{bgColor?: string}>`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({bgColor}) => bgColor ?? '#fff'};
`;

export const Cell = styled.View<{bgColor?: string}>`
  flex: 1;
  text-align: center;
  background-color: ${({bgColor}) => bgColor ?? 'transparent'};
`;
