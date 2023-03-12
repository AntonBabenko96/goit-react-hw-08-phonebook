import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';
import css from '../NavBarUser/NavBarUser.module.css';
import user from '../NavBarUser/user.png';

export const NavBarUser = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.navBarUser}>
      <NavLink to="/contacts" className={css.link}>
        {name}
        <img src={user} alt="logo" className={css.logo} />
      </NavLink>{' '}
      <button onClick={onLogout} className={css.logout}>
        Logout
      </button>
    </div>
  );
};
