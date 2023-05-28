import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1280px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto 50px;

  .page-title {
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .back-menu {
    &.active {
      color: #fff;
    }
  }

  .buttons-block {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;
