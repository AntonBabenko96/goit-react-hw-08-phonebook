import useForm from '../../shared/hooks/useForm';
import { initialState } from './initialState';
import { TextField } from 'shared/components/TextField/TextField';
import { fields } from '../RegisterForm/fields.js';
import { Button } from '../../shared/components/Button/Button';
import css from '../RegisterForm/RegisterForm.module.css';

export const RegisterForm = ({ onSubmit }) => {
  const { state, handleSubmit, handleChange } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};
