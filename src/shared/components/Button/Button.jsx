import css from '../Button/Button.module.css';

export const Button = ({ type = 'submit', children }) => {
  return (
    <button className={css.btn} type={type}>
      {children}
    </button>
  );
};
