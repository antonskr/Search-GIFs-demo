import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=8&rating=r`,
});

const giphyAPI = {
  getGiphyData() {
    return instance.get(``).then((response) => {
      return response.data;
    });
  },
  getSearchGiphyData(text) {
    return instance
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${text}&limit=50&offset=0&rating=r&lang=ru`
      )
      .then((response) => {
        return response.data;
      });
  },
  getCategoriesSearchGif(text) {
    return instance
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${text}&limit=4&offset=0&rating=r&lang=ru`
      )
      .then((response) => {
        return response.data;
      });
  },
};

export default giphyAPI;
