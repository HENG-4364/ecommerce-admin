
import { useToggleMenu } from '@/context/MenuContext';
import Link from 'next/link';

export function Sidebar() {
  const { isMenuOpen } = useToggleMenu();
  return (
    <div className={`navigation ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <a href="index.html">
          <img src="/assets/media/image/logo.png" />
        </a>
      </div>
      <ul>
        <li>
          <Link href="/">
            <i className="fa-solid fa-gauge nav-link-icon"></i>
            <span className="nav-link-label">Dashboard</span>           
          </Link>
        </li>
        <li>
          <Link href="/website">
            <i className="fa-solid fa-window-maximize nav-link-icon"></i>
            <span className="nav-link-label">Your Website</span>
            <span className="badge badge-danger">New</span>
          </Link>
        </li>
        <li className="flex-grow-1">
          <Link href="/users">
            <i className="fa-solid fa-user-shield nav-link-icon"></i>          
            <span className="nav-link-label">Users</span>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <i className="fa-solid fa-gear nav-link-icon"></i>
            <span className="nav-link-label">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
