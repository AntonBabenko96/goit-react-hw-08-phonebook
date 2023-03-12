import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavBarUser } from '../../components/NavBarUser/NavBarUser';
import css from '../NavBarAuth/NavBarAuth.module.css';

export const NavBarAuth = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <div className={css.navBar}>
      <NavLink to="/" className={css.home}>
        Home
      </NavLink>
      {!isLogin && (
        <NavLink to="/register" className={css.register}>
          Register
        </NavLink>
      )}
      {!isLogin && (
        <NavLink to="/login" className={css.login}>
          Login
        </NavLink>
      )}
      {isLogin && <NavBarUser />}
    </div>
  );
};
