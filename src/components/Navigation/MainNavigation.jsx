import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assests/XYZ2.jpg'
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  return (
    <nav className={classes.navbar}>
      <NavLink
        to="/"
        end
      >
        <img src={logo} alt='logo' />
      </NavLink>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Cart <span className={classes.badge}>{cartQuantity}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
