import axios from "axios";

const clientID = "HpJbqQZaynDRjC2TKwQKEhJ2tVjKU9eSR23ICo8_b1I";
const numberOfPhotos = 30;
let url;

export const getSearchResults = (searchValue) => {
  url = searchValue
    ? `https://api.unsplash.com/search/photos?client_id=${clientID}&per_page=${numberOfPhotos}&query=${searchValue}`
    : ``;
  return axios.get(url).then((response) => response);
};

export const getCategoryPics = (Category) => {
  url = Category
    ? `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${numberOfPhotos}&query=${Category}`
    : ``;
  return axios.get(url).then((response) => response);
};

export const getInitialPics = async () => {
  url = `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${numberOfPhotos}`;
  return axios.get(url).then((response) => {
    return response;
  });
};
