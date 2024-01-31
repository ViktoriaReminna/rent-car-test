import { NavList, LinkStyled } from './UserNav.styled';

const UserNav = () => {
  return (
    <NavList>
      {
        <>
          <li>
            <LinkStyled to="/">Home</LinkStyled>
          </li>
          <li>
            <LinkStyled to="catalog/*">Cars</LinkStyled>
          </li>
          <li>
            <LinkStyled to="favorites/*">Favorites</LinkStyled>
          </li>
        </>
      }
    </NavList>
  );
};

export default UserNav;
