import React, { Fragment, PureComponent } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './Header.scss';
import ActiveRoute from '../ActiveRoute/ActiveRoute';

const menu = [
  {
    title: 'Home',
    url: '/',
    children: [],
  },
  {
    title: 'Products',
    url: '/products',
    children: [],
  },
  {
    title: 'About Us',
    url: '/about',
    children: [],
  },
];

class Header extends PureComponent {

  render() {

    return (

      <header className="row">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary col-10 mx-auto header">
          <Route path="/" component={ActiveRoute} />
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="nav navbar-nav">
              {
                menu.map(menuItem => (
                  <Fragment key={menuItem.url}>
                    <li key={menuItem.url}>
                      <NavLink className="nav-link" to={menuItem.url}>{menuItem.title}</NavLink>
                    </li>
                  </Fragment>
                ))
              }
            </ul>
          </div>
        </nav>
      </header>

    );

  }

}

// const Header = () => (
//
//   <header className="row">
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary col-10 mx-auto header">
//       <Route path="/" component={ActiveRoute} />
//       <button
//         className="navbar-toggler d-lg-none"
//         type="button"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse justify-content-end">
//         <ul className="nav navbar-nav">
//           {
//               menu.map(menuItem => (
//                 <Fragment key={menuItem.url}>
//                   <li key={menuItem.url}>
//                     <NavLink className="nav-link" to={menuItem.url}>{menuItem.title}</NavLink>
//                   </li>
//                 </Fragment>
//                 ))
//             }
//         </ul>
//       </div>
//     </nav>
//   </header>
//
// );

export default Header;
