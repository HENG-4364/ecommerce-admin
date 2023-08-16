/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useToggleMenu } from "@/context/MenuContext";
import {
  faCogs,
  faDashboard,
  faFolderOpen,
  faShieldHalved,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Sidebar() {
  const { isMenuOpen } = useToggleMenu();
  return (
    <div className={`navigation ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <a href="index.html">
          <img src="/assets/media/image/logo.png" />
        </a>
      </div>
      <ul>
        <li>
          <Link href="/">
            <FontAwesomeIcon className="nav-link-icon " icon={faDashboard} />
            <span className="nav-link-label">Dashboard</span>
            {/* <span className="badge badge-danger badge-small">2</span> */}
          </Link>
        </li>
        <li>
          <Link href="/files">
            <FontAwesomeIcon className="nav-link-icon " icon={faFolderOpen} />
            <span className="nav-link-label">Categories</span>
          </Link>
        </li>
        <li>
          <Link href="/activities">
            <FontAwesomeIcon className="nav-link-icon " icon={faShieldHalved} />
            <span className="nav-link-label">Products</span>
            {/* <span className="badge badge-warning">New</span> */}
          </Link>
        </li>
        <li className="flex-grow-1">
          <Link href="/users">
            <FontAwesomeIcon className="nav-link-icon " icon={faUsers} />
            <span className="nav-link-label">Users</span>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <FontAwesomeIcon className="nav-link-icon " icon={faCogs} />
            <span className="nav-link-label">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
