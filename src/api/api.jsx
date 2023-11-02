import axios from 'axios';

const API_KEY = '39018185-f8e358a47676873f1ff74a55c';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchPictures(searchWord, page) {
  axios.defaults.params = {
    key: API_KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
  };
       
  return await axios.get(BASE_URL);
} 

export { fetchPictures };