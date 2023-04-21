import css from 'components/Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { addFilter } from '../redux/contactsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css.input}
          onChange={e => dispatch(addFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
