import { useEffect } from 'react';
import Contacts from './/Contacts/Contacts.js';
import ContactForm from './ContactForm/ContactForm.js';
// import Filter from './Filter/Filter.js';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './redux/contactSlice.js';
import { getContact } from './redux/selectors';
import { getFilter } from './redux/selectors';

// const initialContacts = [
//   { id: 'id-1', name: 'Jane Fox', number: '123-45-67' },
//   { id: 'id-2', name: 'Dmitro Kog', number: '123-45-68' },
//   { id: 'id-3', name: 'Alex Bolduin', number: '123-45-69' },
//   { id: 'id-4', name: 'Mark Tven', number: '123-45-70' },
// ];

const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(initialContacts);
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     // JSON.parse(localStorage.getItem('contacts') || initialContacts) ?? []
  //     dispatch(addContact(JSON.parse(localStorage.getItem('contacts')) ?? []))
  //   );
  // });
  console.log('contacts', contacts);

  // const [filter, setFilter] = useState('');
  useEffect(() => {
    const contactName = JSON.parse(localStorage.getItem('contacts')) ?? [];
    if (contactName) {
      dispatch(addContact(contactName));
    }
  }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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

  // const changeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.includes(normalizedFilter)
      // contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // const deleteContact = oldContactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== oldContactId)
  //   );
  // };

  const visibleContact = getVisibleContact();

  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm onSubmit={addContact} /> */}
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      {/* <Filter value={filter} onChange={changeFilter} /> */}

      {/* <Contacts contacts={visibleContact} onDeleteContact={deleteContact} /> */}
      <Contacts contacts={visibleContact} />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//  componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts) || initialContacts;
//     this.setState({ contacts: parseContacts });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts)  {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//   const contact = {
//     id: nanoid(),
//     name,
//     number,
//   };

// /*1 вариант*/
//      if (this.state.contacts.find(contact =>
//       contact.name.toLowerCase() === name.toLowerCase())) {
//           return alert(`${name} is already in contacts.`);
//         } else {
//           this.setState(prevState => ({
//               contacts: [...prevState.contacts, contact],
//             }));};

//   /*2 вариант*/

//   //   this.setState(prevState => ({
//   //     contacts: prevState.contacts.find(contact => {
//   //       if (contact.name.toLowerCase() === name.toLowerCase()) {
//   //         return alert(`${name} is already in contacts.`);
//   //       }
//   //       return [...prevState.contacts, contact];
//   //     }),
//   //   }));
//   //   console.log('this.state.contacts', this.state.contacts);
//   //   console.log('contacts.name', this.state.contacts[1].name);
//   //   console.log('contacts.name', this.state.contacts.name);
//   };

//   changeFilter = evt => {
//     this.setState({ filter: evt.currentTarget.value });
//   };

//   getVisibleContact = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = oldContactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(
//         contact => contact.id !== oldContactId
//       ),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContact = this.getVisibleContact();
//     // const nameContact = contacts.map(contact => contact.name);

//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />

//         <Contacts
//           contacts={visibleContact}
//           onDeleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }

// export default App;
