import { useState } from 'react';
import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../redux/selectors.js';
import { nanoid } from 'nanoid';
import { addContact } from '../redux/contactSlice.js';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContact);

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!name.trim()) {
      return;
    }

    const contact = {
      id: nanoid(),
      name: evt.currentTarget.elements.name.value,
      number: evt.currentTarget.elements.number.value,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(contact));
    }

    setName('');
    setNumber('');
    // evt.currentTarget.reset();
    // evt.currentTarget.elements.number.value.reset();
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
};

export default ContactForm;







