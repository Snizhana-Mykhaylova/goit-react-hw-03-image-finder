import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Loader from './Components/Loader';
// import Modal from './Components/Modal';

import './App.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
  };

  onChangeQuery = query => {
    this.setState({ searchQuery: { query } });
    this.fetchImages(query);
  };

  fetchImages = query => {
    axios
      .get(
        `https://pixabay.com/api/?key=20294506-248ba45cdd61456c7439febce&q=${query}&page=${this.state.currentPage}`,
      )
      .then(response =>
        this.setState(prevState => ({
          images: response.data.hits,
          currentPage: prevState.currentPage + 1,
        })),
      );
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
        <Loader />
        <Button onClick={this.fetchImages} />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
