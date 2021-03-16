const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = {
  users: {
    getUsers: () => {
      return fetch(`${BASE_URL}/users`).then((response) => response.json());
    },
    logIn: (userName, password) => {
      localStorage.setItem('username', userName);
      localStorage.setItem('password', password);
    },
    logOut: () => {},
  },
};

export default api;
