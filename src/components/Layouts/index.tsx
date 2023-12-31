import { useToggleMenu } from '@/context/MenuContext';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';

export function Layout({ children }: React.PropsWithChildren<{}>) {
  const router = useRouter();

  const { isMenuOpen, toggleMenu } = useToggleMenu();

  return (
    <>
      <div className="layout-wrapper">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <div className="content-body">
            <div className="content">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="overlay show" onClick={toggleMenu}></div>
      ) : (
        ''
      )}
    </>
  );
}
