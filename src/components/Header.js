import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
      <header className="header">
        <nav>
          <ul>
            <li><Link to='/'>خانه</Link></li>
            <li><Link to='/starterkit'>راهنمای کلاس اولی ها</Link></li>
            <li><Link to='/ostadyab'>استاد یاب</Link></li>
            <li><Link to='/classyab'>ابزار انتخاب واحد</Link></li>
            <li><Link to='/emptyclass'>کلاسای خالی</Link></li>
            <li><Link to='/about'>درباره</Link></li>
          </ul>
          <ul>
            {this.navbarLinks()}
          </ul>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
