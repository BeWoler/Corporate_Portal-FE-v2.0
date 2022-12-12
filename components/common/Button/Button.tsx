import { Flex } from '@chakra-ui/react';
import { IButton } from './interfaces/button.interface';

const Button = ({
  value = 'Button',
  w = '100px',
  h = '50px',
  bgColor = 'brand.white',
  borderColor,
  borderWidth,
  color = 'brand.black',
  onClick,
  disabled = false,
}: IButton) => {
  return (
    <Flex
      as="button"
      w={w}
      h={h}
      align={'center'}
      justify={'center'}
      overflow={'hidden'}
      onClick={onClick}
      disabled={disabled}
      bgColor={bgColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      color={color}
    >
      {value}
    </Flex>
  );
};

export default Button;
