import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from 'redux/auth/auth-operations';
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  const onRegister = data => {
    dispatch(register(data));
  };

  if (!isLogin) {
    return (
      <div>
        <RegisterForm onSubmit={onRegister} />
      </div>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};
