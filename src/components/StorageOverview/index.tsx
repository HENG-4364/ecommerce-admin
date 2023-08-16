/* eslint-disable @next/next/no-img-element */
import {
  faCloudUpload,
  faFile,
  faFileCirclePlus,
  faFolder,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StorageOverview() {
  return (
    <div className="sidebar-group d-print-none">
      <div className="sidebar primary-sidebar show" id="storage">
        <div className="sidebar-header">
          <h4>Storage Overview</h4>
        </div>
        <div className="sidebar-content">
          <div id="justgage_five" className="mb-3"></div>
          <div>
            <div className="list-group list-group-flush mb-3">
              <a
                href="#"
                className="list-group-item px-0 d-flex align-items-center"
              >
                <div className="mr-3">
                  <figure className="avatar">
                    <span className="avatar-title bg-primary-bright text-primary rounded">
                      <FontAwesomeIcon icon={faImage} />
                    </span>
                  </figure>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">Images</p>
                  <span className="small text-muted">259 Files</span>
                </div>
                <div>
                  <h5 className="text-primary">15.7 GB</h5>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item px-0 d-flex align-items-center"
              >
                <div className="mr-3">
                  <figure className="avatar">
                    <span className="avatar-title bg-primary-bright text-primary rounded">
                      <FontAwesomeIcon icon={faVideo} />
                    </span>
                  </figure>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">Videos</p>
                  <span className="small text-muted">8 Files</span>
                </div>
                <div>
                  <h5 className="text-primary">20 GB</h5>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item px-0 d-flex align-items-center"
              >
                <div className="mr-3">
                  <figure className="avatar">
                    <span className="avatar-title bg-primary-bright text-primary rounded">
                      <FontAwesomeIcon icon={faFolder} />
                    </span>
                  </figure>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">Documents</p>
                  <span className="small text-muted">46 Files</span>
                </div>
                <div>
                  <h5 className="text-primary">10.5 GB</h5>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item px-0 d-flex align-items-center"
              >
                <div className="mr-3">
                  <figure className="avatar">
                    <span className="avatar-title bg-primary-bright text-primary rounded">
                      <FontAwesomeIcon icon={faFile} />
                    </span>
                  </figure>
                </div>
                <div className="flex-grow-1">
                  <p className="mb-0">Other Files</p>
                  <span className="small text-muted">50 Files</span>
                </div>
                <div>
                  <h5 className="text-primary">2.8 GB</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="card border shadow-none">
            <div className="card-body text-center">
              <img
                className="img-fluid mb-3"
                src="https://filedash.laborasyon.com/demos/purple/assets/media/svg/upgrade.svg"
                alt="upgrade"
              />
              <h5>Get an Upgrade</h5>
              <p className="text-muted">
                Get additional 500 GB space for your documents and files. Unlock
                now for more space.
              </p>
              <button className="btn btn-primary">Upgrade</button>
            </div>
          </div>
        </div>
        <div className="sidebar-footer">
          <button className="btn btn-lg btn-block btn-outline-primary upload">
            <FontAwesomeIcon icon={faCloudUpload} />
          </button>
        </div>
      </div>

      <div className="sidebar" id="view-detail">
        <div className="sidebar-header">
          <h4>View Detail</h4>
          <a href="#" className="btn btn-light btn-floating sidebar-close-btn">
            <i className="ti-angle-right"></i>
          </a>
        </div>
        <div className="sidebar-content">
          <figure className="avatar mb-4">
            <span className="avatar-title bg-info-bright text-info rounded-pill">
              <i className="ti-file"></i>
            </span>
          </figure>
          <div className="row mb-3">
            <div className="col-md-5">File name:</div>
            <div className="col-md-7">
              <a href="#" className="link-1">
                Meeting-notes.doc
              </a>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">File type:</div>
            <div className="col-md-7">Word File</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">File size:</div>
            <div className="col-md-7">22 KB</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">Created:</div>
            <div className="col-md-7">Monday, July 02, 2020 9:34am</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">Modified:</div>
            <div className="col-md-7 text-success">
              Monday, July 02, 2020 9:34am
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">Accessed:</div>
            <div className="col-md-7">Monday, July 03, 2020 10:22am</div>
          </div>
        </div>
        <div className="sidebar-footer">
          <button className="btn btn-lg btn-block btn-primary">
            <i className="ti-share mr-3"></i> Share
          </button>
        </div>
      </div>

      <div className="sidebar" id="settings">
        <div className="sidebar-header">
          <h4>Settings</h4>
          <a href="#" className="btn btn-light btn-floating sidebar-close-btn">
            <i className="ti-angle-right"></i>
          </a>
        </div>
        <div className="sidebar-content">
          <ul className="list-group list-group-flush">
            <li className="list-group-item pl-0 pr-0">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  defaultChecked
                />
                <label className="custom-control-label" htmlFor="customSwitch1">
                  Allow notifications.
                </label>
              </div>
            </li>
            <li className="list-group-item pl-0 pr-0">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch2"
                />
                <label className="custom-control-label" htmlFor="customSwitch2">
                  Hide user requests
                </label>
              </div>
            </li>
            <li className="list-group-item pl-0 pr-0">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch3"
                  defaultChecked
                />
                <label className="custom-control-label" htmlFor="customSwitch3">
                  Speed up demands
                </label>
              </div>
            </li>
            <li className="list-group-item pl-0 pr-0">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch4"
                  defaultChecked
                />
                <label className="custom-control-label" htmlFor="customSwitch4">
                  Hide menus
                </label>
              </div>
            </li>
            <li className="list-group-item pl-0 pr-0">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch5"
                />
                <label className="custom-control-label" htmlFor="customSwitch5">
                  Remember next visits
                </label>
              </div>
            </li>
            <li className="list-group-item pl-0 pr-0">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch6"
                />
                <label className="custom-control-label" htmlFor="customSwitch6">
                  Enable report generation.
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
