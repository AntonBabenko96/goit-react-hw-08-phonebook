import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';
import css from '../LoginPage/LoginPage.module.css';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);

  const onLogin = data => {
    dispatch(login(data));
  };
  if (!isLogin) {
    return (
      <div className={css.login}>
        <LoginForm onSubmit={onLogin} />
      </div>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};
