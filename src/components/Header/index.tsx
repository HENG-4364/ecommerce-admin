/* eslint-disable @next/next/no-img-element */
import { useToggleMenu } from "@/context/MenuContext";
import {
  faArrowDown,
  faBars,
  faBell,
  faCloud,
  faCog,
  faMoon,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  const { isMenuOpen, toggleMenu } = useToggleMenu();
  return (
    <div className="header d-print-none">
      <div className="header-container">
        <div className="header-body">
          <div className="header-body-left">
            <ul className="navbar-nav">
              <li className="nav-item navigation-toggler">
                <a href="#" className="nav-link" onClick={toggleMenu}>
                  <FontAwesomeIcon className="nav-link-icon " icon={faBars} />
                </a>
              </li>
              <li className="nav-item">
                <div className="header-search-form">
                  <form>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <button className="btn">
                          <FontAwesomeIcon
                            className="nav-link-icon "
                            icon={faSearch}
                          />
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search something..."
                      />
                      <div className="input-group-append">
                        <button className="btn header-search-close-btn">
                          <i data-feather="x"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>

          <div className="header-body-right">
            <ul className="navbar-nav">

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link profile-nav-link dropdown-toggle"
                  title="User menu"
                  data-toggle="dropdown"
                >
                  <span className="mr-2 d-sm-inline d-none">
                    Seng Lyheng
                  </span>
                  <figure className="avatar avatar-sm">
                    <img
                      src="/placeholder.png"
                      className="rounded-circle"
                      alt="avatar"
                    />
                  </figure>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                  <div
                    className="text-center py-4"
                    data-background-image="../../assets/media/image/image1.jpg"
                  >
                    <figure className="avatar avatar-lg mb-3 border-0">
                      <img
                        src="../../assets/media/image/user/man_avatar3.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </figure>
                    <h5 className="mb-0">Bony Gidden</h5>
                  </div>
                  <div className="list-group list-group-flush">
                    <a
                      href="#"
                      className="list-group-item"
                      data-sidebar-target="#settings"
                    >
                      Settings
                    </a>
                    <a
                      href="http://bifor.laborasyon.com/login"
                      className="list-group-item text-danger"
                      data-sidebar-target="#settings"
                    >
                      Sign Out!
                    </a>
                  </div>
                  <div className="pb-0 p-4">
                    <div className="mb-4">
                      <h6 className="d-flex justify-content-between">
                        Completed Tasks
                        <span className="float-right">%68</span>
                      </h6>
                      <div className="progress" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item header-toggler">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </li>
          <li className="nav-item sidebar-toggler">
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon={faCloud} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
