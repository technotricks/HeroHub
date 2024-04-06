import {HeadingContainer, Cell, Row, HText} from '@/components/atom';
import {EpisodesViewProps} from './types';

const EpisodesView: React.FC<EpisodesViewProps> = ({item}) => {
  const episodes = item?.episode ?? [];

  if (episodes.length == 0) {
    return (
      <HeadingContainer>
        <Cell>
          <HText color="#0C0D34" aligin="center" isBold fontSize="20px">
            No Episodes found
          </HText>
        </Cell>
      </HeadingContainer>
    );
  }
  return (
    <>
      <HeadingContainer>
        <Cell>
          <HText color="#0C0D34" aligin="center" isBold fontSize="20px">
            Episodes
          </HText>
        </Cell>
      </HeadingContainer>
      {episodes?.map((episode, index) => {
        return (
          <Row bgColor={index % 2 == 0 ? '#E8FFFA' : '#FFE4D9'}>
            <Cell>
              <HText color="#0C0D34" aligin="center" fontSize="14px">
                {episode.episode}
              </HText>
            </Cell>
            <Cell>
              <HText color="#0C0D34" aligin="left" fontSize="14px">
                {episode.name}
              </HText>
            </Cell>
          </Row>
        );
      })}
    </>
  );
};

export default EpisodesView;
