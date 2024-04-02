import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const addNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'has-background-grey-lighter': isActive });

export const Navbar = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={addNavLinkClass}>
          Home
        </NavLink>

        <NavLink to="/people" className={addNavLinkClass}>
          People
        </NavLink>
      </div>
    </div>
  </nav>
);
