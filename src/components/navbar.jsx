import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <i className='fa-solid fa-leaf navbar-logo'></i>
        <span>Habit Tracker</span>
        <div className='navbar-count'>{this.props.totalCnt}</div>
      </nav>
    );
  }
}

export default Navbar;
