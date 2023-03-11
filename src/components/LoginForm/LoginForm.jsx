import useForm from '../../shared/hooks/useForm';
import { initialState } from './initialState';
import { TextField } from 'shared/components/TextField/TextField';
import { fields } from '../RegisterForm/fields.js';
import { Button } from '../../shared/components/Button/Button';
import css from '../LoginForm/LoginForm.module.css';

export const LoginForm = ({ onSubmit }) => {
  const { state, handleSubmit, handleChange } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};
