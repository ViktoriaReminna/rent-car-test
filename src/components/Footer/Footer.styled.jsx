import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  background-color: #0b135f;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100px;
  z-index: 200;
`;

export const FooterContent = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  justify-content: center;

  > span {
    color: #8a8a89;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #8a8a89;
  position: relative;
  transition: 3ms color ease;

  &:hover {
    color: #0b44cd;
  }
`;
