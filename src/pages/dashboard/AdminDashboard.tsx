// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import OperatorDashboard from "./OperatorDashboard";

const AdminDashboard = () => {
  // const { user } = useContext(AuthContext);

  // if (user?.role === "operator") {
  //   return <OperatorDashboard />;
  // }

  return (
    <div className="grid grid-cols-12 gap-x-6">
      <div className="col-span-12 xl:col-span-4 md:col-span-6">
        <div className="card">
          <div className="card-header !pb-0 !border-b-0">
            <h5>Daily Sales</h5>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="font-light flex items-center mb-0">
                <i className="feather icon-arrow-up text-success-500 text-[30px] mr-1.5"></i>
                $ 249.95
              </h3>
              <p className="mb-0">67%</p>
            </div>
            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mt-6 dark:bg-themedark-bodybg">
              <div
                className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-3/4"
                role="progressbar"
                // style="width: 75%"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4 md:col-span-6">
        <div className="card">
          <div className="card-header !pb-0 !border-b-0">
            <h5>Monthly Sales</h5>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="font-light flex items-center mb-0">
                <i className="feather icon-arrow-down text-danger-500 text-[30px] mr-1.5"></i>
                $ 2.942.32
              </h3>
              <p className="mb-0">36%</p>
            </div>
            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mt-6 dark:bg-themedark-bodybg">
              <div
                className="theme-bg-2 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[35%]"
                role="progressbar"
                // style="width: 35%"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4">
        <div className="card">
          <div className="card-header !pb-0 !border-b-0">
            <h5>Yearly Sales</h5>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="font-light flex items-center mb-0">
                <i className="feather icon-arrow-up text-success-500 text-[30px] mr-1.5"></i>
                $8.638.32
              </h3>
              <p className="mb-0">80%</p>
            </div>
            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mt-6 dark:bg-themedark-bodybg">
              <div
                className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[80%]"
                role="progressbar"
                // style="width: 80%"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4">
        <div className="card card-social">
          <div className="card-body border-b border-theme-border dark:border-themedark-border">
            <div className="flex items-center justify-center">
              <div className="shrink-0">
                <i className="fab fa-facebook-f text-primary-500 text-[36px]"></i>
              </div>
              <div className="grow ltr:text-right rtl:text-left">
                <h3 className="mb-2">12,281</h3>
                <h5 className="text-success-500 mb-0">
                  +7.2% <span className="text-muted">Total Likes</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-6">
                <h6 className="text-center mb-2.5">
                  <span className="text-muted m-r-5">Target:</span>35,098
                </h6>
                <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                  <div
                    className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[60%]"
                    role="progressbar"
                    // style="width: 60%"
                  ></div>
                </div>
              </div>
              <div className="col-span-6">
                <h6 className="text-center mb-2.5">
                  <span className="text-muted m-r-5">Duration:</span>350
                </h6>
                <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                  <div
                    className="theme-bg-2 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[45%]"
                    role="progressbar"
                    // style="width: 45%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4 md:col-span-6">
        <div className="card card-social">
          <div className="card-body border-b border-theme-border dark:border-themedark-border">
            <div className="flex items-center justify-center">
              <div className="shrink-0">
                <i className="fab fa-twitter text-primary-500 text-[36px]"></i>
              </div>
              <div className="grow ltr:text-right rtl:text-left">
                <h3 className="mb-2">11,200</h3>
                <h5 className="text-purple-500 mb-0">
                  +6.2% <span className="text-muted">Total Likes</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-6">
                <h6 className="text-center mb-2.5">
                  <span className="text-muted m-r-5">Target:</span>34,185
                </h6>
                <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                  <div
                    className="bg-success-500 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[40%]"
                    role="progressbar"
                    // style="width: 40%"
                  ></div>
                </div>
              </div>
              <div className="col-span-6">
                <h6 className="text-center mb-2.5">
                  <span className="text-muted m-r-5">Duration:</span>800
                </h6>
                <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                  <div
                    className="bg-primary-500 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[60%]"
                    role="progressbar"
                    // style="width: 70%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4 md:col-span-6">
        <div className="card card-social">
          <div className="card-body border-b border-theme-border dark:border-themedark-border">
            <div className="flex items-center justify-center">
              <div className="shrink-0">
                <i className="fab fa-google-plus-g text-danger-500 text-[36px]"></i>
              </div>
              <div className="grow ltr:text-right rtl:text-left">
                <h3 className="mb-2">10,500</h3>
                <h5 className="text-purple-500 mb-0">
                  +5.9% <span className="text-muted">Total Likes</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-6">
                <h6 className="text-center mb-2.5">
                  <span className="text-muted m-r-5">Target:</span>25,998
                </h6>
                <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                  <div
                    className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[80%]"
                    role="progressbar"
                    // style="width: 80%"
                  ></div>
                </div>
              </div>
              <div className="col-span-6">
                <h6 className="text-center mb-2.5">
                  <span className="text-muted m-r-5">Duration:</span>900
                </h6>
                <div className="w-full bg-theme-bodybg rounded-lg h-1.5 dark:bg-themedark-bodybg">
                  <div
                    className="theme-bg-2 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[50%]"
                    role="progressbar"
                    // style="width: 50%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-4 md:col-span-6">
        <div className="card user-list">
          <div className="card-header">
            <h5>Rating</h5>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-between gap-1 mb-5">
              <h2 className="font-light flex items-center m-0">
                4.7
                <i className="fas fa-star text-[10px] ml-2.5 text-warning-500"></i>
              </h2>
              <h6 className="flex items-center m-0">
                0.4
                <i className="fas fa-caret-up text-success text-[22px] ml-2.5"></i>
              </h6>
            </div>

            <div className="flex items-center justify-between gap-2 mb-2">
              <h6 className="flex items-center gap-1">
                <i className="fas fa-star text-[10px] mr-2.5 text-warning-500"></i>
                5
              </h6>
              <h6>384</h6>
            </div>
            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mb-6 mt-3 dark:bg-themedark-bodybg">
              <div
                className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[70%]"
                role="progressbar"
                // style="width: 70%"
              ></div>
            </div>

            <div className="flex items-center justify-between gap-2 mb-2">
              <h6 className="flex items-center gap-1">
                <i className="fas fa-star text-[10px] mr-2.5 text-warning-500"></i>
                4
              </h6>
              <h6>145</h6>
            </div>
            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mb-6 mt-3 dark:bg-themedark-bodybg">
              <div
                className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[35%]"
                role="progressbar"
                // style="width: 35%"
              ></div>
            </div>

            <div className="flex items-center justify-between gap-2 mb-2">
              <h6 className="flex items-center gap-1">
                <i className="fas fa-star text-[10px] mr-2.5 text-warning-500"></i>
                3
              </h6>
              <h6>24</h6>
            </div>
            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mb-6 mt-3 dark:bg-themedark-bodybg">
              <div
                className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[25%]"
                role="progressbar"
                // style="width: 25%"
              ></div>
            </div>

            <div className="flex items-center justify-between gap-2 mb-2">
              <h6 className="flex items-center gap-1">
                <i className="fas fa-star text-[10px] mr-2.5 text-warning-500"></i>
                2
              </h6>
              <h6>1</h6>
            </div>
            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mb-6 mt-3 dark:bg-themedark-bodybg">
              <div
                className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-[10%]"
                role="progressbar"
                // style="width: 10%"
              ></div>
            </div>

            <div className="flex items-center justify-between gap-2 mb-2">
              <h6 className="flex items-center gap-1">
                <i className="fas fa-star text-[10px] mr-2.5 text-warning-500"></i>
                1
              </h6>
              <h6>0</h6>
            </div>
            <div className="w-full bg-theme-bodybg rounded-lg h-1.5 mt-4 dark:bg-themedark-bodybg">
              <div
                className="theme-bg-1 h-full rounded-lg shadow-[0_10px_20px_0_rgba(0,0,0,0.3)] w-0"
                role="progressbar"
                // style="width: 0%"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-8 md:col-span-6">
        <div className="card table-card">
          <div className="card-header">
            <h5>Recent Users</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <tbody>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-full max-w-10 w-[40px]"
                        // style="width: 40px"
                        src="../assets/images/user/avatar-1.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Isabella Christensen</h6>
                      <p className="m-0">
                        Lorem Ipsum is simply dummy text of…
                      </p>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-success text-[10px] ltr:mr-4 rtl:ml-4"></i>
                        11 MAY 12:56
                      </h6>
                    </td>
                    <td>
                      <a
                        href="#!"
                        className="badge theme-bg-2 text-white text-[12px] mx-2"
                      >
                        Reject
                      </a>
                      <a
                        href="#!"
                        className="badge theme-bg-1 text-white text-[12px]"
                      >
                        Approve
                      </a>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-full max-w-10 w-[40px]"
                        // style="width: 40px"
                        src="../assets/images/user/avatar-2.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Mathilde Andersen</h6>
                      <p className="m-0">
                        Lorem Ipsum is simply dummy text of…
                      </p>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-danger text-[10px] ltr:mr-4 rtl:ml-4"></i>
                        11 MAY 10:35
                      </h6>
                    </td>
                    <td>
                      <a
                        href="#!"
                        className="badge theme-bg-2 text-white text-[12px] mx-2"
                      >
                        Reject
                      </a>
                      <a
                        href="#!"
                        className="badge theme-bg-1 text-white text-[12px]"
                      >
                        Approve
                      </a>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-full max-w-10 w-[40px]"
                        // style="width: 40px"
                        src="../assets/images/user/avatar-3.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Karla Sorensen</h6>
                      <p className="m-0">
                        Lorem Ipsum is simply dummy text of…
                      </p>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-success text-[10px] ltr:mr-4 rtl:ml-4"></i>
                        9 MAY 17:38
                      </h6>
                    </td>
                    <td>
                      <a
                        href="#!"
                        className="badge theme-bg-2 text-white text-[12px] mx-2"
                      >
                        Reject
                      </a>
                      <a
                        href="#!"
                        className="badge theme-bg-1 text-white text-[12px]"
                      >
                        Approve
                      </a>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-full max-w-10 w-[40px]"
                        // style="width: 40px"
                        src="../assets/images/user/avatar-1.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Ida Jorgensen</h6>
                      <p className="m-0">
                        Lorem Ipsum is simply dummy text of…
                      </p>
                    </td>
                    <td>
                      <h6 className="text-muted f-w-300">
                        <i className="fas fa-circle text-danger text-[10px] ltr:mr-4 rtl:ml-4"></i>
                        19 MAY 12:56
                      </h6>
                    </td>
                    <td>
                      <a
                        href="#!"
                        className="badge theme-bg-2 text-white text-[12px] mx-2"
                      >
                        Reject
                      </a>
                      <a
                        href="#!"
                        className="badge theme-bg-1 text-white text-[12px]"
                      >
                        Approve
                      </a>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-full max-w-10 w-[40px]"
                        // style="width: 40px"
                        src="../assets/images/user/avatar-2.jpg"
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Albert Andersen</h6>
                      <p className="m-0">
                        Lorem Ipsum is simply dummy text of…
                      </p>
                    </td>
                    <td>
                      <h6 className="text-muted">
                        <i className="fas fa-circle text-success text-[10px] ltr:mr-4 rtl:ml-4"></i>
                        21 July 12:56
                      </h6>
                    </td>
                    <td>
                      <a
                        href="#!"
                        className="badge theme-bg-2 text-white text-[12px] mx-2"
                      >
                        Reject
                      </a>
                      <a
                        href="#!"
                        className="badge theme-bg-1 text-white text-[12px]"
                      >
                        Approve
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
