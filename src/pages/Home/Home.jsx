import css from '../Home/Home.module.css';
import logo from '../Home/phonebook.png';
import { useSelector } from 'react-redux';

export const Home = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const name = useSelector(state => state.auth.user.name);

  return (
    <div className={css.home}>
      <img src={logo} alt="logo" className={css.logo} />
      {isLogin ? (
        <p>
          Hello, {name}! Welcome to App PhoneBook. Our application allows you to
          add and store contacts, and if necessary, you can filter or delete
          them.
        </p>
      ) : (
        <p>
          Hello, user! Welcome to App PhoneBook. Please register or log in to
          gain access to the full functionality. Our application allows you to
          add and store contacts, and if necessary, you can filter or delete
          them.
        </p>
      )}
    </div>
  );
};
