import PropTypes from 'prop-types';

export default function Filter({ value, handleChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="tel"
        value={value}
        onChange={handleChangeFilter}
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  value: PropTypes.string.isRequired,
};
