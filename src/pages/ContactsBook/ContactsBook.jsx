import { Box } from '../../components/Box/Box';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from '../../shared/components/Loader/Loader';
import css from '../ContactsBook/ContactsBook.module.css';

export const ContactsBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <Box title="Phonebook">
        <ContactForm />
      </Box>
      <Box title="Contacts">
        <Filter />
        <ContactList className={css.contacts} />
      </Box>
    </div>
  );
};
