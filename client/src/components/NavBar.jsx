const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm border-bottom border-primary border-2 shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Setlist Maker
        </a>

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
