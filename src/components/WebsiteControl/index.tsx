import Link from 'next/link';

export default function WebsiteControl() {
  return (
    <>
      <div className="mt-5">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <img
                        src="/categories.png"
                        alt=""
                        style={{ height: '5rem' }}
                      />
                    </div>
                    <div className="media-body text-right align-self-center">
                      <Link href={'/website/categories'}>
                        <i className="fa-solid fa-list fa-xl mb-3"></i>
                      </Link>
                      <h3>Catgories</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <img
                        src="/product.png"
                        alt=""
                        style={{ height: '5rem' }}
                      />
                    </div>
                    <div className="media-body text-right align-self-center">
                      <Link href={'/website/products'}>
                        <i className="fa-solid fa-list fa-xl mb-3"></i>
                      </Link>

                      <h3>Products</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-graph success font-large-2 float-left"></i>
                    </div>
                    <div className="media-body text-right">
                      <h3>64.89 %</h3>
                      <span>Bounce Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-pointer danger font-large-2 float-left"></i>
                    </div>
                    <div className="media-body text-right">
                      <h3>423</h3>
                      <span>Total Visits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-pointer danger font-large-2 float-left"></i>
                    </div>
                    <div className="media-body text-right">
                      <h3>423</h3>
                      <span>Total Visits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-pointer danger font-large-2 float-left"></i>
                    </div>
                    <div className="media-body text-right">
                      <h3>423</h3>
                      <span>Total Visits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-pointer danger font-large-2 float-left"></i>
                    </div>
                    <div className="media-body text-right">
                      <h3>423</h3>
                      <span>Total Visits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="danger">278</h3>
                      <span>New Projects</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-rocket danger font-large-2 float-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="success">156</h3>
                      <span>New Clients</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-user success font-large-2 float-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="warning">64.89 %</h3>
                      <span>Conversion Rate</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-pie-chart warning font-large-2 float-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="media-body text-left">
                      <h3 className="primary">423</h3>
                      <span>Support Tickets</span>
                    </div>
                    <div className="align-self-center">
                      <i className="icon-support primary font-large-2 float-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
