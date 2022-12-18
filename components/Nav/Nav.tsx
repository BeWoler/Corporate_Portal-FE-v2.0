import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { INav } from './interface/nav.interface';

const Nav = ({ navItems }: INav) => {
  return (
    <Flex as="nav">
      <Box
        as="ul"
        listStyleType={'none'}
        display={'inline-flex'}
        gap={'20px'}
        alignContent={'center'}
      >
        {navItems?.map((item) => {
          return (
            <Text
              as="li"
              key={item.title}
              color={'brand.white'}
              position={'relative'}
              transition={'all ease-in-out .3s'}
              _after={{
                content: `""`,
                borderTopLeftRadius: '100px',
                borderTopRightRadius: '100px',
                position: 'absolute',
                bottom: '-53%',
                left: '50%',
                width: '0%',
                height: '5px',
                backgroundColor: 'transparent',
                transition: 'all .3s ease-out',
              }}
              _hover={{
                color: 'main.btnHoverColor',
                _after: {
                  left: '0',
                  width: '100%',
                  backgroundColor: 'main.btnHoverColor',
                },
              }}
            >
              <Link href={item.link}>{item.title}</Link>
            </Text>
          );
        })}
      </Box>
    </Flex>
  );
};

export default Nav;
