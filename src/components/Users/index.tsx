import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Users() {
  return (
    <>
      <div className="card border-0">
        <div
          className="table-responsive"
          style={{ overflow: 'hidden', outline: 'none' }}
          tabIndex={5}
        >
          <div
            id="user-list_wrapper"
            className="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="dataTables_length" id="user-list_length">
                  <label>
                    Show
                    <select
                      name="user-list_length"
                      aria-controls="user-list"
                      className="custom-select custom-select-sm form-control form-control-sm"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    entries
                  </label>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div id="user-list_filter" className="dataTables_filter" style={{float:"right"}}>
                  <label>
                    Search:
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder=""
                      aria-controls="user-list"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <table
                  id="user-list"
                  className="table table-borderless table-hover dataTable no-footer"
                  role="grid"
                  aria-describedby="user-list_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="dt-body-center sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        aria-label=""
                        style={{ width: '59.9688px' }}
                      >
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="user-list-select-all"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="user-list-select-all"
                          ></label>
                        </div>
                      </th>
                      <th
                        className="sorting_asc"
                        tabIndex={0}
                        aria-controls="user-list"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label="Name: activate to sort column descending"
                        style={{ width: '289.219px' }}
                      >
                        Name
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="user-list"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Email: activate to sort column ascending"
                        style={{ width: '335.281px' }}
                      >
                        Email
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="user-list"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Storage: activate to sort column ascending"
                        style={{ width: '113.266px' }}
                      >
                        Storage
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="user-list"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Role: activate to sort column ascending"
                        style={{ width: '89.5781px' }}
                      >
                        Role
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="user-list"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Status: activate to sort column ascending"
                        style={{ width: '111.188px' }}
                      >
                        Status
                      </th>
                      <th
                        className="sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Action"
                        style={{ width: '98.5px' }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" className="odd">
                      <td className=" dt-body-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck5"
                          ></label>
                        </div>
                      </td>
                      <td className="sorting_1">
                        <a href="#">
                          <figure className="avatar avatar-sm mr-2">
                            <img
                              src="../../assets/media/image/user/man_avatar1.jpg"
                              className="rounded-circle"
                              alt="avatar"
                            />
                          </figure>
                          Aurlie Kimmel
                        </a>
                      </td>
                      <td>akimmel5@globo.com</td>
                      <td>
                        <div className="progress" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '25%' }}
                            // aria-valuenow="0"
                            // aria-valuemin="0"
                            // aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>User</td>
                      <td>
                        <span className="badge bg-success-bright text-success">
                          Active
                        </span>
                      </td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-floating"
                            data-toggle="dropdown"
                          >
                           <FontAwesomeIcon icon={faEllipsis} />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              href="#"
                              className="dropdown-item"
                              data-sidebar-target="#folder-info"
                            >
                              View Detail
                            </a>
                            <a href="#" className="dropdown-item">
                              Edit
                            </a>
                            <a href="#" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row" className="even">
                      <td className=" dt-body-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck7"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck7"
                          ></label>
                        </div>
                      </td>
                      <td className="sorting_1">
                        <a href="#">
                          <figure className="avatar avatar-sm mr-2">
                            <img
                              src="../../assets/media/image/user/man_avatar5.jpg"
                              className="rounded-circle"
                              alt="avatar"
                            />
                          </figure>
                          Erl Srutton
                        </a>
                      </td>
                      <td>esrutton7@geocities.jp</td>
                      <td>
                        <div className="progress" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '55%' }}
                            // aria-valuenow="0"
                            // aria-valuemin="0"
                            // aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>Admin</td>
                      <td>
                        <span className="badge bg-danger-bright text-danger">
                          Blocked
                        </span>
                      </td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-floating"
                            data-toggle="dropdown"
                          >
                            <FontAwesomeIcon icon={faEllipsis} />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              href="#"
                              className="dropdown-item"
                              data-sidebar-target="#folder-info"
                            >
                              View Detail
                            </a>
                            <a href="#" className="dropdown-item">
                              Edit
                            </a>
                            <a href="#" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr role="row" className="odd">
                      <td className=" dt-body-center">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck0"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck0"
                          ></label>
                        </div>
                      </td>
                      <td className="sorting_1">
                        <a href="#">
                          <figure className="avatar avatar-sm mr-2">
                            <img
                              src="../../assets/media/image/user/man_avatar3.jpg"
                              className="rounded-circle"
                              alt="avatar"
                            />
                          </figure>
                          Hillery Ovenell
                        </a>
                      </td>
                      <td>hovenell0@1und1.de</td>
                      <td>
                        <div className="progress" style={{ height: '5px' }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '40%' }}
                            // aria-valuenow="0"
                            // aria-valuemin="0"
                            // aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                      <td>Staff</td>
                      <td>
                        <span className="badge bg-danger-bright text-danger">
                          Blocked
                        </span>
                      </td>
                      <td>
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn btn-floating"
                            data-toggle="dropdown"
                          >
                            <FontAwesomeIcon icon={faEllipsis} />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              href="#"
                              className="dropdown-item"
                              data-sidebar-target="#folder-info"
                            >
                              View Detail
                            </a>
                            <a href="#" className="dropdown-item">
                              Edit
                            </a>
                            <a href="#" className="dropdown-item">
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div
                  className="dataTables_info"
                  id="user-list_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 1 to 10 of 12 entries
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="user-list_paginate"
                  style={{float:"right"}}
                >
                  <ul className="pagination">
                    <li
                      className="paginate_button page-item previous disabled"
                      id="user-list_previous"
                    >
                      <a
                        href="#"
                        aria-controls="user-list"
                        data-dt-idx="0"
                        tabIndex={0}
                        className="page-link"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="user-list"
                        data-dt-idx="1"
                        tabIndex={0}
                        className="page-link"
                      >
                        1
                      </a>
                    </li>
                    <li className="paginate_button page-item ">
                      <a
                        href="#"
                        aria-controls="user-list"
                        data-dt-idx="2"
                        tabIndex={0}
                        className="page-link"
                      >
                        2
                      </a>
                    </li>
                    <li
                      className="paginate_button page-item next"
                      id="user-list_next"
                    >
                      <a
                        href="#"
                        aria-controls="user-list"
                        data-dt-idx="3"
                        tabIndex={0}
                        className="page-link"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
