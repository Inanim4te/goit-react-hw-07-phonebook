import css from './ContactItem.module.css';
import { deleteContact } from 'redux/operations';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

function ContactItem({ name, number, contactId }) {
  const dispatch = useDispatch();

  return (
    <>
      <li className={css.item}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          className={css.button}
          onClick={() => dispatch(deleteContact(contactId))}
        >
          delete
        </button>
      </li>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default ContactItem;
