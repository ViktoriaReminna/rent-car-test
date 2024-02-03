import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import {
  HeaderContainer,
  //   LinkLogo,
  UserContainer,
  HeaderWrap,
  UserBarWrapper,
  NavWrap,
  Wrapper,
  Logo,
} from './Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <HeaderWrap>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <UserContainer>
            <NavWrap>
              <Nav />
            </NavWrap>
            <UserBarWrapper></UserBarWrapper>
          </UserContainer>
        </HeaderWrap>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
