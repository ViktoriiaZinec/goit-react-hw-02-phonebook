import css from './Filter.module.css';
import propTypes from 'prop-types';

export function Filter({ filter, setFilter }) {
  const handleFilterChange = evt => {
    evt.preventDefault();
    setFilter(evt.target.value);
  };
  return (
    <div className={css.filter_container}>
      <p className={css.title_find}>Find contacts by name</p>
      <input
        className={css.input_find}
        type="text"
        onChange={handleFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  setFilter: propTypes.func.isRequired,
};