import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loader } from 'shared/components/Loader/Loader';
export const PrivateRoute = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const token = useSelector(state => state.auth.token);

  if (!isLogin && token) {
    <Loader />;
  }
  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
