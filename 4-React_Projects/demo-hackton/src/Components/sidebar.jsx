import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaTrash, FaEdit, FaEye, FaBars } from 'react-icons/fa';
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={`d-flex ${open ? 'sidebar-open' : 'sidebar-closed'}`}>
      <nav className={`bg-dark text-white p-3 ${open ? 'w-240' : 'w-60'}`} style={{ transition: 'width 0.3s' }}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              <FaPlus /> {open && 'Add'}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              <FaTrash /> {open && 'Delete'}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              <FaEdit /> {open && 'Update'}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              <FaEye /> {open && 'View'}
            </Link>
          </li>
        </ul>
        <button className="btn btn-outline-light mt-auto" onClick={toggleDrawer}>
          <FaBars />
        </button>
      </nav>
    </div>
  );
};
export default Sidebar;