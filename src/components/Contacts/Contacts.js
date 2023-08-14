import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../redux/selectors.js';
import css from '../Contacts/Contacts.module.css';
import { deleteContact } from '../redux/contactSlice.js';
import { getFilter } from '../redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  
  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  const visibleContact = getVisibleContact();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contact__list}>
      {visibleContact.map(({ id, name, number }) => (
        <li key={id} className={css.contact__item}>
          <p className={css.contact__item__name}>{name}</p>
          <p className={css.contact__item__numb}>{number}</p>
          <button
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

