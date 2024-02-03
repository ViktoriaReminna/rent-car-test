import { FooterContainer, FooterContent, StyledLink } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <span>
          © 2024{' '}
          <StyledLink
            href="https://github.com/ViktoriaReminna/rent-car-test"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            DriveUkr™
          </StyledLink>{' '}
          All Rights Reserved.
        </span>
      </FooterContent>
    </FooterContainer>
  );
};
export default Footer; 