import { useState } from 'react';
import { HeroSection, Slide, LeftArrow, RightArrow, DotsContainer, Dot } from './Hero.styled';
import item1 from '../../assets/images/1.png';
import item2 from '../../assets/images/2.png';
import item3 from '../../assets/images/3.png';
import item4 from '../../assets/images/4.png';
import item5 from '../../assets/images/5.png';
import item6 from '../../assets/images/6.png';
import item7 from '../../assets/images/7.png';
import item8 from '../../assets/images/8.png';
import item9 from '../../assets/images/9.png';
import item10 from '../../assets/images/10.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const slides = [
    {
      url: item1,
    },
    {
      url: item2,
    },
    {
      url: item3,
    },
    {
      url: item4,
    },
    {
      url: item5,
    },
    {
      url: item6,
    },
    {
      url: item7,
    },
    {
      url: item8,
    },
    {
      url: item9,
    },
    {
      url: item10,
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  return (
    <HeroSection>
      <Slide style={{ backgroundImage: `url(${slides[currentIndex].url})` }} />

      <LeftArrow style={{ left: '5px' }} onClick={prevSlide}>
        <BsChevronCompactLeft size={30} />
      </LeftArrow>
      <RightArrow style={{ right: '5px' }} onClick={nextSlide}>
        <BsChevronCompactRight size={30} />
      </RightArrow>
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot key={index} onClick={() => goToSlide(index)}>
            <RxDotFilled />
          </Dot>
        ))}
      </DotsContainer>
    </HeroSection>
  );
};
export default Hero;
