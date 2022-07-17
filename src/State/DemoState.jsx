import React, { Component } from "react";

export default class DemoState extends Component {
  status = false;
  username = "Khai";
    state = {
        status : false
    }
  renderLogin = () => {
    if (this.state.status) {
      return <span className="text-white me-3">Hello, {this.username}</span>;
    }
    return (
      <button
        className="btn btn-success me-3"
        onClick={(e) => {
            e.preventDefault();
          this.dangNhap();
        }}
      >
        Đăng nhập
      </button>
    );
  };
  dangNhap = () => {
    console.log("Đăng nhập thành công")
    let newState = {status:true}
    this.setState(newState,() => {
        console.log('state',this.state);
    })
  };
  render() {
    return (
      <div className="container">
        <div>
          <h3>DemoState</h3>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
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
                  <a className="nav-link" href="#">
                    Home <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0">
                {this.renderLogin()}
                {/* {this.status?<span className="text-white me-2">Hello, {this.username}</span>:<button className="btn btn-success me-3">Đăng nhập</button>} */}
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
