import React, { Component } from 'react';
import styles from './searchForm.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handelSubmit} className="SearchForm">
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={this.state.query}
            className={styles.SearchFormInput}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
