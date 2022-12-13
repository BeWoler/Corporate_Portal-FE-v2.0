import { Flex } from '@chakra-ui/react';
import { IButton } from './interface/button.interface';

const Button = ({
  value = '',
  w = '100px',
  h = '50px',
  p,
  m,
  bgColor = 'main.btnColor',
  borderColor,
  borderWidth,
  color = 'brand.white',
  onClick,
  disabled = false,
  hoverColor,
  bgHoverColor,
  transition,
  fontS,
  fontW,
  borderRadius,
}: IButton) => {
  return (
    <Flex
      as="button"
      w={w}
      h={h}
      p={p}
      m={m}
      align={'center'}
      justify={'center'}
      overflow={'hidden'}
      onClick={onClick}
      disabled={disabled}
      bgColor={bgColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      color={color}
      transition={transition}
      _hover={{ color: hoverColor, background: bgHoverColor }}
      fontSize={fontS}
      fontWeight={fontW}
      borderRadius={borderRadius}
    >
      {value}
    </Flex>
  );
};

export default Button;
