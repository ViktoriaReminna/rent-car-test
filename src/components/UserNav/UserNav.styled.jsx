import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const LinkStyled = styled(NavLink)`
  color: white;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 10px 27px;
  transition: all 250ms linear;
  text-decoration: none;
  &.active {
    background-color: orange;
  }

  &:hover,
  &:focus {
    border: 1px solid orange;
  }
`;
