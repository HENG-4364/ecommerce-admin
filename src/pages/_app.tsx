import '../styles/main.scss';
import { Layout } from '@/components/Layouts';
import { ToggleMenuProvider } from '@/context/MenuContext';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ToggleMenuProvider>
        {router.pathname === '/login' ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ToggleMenuProvider>
    </>
  );
}
