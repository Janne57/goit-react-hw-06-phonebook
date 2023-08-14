import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import css from '../Contacts/Contacts.module.css'
import deleteContact from '../redux/contactSlice.js'

// const Contacts = ({ contacts, onDeleteContact }) => {
  const Contacts = ({ contacts }) => {
// const Contacts = ({id, name, number}) => {
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteContact(id))
  }
  return (
    <ul className={css.contact__list}>
    {contacts.map(({id, name, number}) => (
      <li key={id} className={css.contact__item}>
        <p className={css.contact__item__name}>{name}</p>
        <p className={css.contact__item__numb}>{number}</p>
        {/* <button onClick={() => onDeleteContact(id)}>Delete</button> */}
        <button onClick={() => {handleDelete(id)}}>Delete</button>
      </li>))}
  </ul>
  )
};

export default Contacts;

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }))
// }