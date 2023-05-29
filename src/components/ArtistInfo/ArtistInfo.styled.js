import styled from '@emotion/styled';

export const ArtistInfoStyled = styled.div`
  display: flex;
  gap: 50px;

  .artist-info {
    width: 300px;
  }
  .artist-albums {
    width: 100%;
  }
  .artist-subtitle {
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .artist-discr {
    font-size: 20px;
    text-transform: capitalize;
  }

  .albums-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .album-item {
    width: calc((100% - 30px) / 4);
  }
`;
