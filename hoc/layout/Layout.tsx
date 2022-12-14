import { FC, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useAppDispatch } from '@/redux/hooks/redux';
import { ILayout } from './interface/layout.interface';
import { languageData } from '@/redux/services/language.slice';
import Header from '@/components/Header/Header';
import lang from '@/content/language.json';
import { Box } from '@chakra-ui/react';

const Layout: FC<ILayout> = ({ children }: ILayout) => {
  const [cookies] = useCookies(['language']);
  const dispatch = useAppDispatch();

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

  return (
    <Box boxSizing="border-box" zIndex={2} position={'relative'}>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
