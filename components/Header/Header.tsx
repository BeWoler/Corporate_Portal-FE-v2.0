import { Box, Flex, Text, Avatar, useBoolean } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../redux/hooks/redux';
import Button from '../common/Button/Button/Button';
import LanguageTab from '../common/LanguageTab/LanguageTab';

const Header = () => {
  const [isOpen, setOpen] = useBoolean();
  const languageData = useAppSelector((state) => state.languageData.value);
  const userData = useAppSelector((state) => state.userData.value);
  const router = useRouter();

  return (
    <Flex
      as="header"
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
        <Link href={'/'}>{languageData?.header.title}</Link>
      </Text>
      <Flex align={'center'} gap={'30px'}>
        <Flex direction={'column'} position={'relative'}>
          <Button
            value={languageData?.header.language}
            transition={'all ease .3s'}
            bgHoverColor={'main.btnHoverColor'}
            fontW={'600'}
            p={'20px'}
            onClick={setOpen.toggle}
          />
          <Box
            as="button"
            onClick={setOpen.toggle}
            transition={'all ease-in-out .4s'}
            opacity={isOpen ? 1 : 0}
            transform={isOpen ? 'translateY(0px)' : 'translateY(-200px)'}
            position={'relative'}
            zIndex={-1}
          >
            <LanguageTab />
          </Box>
        </Flex>
        {userData.username && (
          <Flex align={'center'} direction={'row'} gap={'10px'} ml={'20px'}>
            <Avatar name={userData.username} size={'sm'} />
            <Box>{userData.username}</Box>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
