import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [search, setSearch] = useState('');
  
  function handleSearchChanges(e) {
    setSearch(e.target.value);
  }
  const navigate = useNavigate();
  
  function handleSearch(e) {
    navigate("/" + search);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"></a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input className="form-control me-2" type="search" onChange={handleSearchChanges} placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul>
              <Link to="/login" className="btn btn-outline-success text-white text-decoration-none">Login</Link>
              <Link to="/register" className="btn btn-outline-success text-white text-decoration-none">Register</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
