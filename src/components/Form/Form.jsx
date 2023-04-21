import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContactsState } from '../redux/contactsSlice';
import css from 'components/Form/Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsState);

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (checkIfExist(name))
      return alert('This contact is exist in your phonebook!');
    dispatch(addContact({ name, number }));
    form.reset();
  };

  const checkIfExist = name => {
    return contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="name"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Phone
        <input
          type="tel"
          name="number"
          placeholder="number"
          className={css.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
