import { NavBarAuth } from '../pages/NavBarAuth/NavBarAuth';
import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ContactsBook } from '../pages/ContactsBook/ContactsBook';
import { Home } from './Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import css from '../components/App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <NavBarAuth />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
