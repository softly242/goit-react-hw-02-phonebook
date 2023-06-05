import PropTypes from 'prop-types';
import css from './Contacts.module.css';
export default function Contacts({contacts, handleRemoveContact}) {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => 
         <li className={css.item}  key={id}>
         <div className={css.info}>
            <span className={css.name}>{name} : {number}</span>
          </div>
          <button
            className={css.button}
            type="button"
            name="delte"
            onClick={() => handleRemoveContact(id)}
          >
            delete
          </button>
       </li>
      )}
    </ul>
  )
}
 
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}