import css from './ContactList.module.css';
import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

function ContactList() {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(e =>
      e.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts().map(({ id, name, number }) => {
          return (
            <ContactItem key={id} contactId={id} name={name} number={number} />
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
