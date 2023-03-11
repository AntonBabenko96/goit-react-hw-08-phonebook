import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavBarUser } from '../../components/NavBarUser/NavBarUser';

export const NavBarAuth = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {!isLogin && <NavLink to="/register">Register</NavLink>}
      {!isLogin && <NavLink to="/login">Login</NavLink>}
      {isLogin && <NavBarUser />}
    </div>
  );
};
