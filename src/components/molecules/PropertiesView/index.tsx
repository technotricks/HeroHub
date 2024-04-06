import {HeadingContainer, Cell, Row, HText} from '@/components/atom';
import {PropertiesViewProps} from './types';

const PropertiesView: React.FC<PropertiesViewProps> = ({item}) => {
  return (
    <>
      <HeadingContainer>
        <Cell>
          <HText color="#0C0D34" aligin="center" isBold fontSize="20px">
            Properties
          </HText>
        </Cell>
      </HeadingContainer>
      <Row bgColor="#FFE4D9">
        <Cell>
          <HText color="#0C0D34" aligin="center" fontSize="14px">
            Gender
          </HText>
        </Cell>
        <Cell>
          <HText color="#0C0D34" aligin="center" fontSize="14px">
            {item?.gender}
          </HText>
        </Cell>
      </Row>
      <Row bgColor="#E8FFFA">
        <Cell>
          <HText color="#0C0D34" aligin="center" fontSize="14px">
            Origin
          </HText>
        </Cell>
        <Cell>
          <HText color="#0C0D34" aligin="center" fontSize="14px">
            {item?.origin.name}
          </HText>
        </Cell>
      </Row>
      <Row bgColor="#FFE4D9">
        <Cell>
          <HText color="#0C0D34" aligin="center" fontSize="14px">
            Location
          </HText>
        </Cell>
        <Cell>
          <HText color="#0C0D34" aligin="center" fontSize="14px">
            {item?.location.name}
          </HText>
        </Cell>
      </Row>
    </>
  );
};

export default PropertiesView;
