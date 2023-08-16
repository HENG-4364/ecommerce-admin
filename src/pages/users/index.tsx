import Users from "@/components/Users";
import { faFilter, faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UsersPage() {
  return (
    <>
      {/* <div className="page-header d-flex justify-content-between">
        <h2>Users</h2>
        <ul className="nav">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link"
              title="Filter"
              data-toggle="dropdown"
            >
             <FontAwesomeIcon icon={faFilter} />
            </a>
            <div className="dropdown-menu dropdown-menu-big p-4 dropdown-menu-right">
              <form>
                <div className="form-group">
                  <label>Role</label>
                  <select className="form-control">
                    <option value="">Select</option>
                    <option value="">User</option>
                    <option value="">Staff</option>
                    <option value="">Admin</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control">
                    <option value="">Select</option>
                    <option value="">Active</option>
                    <option value="">Blocked</option>
                    <option value="">Admin</option>
                  </select>
                </div>
                <button className="btn btn-primary">Filter</button>
              </form>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" title="View Grid">
            <FontAwesomeIcon icon={faTh} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" title="View List">
            <FontAwesomeIcon icon={faThList} />
            </a>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Users/>
        </div>
      </div> */}
    </>
  );
}
