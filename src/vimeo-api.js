import axios from 'axios';

const API_URL = 'https://api.vimeo.com/videos';
const client = new Vimeo('{b6b8b3770ff549e688da4122ebff1a30556c0e65}', '{gNvlVLibpm/tS4mdSh3SWIYTJJjpxgQ9Nl9DfcKJ9MppBALiHBfgvgE61959BFypQGpm2yVMAVH7rkb9ghiarmBWXjgiQ3BVwrY37LKay5YjS5F3JRwEvZ7stTX1Sbnt}', '{f5ee5a43394fdf8355c996270a1c5696}');

const vimeoSearch = (term) => {
  const params = {
    query: term,
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

export default vimeoSearch;
