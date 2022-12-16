import { FC, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux';
import { ILayout } from './interface/layout.interface';
import { languageData } from '@/redux/services/language.slice';
import Header from '@/components/Header/Header';
import lang from '@/content/language.json';
import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Layout: FC<ILayout> = ({ children }: ILayout) => {
  const [cookies] = useCookies(['language']);
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.userData);
  const router = useRouter();

  useEffect(() => {
    function getLang() {
      switch (cookies.language) {
        case 'en':
          return dispatch(languageData(lang?.en));
        case 'ru':
          return dispatch(languageData(lang?.ru));
      }
    }
    getLang();
  }, [cookies.language, dispatch]);

  // useEffect(() => {
  //   !userData.value.isLogin &&
  //     router.pathname !== '/404' &&
  //     router.push('/login');
  // }, [userData, router.pathname]);

  return (
    <Box
      boxSizing="border-box"
      zIndex={1}
      position={'relative'}
      color={'brand.black'}
    >
      <Header />
      <Flex
        direction={'column'}
        justifyContent={'center'}
        align={'center'}
        mt={'50px'}
        position={'relative'}
        zIndex={-2}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
