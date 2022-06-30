import axios from "axios";

const numberOfPhotos = 30;
let url;

export const getSearchResults = (searchValue) => {
  url = searchValue
    ? `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&per_page=${numberOfPhotos}&query=${searchValue}`
    : ``;
  return axios.get(url).then((response) => response);
};

export const getCategoryPics = (Category) => {
  url = Category
    ? `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY}&count=${numberOfPhotos}&query=${Category}`
    : ``;
  return axios.get(url).then((response) => response);
};

export const getInitialPics = async () => {
  url = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY}&count=${numberOfPhotos}`;
  return axios.get(url).then((response) => {
    return response;
  });
};

export const trackDownload = async (downloadLocation) => {
  url = `${downloadLocation}&client_id=${process.env.REACT_APP_API_KEY}`;
  return axios.get(url).then((response) => response);
};
