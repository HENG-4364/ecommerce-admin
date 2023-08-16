export function Login() {
  return (
    <>
      <div className="form-wrapper rounded" style={{ width: '350px', margin: 'auto',backgroundColor:'#F7F7F7',padding:"50px" }}>
        <div id="logo" className="text-center">
          <img src="../../assets/media/image/logo-dark.png" alt="image" />
        </div>

        <h5 className="text-center mt-3">Sign in</h5>

        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username or email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group d-flex justify-content-between">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
            </div>
            <a href="#">Reset password</a>
          </div>
          <button className="btn btn-primary btn-block">Sign in</button>
          <hr />
          <p className="text-muted">Login with your social media account.</p>
        </form>
      </div>
    </>
  );
}
