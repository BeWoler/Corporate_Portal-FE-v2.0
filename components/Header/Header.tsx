import { Box, Flex, Text, Avatar, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useAppSelector } from '../../redux/hooks/redux';
import Button from '../common/Button/Button/Button';

const Header = () => {
  const [cookies, setCookie] = useCookies(['language']);
  const [lang, setLang] = useState<string>('en');
  const languageData = useAppSelector((state) => state.languageData.value);
  const userData = useAppSelector((state) => state.userData.value);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => setLang(cookies.language), [cookies.language]);

  return (
    <Flex
      justify={'space-around'}
      w={'100%'}
      h={'50px'}
      background={'main.mainColorRGB'}
      color={'brand.black'}
      align={'center'}
    >
      <Text
        as="h1"
        fontWeight={'600'}
        fontSize={'30px'}
        letterSpacing={'4px'}
        color={'brand.white'}
      >
        {languageData?.header.title}
      </Text>
      <Flex align={'center'} gap={'10px'}>
        <Button
          value={lang?.toUpperCase()}
          transition={'all ease .3s'}
          bgHoverColor={'main.btnHoverColor'}
          fontW={'600'}
          borderRadius={'100px'}
          h={'30px'}
          w={'fit-content'}
          p={'20px'}
        />
        {userData.username ? (
          <Flex align={'center'} direction={'row'} gap={'10px'} ml={'20px'}>
            <Avatar name={userData.username} size={'sm'} />
            <Box>{userData.username}</Box>
          </Flex>
        ) : (
          <Button
            value={languageData.header.signIn}
            transition={'all ease .3s'}
            bgHoverColor={'main.btnHoverColor'}
            fontW={'500'}
            borderRadius={'100px'}
            h={'30px'}
            w={'fit-content'}
            p={'20px'}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
