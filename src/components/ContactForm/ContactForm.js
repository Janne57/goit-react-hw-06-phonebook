import { useState } from 'react';
import React from 'react';
import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../redux/selectors.js'
import { nanoid } from 'nanoid';
import addContact from '../redux/contactSlice.js'


const ContactForm = () => {
const dispatch = useDispatch();
const [name, setName] = useState('');
const [number, setNumber ] = useState('');
const contacts = useSelector(getContact);
 // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(), 
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${name} is already in contacts.`);
  //   } else {
  //     setContacts(prevContacts => [...prevContacts, contact]);
  //     // setContacts([...contacts, contact]);
  //   }
  // };

 const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    console.log('name', name);
    console.log('value', value);


    switch (name) {
      case 'name':
        setName(value);
        break;

        case 'number':
          setNumber(value);
          break;

          default: return;  
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!name.trim()) {
      return;
    }

    const contact = {
          id: nanoid(), 
          // name,
          // number,
          name: name,
          number: number,
        };

        if (contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase()
              )
            ) {
              return alert(`${name} is already in contacts.`);
            } else {
              dispatch(addContact(contact));
// dispatch(addContact(evt.currentTarget.value))
// console.log('evt.currentTarget.value', evt.currentTarget.name.value)
// console.log('evt.currentTarget.value', evt.currentTarget.number.value)
console.log('contact contacForms', contact);

              // setContacts([...contacts, contact]);
            }


   //   .then((contacts) =>
    //   localStorage.setItem("contacts", JSON.stringify(contacts))
    // );
    // onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  
    return (
      <form className={css.form__basic} onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />

        <button type="submit" className={css.form__button}>
          Add
        </button>
      </form>
    );
  
}

export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };


