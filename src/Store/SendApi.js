import axios from 'axios';

// const devEnv = process.env.NODE_ENV !== 'production';
// const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  // baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
  baseURL: 'http://localhost:4000',
});

//헤더에 토큰을 넣는 것
//노드에서 토큰을 받는 것을
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    //로컬스토리지에 있다면.
    //토큰을 리퀘스트 헤더에 저장하고 싶다.
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

//profile(new)
export const profile = (formData) => API.post('/users/profile/', formData);

// check pwd (new)
export const checkIfPwd = (nickname, formData) =>
  API.post(`/users/profile/${nickname}`, formData);

//sign
export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
export const googleSignIn = (result) => API.post('/users/googleSignIn', result);

//tour
export const createTour = (tourData) => API.post('/tour', tourData);
//node의 getTours에서 계산한 값이 여기로 들어옴
// tourSlice.js에서 똑같이 처리
export const getTours = (page) => API.get(`/tour?page=${page}`);
export const getTour = (id) => API.get(`/tour/${id}`);
export const deleteTour = (id) => API.delete(`/tour/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.patch(`/tour/${id}`, updatedTourData);
export const getToursByUser = (userId) => API.get(`/tour/userTours/${userId}`);

export const getToursBySearch = (searchQuery) =>
  API.get(`/tour/search?searchQuery=${searchQuery}`);

export const getTagTours = (tag) => API.get(`/tour/tag/${tag}`);
export const getRelatedTours = (tags) => API.post(`/tour/relatedTours`, tags);
export const likeTour = (id) => API.patch(`/tour/like/${id}`);

//*-------product-------*
//uploadProduct
export const uploadProduct = (uploadData) =>
  API.post('/product/upload', uploadData);

//*-------category-------*
export const createCategory = (categoryData) =>
  API.post('/category/upload', categoryData);

export const getCategories = () => API.get('/category/categories');

export const deleteCategory = (id) => API.delete(`/category/${id}`);
