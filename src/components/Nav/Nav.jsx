import { NavWrap, LinkStyled, Linka } from './Nav.styled';

const Nav = () => {
  return (
    <NavWrap>
      <nav>
        <LinkStyled to="/">Home</LinkStyled>

        <LinkStyled to="catalog/">Cars</LinkStyled>

        <LinkStyled to="favorites/">Favorites</LinkStyled>
      </nav>

      <Linka href="tel:+380730000000">+38 (073) 000-00-00</Linka>
    </NavWrap>
  );
};

export default Nav;
