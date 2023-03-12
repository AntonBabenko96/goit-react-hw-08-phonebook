import css from '../NotFound/NotFound.module.css';
export const NotFound = () => {
  return (
    <div className={css.notFound}>
      <p>Page not found, please try entering the correct address.</p>
    </div>
  );
};
