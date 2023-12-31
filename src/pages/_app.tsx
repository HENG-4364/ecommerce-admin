import '../styles/main.scss';
import { Layout } from '@/components/Layouts';
import { ToggleMenuProvider } from '@/context/MenuContext';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/libs/apollo';
import jwt from 'jsonwebtoken';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <>
      <ApolloProvider client={client}>
        <ToggleMenuProvider>
          {router.pathname === '/login' ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ToggleMenuProvider>
      </ApolloProvider>
    </>
  );
}
