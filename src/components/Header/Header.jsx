import UserNav from '../UserNav/UserNav';

import {
  HeaderContainer,
  //   LinkLogo,
  UserContainer,
  HeaderWrap,
  UserBarWrapper,
  NavWrap,
  Wrapper,
} from './Header.styled';

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <HeaderWrap>
          {/* <LinkLogo>
            <Icon
              name="logo"
              iconWidth={{ mobile: '36px', tablet: '44px' }}
              iconHeight={{ mobile: '13px', tablet: '17px' }}
            />
            <span>PowerPulse</span>
          </LinkLogo> */}

          <UserContainer>
            <NavWrap>
              <UserNav />
            </NavWrap>
            <UserBarWrapper></UserBarWrapper>
          </UserContainer>
        </HeaderWrap>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
