import React, {Fragment} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      menu: []
    }

  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('json/menu.json')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            menu: result.menu
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <header className="row mx-0">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <button className="navbar-toggler d-lg-none"
                  type="button"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav navbar-menu">
              {
                this.state.menu.map((menuItem) => {
                  if (menuItem.active) {
                    return (
                      <Fragment key={menuItem.url}>
                        <li key={menuItem.url}>
                          <Link className="nav-link active" to={menuItem.url}>{menuItem.title}</Link>
                        </li>
                      </Fragment>
                    )
                  } else {
                    return (
                      <Fragment key={menuItem.url}>
                        <li key={menuItem.url}>
                          <Link className="nav-link" to={menuItem.url}>{menuItem.title}</Link>
                        </li>
                      </Fragment>
                    )
                  }
                }
              )}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}