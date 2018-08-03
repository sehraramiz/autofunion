import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideAlert } from '../actions/alert';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Alert } from 'react-bootstrap';

class Header extends Component {
  constructor(props, context) {
      super(props, context);

      this.handleDismiss = this.handleDismiss.bind(this);
  }

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

  handleDismiss() {
    this.props.hideAlert();
  }


  render () {
    return (
      <div>
        <Navbar inverse collapseOnSelect className="nav-bar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Autofunion</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={6} title="اکانت" id="basic-nav-dropdown">
                <MenuItem eventKey={6.1}>{this.navbarLinks()}</MenuItem>
              </NavDropdown>
              <NavItem eventKey={5} href="#">
                <Link to='/about'>درباره</Link>
              </NavItem>
              <NavItem eventKey={4} href="#">
                <Link to='/classyab'>ابزار انتخاب واحد</Link>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <Link to='/emptyclass'>کلاسای خالی</Link>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Link to='/ostadyab'>استاد یاب</Link>
              </NavItem>
              <NavItem eventKey={1}>
                <Link to='/'>خانه</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {
          this.props.alert !== 'undefined' ? this.props.alert.show &&
          <Alert onDismiss={this.handleDismiss} bsStyle={this.props.alert.type}>
            {this.props.alert.text}
          </Alert>
          : <p></p>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    alert: state.alert,
  };
}

export default connect(mapStateToProps, { hideAlert })(Header);
