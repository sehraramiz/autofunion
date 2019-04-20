import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Alert } from 'react-bootstrap';

class Header extends Component {

  navbarLinks() {
    if (this.props.authenticated) {
      return [
        <li key="profile"><Link to="/profile">پروفایل</Link></li>,
      ];
    }
    return [
      <li key="signin"><Link to="/signin">ورود</Link></li>,
      <li key="signup"><Link to="/signup">ثبت نام</Link></li>
    ];
  }

  render () {
    return (
      <div>
        <Navbar inverse collapseOnSelect className="nav-bar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/tools">Autofunion</Link>
            </Navbar.Brand>
            {/*<Navbar.Toggle />*/}
          </Navbar.Header>
          {/*<Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={4} title="اکانت" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1}>{this.navbarLinks()}</MenuItem>
              </NavDropdown>
              <NavItem eventKey={3} href="#">
                <Link to='/about'>درباره</Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Link to='/tools'>ابزار</Link>
              </NavItem>
              <NavItem eventKey={1}>
                <Link to='/tools'>خانه</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>*/}
        </Navbar>
      </div>
    );
  }
}

export default Header;
