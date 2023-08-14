import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { getContact } from '../redux/selectors.js';
import css from '../Contacts/Contacts.module.css';
import deleteContact from '../redux/contactSlice.js';
import { getFilter } from '../redux/selectors';

// const Contacts = ({ contacts, onDeleteContact }) => {

const Contacts = () => {
  // const Contacts = ({id, name, number}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  console.log('contacts delete', contacts);
  // console.log('contacts delete', contacts.id);
  // console.log('contacts filter', filter);
  // const { id, name, number} = contacts;

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      // contact.name.includes(normalizedFilter)
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    // return contacts;

  };

  const visibleContact = getVisibleContact();
  console.log('visibleContact', visibleContact);


  const handleDelete = (id) => {
    console.log('id delete', id);
    dispatch(deleteContact(id));
  };

  
  return (
    <ul className={css.contact__list}>
      {visibleContact.map(({ id, name, number }) => (
        <li key={id} className={css.contact__item}>
          <p className={css.contact__item__name}>{name}</p>
          <p className={css.contact__item__numb}>{number}</p>
          {/* <button onClick={() => onDeleteContact(id)}>Delete</button> */}
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

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }))
// }
