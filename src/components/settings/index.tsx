export function Settings() {
    return (
        <>
            <form>
                <div className="d-flex mb-3">
                    <figure className="mr-3">
                        <img width="80" className="rounded-pill" src="../../assets/media/image/user/women_avatar1.jpg" alt="..."/>
                    </figure>
                    <div>
                        <p>Roxana Roussell</p>
                        <button className="btn btn-outline-primary mr-2">Change Avatar</button>
                        <button className="btn btn-outline-danger">Remove Avatar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value="Roxana Roussell"/>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" value="roxana-roussell"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" value="wtaffe3@addthis.com"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Role</label>
                            <select className="form-control">
                                <option value="">All</option>
                                <option value="">Admin</option>
                                <option value="">User</option>
                                <option value="" >Staff</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select className="form-control">
                                <option value="">All</option>
                                <option value="" >Active</option>
                                <option value="">Blocked</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <select className="form-control">
                                <option value="">All</option>
                                <option value="">Sales</option>
                                <option value="">Development</option>
                                <option value="">Management</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary">Save Changes</button>
            </form>
        </>
    )
}