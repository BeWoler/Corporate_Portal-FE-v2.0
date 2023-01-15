import { FC, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux';
import { ILayout } from './interface/layout.interface';
import { languageData } from '@/redux/slices/language.slice';
import Header from '@/components/Header/Header';
import lang from '@/content/language.json';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { authAPI } from '@/redux/services/auth.service';

const Layout: FC<ILayout> = ({ children }: ILayout) => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(['language', 'rtToken']);
  const userData = useAppSelector((state) => state.userData);
  const langData = useAppSelector((state) => state.languageData.value);
  const [refresh, { isLoading, data, error }] = authAPI.useRefreshMutation();
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    setLoading(true);
    if (!userData.value.email && router.pathname !== '/404') {
      router.push('/');
    } else if (userData.value.email && router.pathname === '/') {
      router.push('/home');
    }
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [userData, router.pathname]);

  useEffect(() => {
    refresh(userData?.value);
  }, [userData]);

  return (
    <Box
      boxSizing="border-box"
      zIndex={1}
      position={'relative'}
      color={'brand.black'}
    >
      <Header />
      {loading ? (
        <Flex
          align={'center'}
          justify={'center'}
          h={'50vh'}
          direction={'column'}
          gap={'5px'}
        >
          <Text
            as="h2"
            fontWeight={'700'}
            fontSize={'30px'}
            letterSpacing={'4px'}
            color={'brand.black'}
          >
            {langData?.header.title}
          </Text>
          <Spinner
            w={'70px'}
            h={'70px'}
            thickness={'8px'}
            speed="0.65s"
            color="main.mainColor"
            emptyColor="main.btnColor"
          />
        </Flex>
      ) : (
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
      )}
    </Box>
  );
};

export default Layout;
