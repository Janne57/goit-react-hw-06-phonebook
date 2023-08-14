import Contacts from './/Contacts/Contacts.js';
import ContactForm from './ContactForm/ContactForm.js';
import Filter from './Filter/Filter.js';


const App = () => {

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <Contacts />
    </>
  );
};

export default App;
