import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!router.pathname.startsWith('/dashboard')) {
      router.push('/dashboard');
    }
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
