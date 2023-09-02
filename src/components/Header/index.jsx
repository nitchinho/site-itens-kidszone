function Header() {

  return (
    <header>
      <div className="logo">
      <img src="../../assets/logo.png" alt="LOGO" class="img-thumbnail"></img>
      </div>
      <div>
        <nav class="nav nav-pills flex-column flex-sm-row">
          <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
          <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
          <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
          <a class="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Disabled</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;