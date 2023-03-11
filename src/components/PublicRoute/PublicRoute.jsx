import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};
