/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useToggleMenu } from '@/context/MenuContext';
import {
  faCogs,
  faDashboard,
  faFolderOpen,
  faShieldHalved,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            {/* <FontAwesomeIcon className="nav-link-icon " icon={faDashboard} /> */}
            <i className="fa-solid fa-gauge nav-link-icon"></i>
            <span className="nav-link-label">Dashboard</span>
            {/* <span className="badge badge-danger badge-small">2</span> */}
          </Link>
        </li>
        {/* <li>
          <Link href="/files">
            <FontAwesomeIcon className="nav-link-icon " icon={faFolderOpen} />
            <i className="fa-solid fa-folder-tree nav-link-icon"></i>
            <span className="nav-link-label">Categories</span>
          </Link>
        </li> */}
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
            {/* <FontAwesomeIcon className="nav-link-icon " icon={faUsers} /> */}
            <span className="nav-link-label">Users</span>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <i className="fa-solid fa-gear nav-link-icon"></i>
            {/* <FontAwesomeIcon className="nav-link-icon " icon={faCogs} /> */}
            <span className="nav-link-label">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
