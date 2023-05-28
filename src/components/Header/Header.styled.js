import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 100px;
  background-color: #3f51b5;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  gap: 70px;

  .logo {
    width: 220px;
    font-size: 32px;
    font-weight: bold;
    font-style: italic;
    color: #fff;
    flex-shrink: 1;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 22px;
    border-radius: 8px;
    background-color: #3f51b5;
    border: none;
    text-decoration: none;
    font-family: inherit;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    padding: 8px 16px;
    width: 120px;
    height: 60px;
    color: #fff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.3);
      scale: 1.1;
    }

    &.active {
      color: orange;
    }
  }
`;
