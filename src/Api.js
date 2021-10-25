import axios from 'axios'


const clientID = "1e93497bee7b143fe497bd50d3baaac2536d4d7abfc0fea16090aa38614ad135";
const numberOfPhotos = 30;
let url;


export const getSearchResults =  (searchValue) => {
    url = searchValue ? `https://api.unsplash.com/search/photos?client_id=${clientID}&per_page=${numberOfPhotos}&query=${searchValue}`: `` ;
    return axios.get(url).then(response => response);
};

export const getCategoryPics =  (Category) => {
    url = Category? `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${numberOfPhotos}&query=${Category}`: `` ;
    return axios.get(url).then(response => response);
};

export const getInitialPics = async () => {
    url = `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${numberOfPhotos}`;
    return axios.get(url)
    .then(response => {
        return response
    });
}
