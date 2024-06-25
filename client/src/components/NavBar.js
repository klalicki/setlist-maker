const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm border-bottom border-primary border-2 shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Setlist Maker
        </a>

        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link active" href="/login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
