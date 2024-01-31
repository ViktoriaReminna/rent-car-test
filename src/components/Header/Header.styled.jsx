import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background-color: black;
  border-bottom: '1px solid rgba(239, 237, 232, 0.20)';
`;
export const HeaderContainer = styled.header`
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 1440px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkLogo = styled(Link)`
  margin-right: auto;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 19px;
    width: 150px;
  }
`;

export const NavWrap = styled.nav`
  margin-right: 32px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const UserBarWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
