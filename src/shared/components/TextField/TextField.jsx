import css from '../TextField/TextField.module.css';

export const TextField = ({ label, ...props }) => {
  return (
    <div className={css.formGroup}>
      <label>{label}</label>
      <input className={css.field} {...props} />
    </div>
  );
};
