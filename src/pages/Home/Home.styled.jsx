import styled from '@emotion/styled';
import img from '../../assets/images/1.png';

export const Wrapper = styled.div`
  background: linear-gradient(rgba(126, 124, 116, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 0 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: white;
  width: 600px;
  margin: 0 auto;
  padding-top: 70px;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
`;

export const Text = styled.p`
  font-size: 38px;
  color: white;
  width: 900px;
  margin: 0 auto;
  text-align: center;
`;
