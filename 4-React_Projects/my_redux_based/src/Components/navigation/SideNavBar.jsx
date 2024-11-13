import React from 'react'
import { Container, Nav, Dropdown } from 'react-bootstrap'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import './SideNavBar.css'

export default function SideNavBar () {
    return (
        <div className='sideBar'>
         
           <div className='sidebarMain'>
           <di fluid className="d-flex flex-column flex-shrink-0  bg-dark text-white  " style={{ width: '200px', height: '90vh' }}>
                  <hr />
                <Nav className="flex-column">
                  
                    <Nav.Link href="/" className="text-white mb-3 fs-4 text-decoration-none">
                     Dashboard
                    </Nav.Link>
                    <Nav.Item>
                        <Nav.Link href="#home" className="text-white"> <i class="bi bi-view-stacked"></i> &nbsp; View Task</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link   className="text-white" as={Link} to='addtask'>
                           <i class="bi bi-list-task">
                           </i>&nbsp; Add task
                       </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#pricing" className="text-white"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#about" className="text-white"></Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <hr className="text-white" /> */}
                
            </di>
           </div>
           <div className='sidebarSecondary'> 
            <Outlet></Outlet>
           </div>
        </div>
    )
}
