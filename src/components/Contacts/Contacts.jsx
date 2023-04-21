import PropTypes from 'prop-types';
import css from 'components/Contacts/Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getContactsState,
  getFilterState,
} from '../redux/contactsSlice';

export default function Contacts() {
  const contacts = useSelector(getContactsState);
  const filter = useSelector(getFilterState);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(e => {
        if (!e.name.toLowerCase().includes(filter.toLowerCase())) {
          return null;
        }
        return (
          <li key={e.id} data-key={e.id} className={css.item}>
            {e.name} : {e.number}{' '}
            <button
              className={css.btn}
              onClick={() => {
                dispatch(deleteContact(e.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
