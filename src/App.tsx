function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="navbar-brand" href="http://localhost:5173/">
              <img
                src="\src\assets\ADY_black_logo.png"
                width="80"
                height="30"
                alt="ADY-Logo"
              />
            </a>

            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only"></span>
            </a>
            <a className="nav-item nav-link" href="#">
              About
            </a>
            <a className="nav-item nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
