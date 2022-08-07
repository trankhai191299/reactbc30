// import logo from './logo.svg';
// import './App.css';

import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          CyberSoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'}
              style={({isActive}) => isActive ? {borderRadius:'5px'} : {}}
              to="/home">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/contact">
                Contact
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/reactform">
              React Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} to="/lifecycle">
              Life Circle
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown">Redux Demo</a>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/demotanggiam">
                  UpDownSoLuong
                </NavLink>
                <NavLink className="dropdown-item" to="/demochangecolor">
                  Change Color
                </NavLink>
                <NavLink className="dropdown-item" to="/demoqlsv">
                  QLSV
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <div style={{minHeight:500}}>
        <Outlet />
      </div>
      
      <footer className="bg-dark text-white text-center p-5">Footer</footer>
    </div>
  );
}

export default App;

