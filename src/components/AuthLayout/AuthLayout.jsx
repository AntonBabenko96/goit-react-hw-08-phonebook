import { current } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, []);

  return children;
};
