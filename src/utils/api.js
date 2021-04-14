import axios from 'axios';
import store from '../store/store';
import { getServerError } from '../store/errors/actions';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    const dispatch = store.dispatch;

    const { status, statusText } = response;
    const data = { status, statusText };

    if (status >= 400 || status <= 500) {
      dispatch(getServerError(data));
      dispatch(getServerError(400));
      dispatch(getServerError(500));
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const api = {
  users: {
    getUsers: () => axiosInstance.get(`/users`),
    getSingleUser: (id) => axiosInstance.get(`/users/${id}`),
    editSingleUser: (data) => axiosInstance.put(`/users/${data.id}`, data),
  },
  posts: {
    getPosts: () => axiosInstance.get(`/posts`),
    getSinglePost: (id) => axiosInstance.get(`/posts/${id}`),
  },
  photos: {
    getPhotos: () => axiosInstance.get(`/photos?_limit=10`),
    getSinglePhoto: (id) => axiosInstance.get(`/photos/${id}`),
  },
};

export default api;
