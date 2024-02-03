import { StyledLoader } from './Loader.styled';

const Loader = ({ position = { top: '50%', left: '50%' } }) => {
  return <StyledLoader position={position} />;
};

export default Loader;
