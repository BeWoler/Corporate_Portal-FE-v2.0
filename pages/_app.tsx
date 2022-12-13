import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';
import chakraTheme from '../theme';
import Layout from '../hoc/layout/Layout';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useEffect } from 'react';

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  const [cookie, setCookie] = useCookies(['language']);
  useEffect(() => {
    if (!cookie.language) {
      setCookie('language', 'en', { path: '/' });
    }
  }, [cookie.language, setCookie]);

  return (
    <Provider store={store}>
      <ChakraProvider theme={chakraTheme}>
        <CookiesProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CookiesProvider>
      </ChakraProvider>
    </Provider>
  );
}
