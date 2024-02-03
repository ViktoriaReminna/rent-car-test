
import { ButtonStyled } from './Buttons.styled';

const Button = ({ padding, text, handleClick }) => {
  return (
    <ButtonStyled onClick={handleClick} type="button" padding={padding}>
      {text}
    </ButtonStyled>
  );
};


export default Button;
