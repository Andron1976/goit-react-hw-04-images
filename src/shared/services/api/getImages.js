import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
  key: '27911358-833c778f4a542fa4619f009a2',
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  }
});

export async function getImagesList(q, page = 1) {
  const data = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
    return data;
}