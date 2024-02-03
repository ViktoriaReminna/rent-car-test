import styled from '@emotion/styled';

export const HeroSection = styled.section`
  width: 100%;
  max-width: 1212px;
  height: 720px;
  margin: auto;
  padding: 24px 16px;
  position: relative;
  display: block;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-position: center;
  background-size: cover;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: background-image 0.5s ease-in-out;
`;

export const Arrow = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 8px;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 1.25rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
export const LeftArrow = styled(Arrow)`
  left: 10px;
  transform: translateY(-50%);
`;

export const RightArrow = styled(Arrow)`
  right: 10px;
  transform: translateY(-50%);
`;
export const DotsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const Dot = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
`;
