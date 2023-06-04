import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { Component } from 'react';
import shortid from 'shortid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  handleChange = e => {
    this.setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
  }

  render() {
    return (
      <form className={css.form}>
        <label htmlFor={this.nameInputId}
        className={css.label}>
          Name
          <input className={css.input}
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.numberInputId}
        className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button 
          className={css.button}
          type="submit"
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};
