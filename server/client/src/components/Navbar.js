import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar({ active }) {
  const navigate = useNavigate();

  // let classNameName_jobs = "m-3 p-2 rounded";
  // let classNameName_post_a_job = "m-3 p-2 rounded";
  // let classNameName_signup = "m-3 p-2 rounded";
  // let classNameName_dashboard = "m-3 p-2 rounded";

  // if (active === "jobs") {
  //   classNameName_jobs += " text-blue-300";
  // } else if (active === "post_a_job") {
  //   classNameName_post_a_job += " text-blue-300";
  // } else if (active === "signup") {
  //   classNameName_signup += " text-blue-300";
  // } else if (active === "dashboard") {
  //   classNameName_dashboard += " text-blue-300";
  // }

  return (
    <>
      {/* <div classNameName="nav">
        <Link classNameName="m-3" to="/"></Link>
        <Link classNameName={classNameName_jobs} to="/jobs">
          Jobs
        </Link>
        <Link classNameName={classNameName_post_a_job} to="/postjob">
          Post a Job
        </Link>
        {localStorage.getItem("applicant_token") ||
        localStorage.getItem("recruiter_token") ? (
          localStorage.getItem("applicant_token") ? (
            <>
              <Link classNameName={classNameName_dashboard} to="/applicant/dashboard">
                Dashboard
              </Link>
              <button
                classNameName={classNameName_signup}
                onClick={() => {
                  localStorage.removeItem("applicant_token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link classNameName={classNameName_dashboard} to="/recruiter/dashboard">
                Dashboard
              </Link>
              <button
                classNameName={classNameName_signup}
                onClick={() => {
                  localStorage.removeItem("recruiter_token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </>
          )
        ) : (
          <Link classNameName={classNameName_signup} to="/signup">
            Signup
          </Link>
        )}
      </div> */}

      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <Link to="/" className="font-semibold text-3xl tracking-tight">
            Blogging Application
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to="/articles"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  text-xl font-semibold hover:text-white mr-4"
            >
              Articles
            </Link>
            <Link
              to="/postarticle"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 font-semibold text-xl hover:text-white mr-4"
            >
              Post An Article
            </Link>

            {localStorage.getItem("user_token") && (
              <>
              <Link
                to="/user/dashboard"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 font-semibold  text-xl hover:text-white mr-4"
              >
                Dashboard
              </Link>

              <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 font-semibold  text-xl hover:text-white mr-4" onClick={()=> {
                localStorage.removeItem("user_token");
                window.location.reload();
              }}>Logout</button>
              </>
              
            )}
            <Link
              to="/signup"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 font-semibold  text-xl hover:text-white mr-4"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 font-semibold  text-xl hover:text-white mr-4"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
