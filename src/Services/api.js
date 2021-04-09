import axios from 'axios';

const apiFetchImages = (searchQuery, currentPage) => {
  return axios.get(
    `https://pixabay.com/api/?key=20294506-248ba45cdd61456c7439febce&q=${searchQuery}&page=${currentPage}&per_page=12`,
  );
};

export default apiFetchImages;
