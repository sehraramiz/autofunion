import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

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
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Autofunion</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to='/'>خانه</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to='/about'>درباره</Link>
            </NavItem>
            <NavDropdown eventKey={3} title="ابزار" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><Link to='/classyab'>ابزار انتخاب واحد</Link></MenuItem>
              <MenuItem eventKey={3.1}><Link to='/emptyclass'>کلاسای خالی</Link></MenuItem>
                <MenuItem eventKey={3.1}><Link to='/ostadyab'>استاد یاب</Link></MenuItem>
              <MenuItem eventKey={3.1}>{this.navbarLinks()}</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
