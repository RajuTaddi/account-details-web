import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../../utils/route-utils';

const StyledLink = styled(Link)`
  padding: 10px;
  hover {
    text-decoration: none;
  }
`;

const Header = ({}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#/calculator">Learning</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
            {routes.map(route => {
              if (route.key)
                return (
                  <NavItem key={route.key}>
                    <StyledLink to={route.path}>{route.label}</StyledLink>
                  </NavItem>
                );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
