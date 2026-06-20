import axios from 'axios';

const API_KEY = '54040957-efed6322ea17d5f22db4ab8b0';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImages(query, page) {
  return axios
    .get(BASE_URL, {
      params: {
        q: query,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    })
    .then(response => response.data);
}