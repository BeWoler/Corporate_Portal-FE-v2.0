import { Box, Flex, Text, Avatar, useBoolean } from '@chakra-ui/react';
import Link from 'next/link';
import { useAppSelector } from '../../redux/hooks/redux';
import Button from '../common/Button/Button/Button';
import LanguageTab from '../common/LanguageTab/LanguageTab';
import Nav from '../Nav/Nav';

const Header = () => {
  const [isOpen, setOpen] = useBoolean();
  const languageData = useAppSelector((state) => state.languageData.value);
  const userData = useAppSelector((state) => state.userData.value);
  const contentData = useAppSelector((state) => state.contentData.value);

  const navData = [
    { title: languageData?.nav.main, link: contentData?.navLinks.home },
    { title: languageData?.nav.chats, link: contentData?.navLinks.chats },
    { title: languageData?.nav.posts, link: contentData?.navLinks.posts },
    { title: languageData?.nav.network, link: contentData?.navLinks.network },
    { title: languageData?.nav.settings, link: contentData?.navLinks.settings },
  ];

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
        <Link href={contentData?.navLinks.home}>
          {languageData?.header.title}
        </Link>
      </Text>
      <Flex align={'center'} gap={'30px'}>
        <Flex>
          <Nav navItems={navData} />
        </Flex>
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
        {userData.isLogin && (
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
