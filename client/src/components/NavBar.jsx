import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, logout } = useContext(UserContext);

  return (
    <nav class="navbar navbar-expand-sm  shadow-sm bg-white bg-opacity-90">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Setlist Maker
        </Link>
        {/* {isAuthenticated ? "Authenticated!!" : "Not Authenticated"} */}
        <ul class="navbar-nav d-flex flex-row">
          {!isAuthenticated && (
            <>
              <li class="nav-item px-2">
                <Link class="nav-link " to="/">
                  Login
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link class="nav-link " to="/register">
                  Register
                </Link>
              </li>
            </>
          )}

          {isAuthenticated && (
            <li class="nav-item px-2">
              <Link class="nav-link " to="/profile">
                Profile
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                logout();
              }}
            >
              logout
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
