import React,{Component} from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import './NavBar.css'

class NavBar extends Component{
        render() {
            return (
             <Navbar dark>

                <div className="container">
                    <NavbarBrand href="#" className="nav">
                        <img src="./favicon.png" width="40" height="40" />
                        <label className="A1">hooks-and-the-cooks </label>
                    </NavbarBrand>
                    <Nav justify className="justify-content-end" >
                        <NavItem>
                            <NavLink className="click" href="/home" >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="click" href="/">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            
                        </NavItem>
                        <NavDropdown className="click" title="Explore">
                                <NavDropdown.Item href="#">ReactJS</NavDropdown.Item>
                                <NavDropdown.Item>NodeJS</NavDropdown.Item>
                                <NavDropdown.Item>Handling Git and Github</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                 </div>
             </Navbar>
         )
     }
}

export default NavBar;