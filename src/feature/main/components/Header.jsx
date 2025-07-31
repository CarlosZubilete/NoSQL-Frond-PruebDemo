import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link } from 'react-router-dom'; // 
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Navbar color="dark" dark expand="sm" fixed="top" className="px-3">
        <NavbarBrand href="/" className="fw-bold">
          No-SQL | MongoDB
        </NavbarBrand>

        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" className="text-light text-decoration-none me-3">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/ProductPage" className="text-light text-decoration-none">
                CRUD
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/Pagination" className="text-light text-decoration-none">
                Pagination
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Header;