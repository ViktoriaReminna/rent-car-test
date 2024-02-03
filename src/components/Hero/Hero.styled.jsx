import styled from '@emotion/styled';

export const HeroSection = styled.section`
  width: 100%;
  max-width: 1212px; /* md:w-[1212px] */
  height: 720px; /* h-[720px] */
  margin: auto; /* m-auto */
  padding: 24px 16px; /* py-[24px] px-[16px] */
  position: relative;
  display: block;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px; /* rounded-2xl */
  background-position: center; /* bg-center */
  background-size: cover; /* bg-cover */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
  transition: background-image 0.5s ease-in-out; /* duration-500 */
`;

export const Arrow = styled.div`
  display: block; /* змініть none на block, щоб зробити стрілки завжди видимими */
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
    background-color: rgba(0, 0, 0, 0.4); /* змініть колір при наведенні */
  }
`;
export const LeftArrow = styled(Arrow)`
  left: 10px; /* Для лівої стрілки */
  transform: translateY(-50%);
`;

export const RightArrow = styled(Arrow)`
  right: 10px; /* Для правої стрілки */
  transform: translateY(-50%);
`;
export const DotsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  padding: 0 0; /* py-2 */
`;

export const Dot = styled.div`
  font-size: 1.25rem; /* text-2xl */
  cursor: pointer;
`;
