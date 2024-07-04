import { UserContext } from "../context/UserContext";
import { useContext, useState } from "react";

const NavBar = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <nav class="navbar navbar-expand-sm border-bottom border-primary border-2 shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Setlist Maker
        </a>
        {isAuthenticated ? "Authenticated!!" : "Not Authenticated"}
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item px-2">
            <a class="nav-link " href="/login">
              Login
            </a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link " href="/register">
              Register
            </a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link " href="/profile">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
