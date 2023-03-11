import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';

export const NavBarUser = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <NavLink to="/contacts">{name}</NavLink>{' '}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
