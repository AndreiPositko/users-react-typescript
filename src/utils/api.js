const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = {
  users: {
    getUsers: () => {
      return fetch(`${BASE_URL}/users`).then((response) => response.json());
    },
    getSingleUser: (id) => {
      return fetch(`${BASE_URL}/users/${id}`).then((response) =>
        response.json()
      );
    },
    editSingleUser: async (data) => {
      try {
        const editSingleUser = await fetch(`${BASE_URL}/users/${data.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(data),
        }).then((response) => response.json());

        return editSingleUser;
      } catch (error) {
        console.warn(error);
      }
    },
    logIn: (userName, password) => {
      localStorage.setItem('username', userName);
      localStorage.setItem('password', password);
    },
    logOut: () => {},
  },
  posts: {
    getPosts: () => {
      return fetch(`${BASE_URL}/posts`).then((response) => response.json());
    },
    getSinglePost: (id) => {
      return fetch(`${BASE_URL}/posts/${id}`).then((response) =>
        response.json()
      );
    },
  },
  photos: {
    getPhotos: () => {
      return fetch(`${BASE_URL}/photos`).then((response) => response.json());
    },
    getSinglePhoto: (id) => {
      return fetch(`${BASE_URL}/photos/${id}`).then((response) =>
        response.json()
      );
    },
  },
};

export default api;
