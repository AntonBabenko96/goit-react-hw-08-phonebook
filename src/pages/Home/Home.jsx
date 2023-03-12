import css from '../Home/Home.module.css';

export const Home = () => {
  return (
    <div className={css.home}>
      <p>
        Hello, user! Welcome to App PhoneBook. Please register or log in to gain
        access to the full functionality. Our application allows you to add and
        store contacts, and if necessary, you can filter or delete them.
      </p>
    </div>
  );
};
