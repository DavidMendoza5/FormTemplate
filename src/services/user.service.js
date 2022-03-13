import axios from 'axios';

const url = 'http://localhost:3900/users';

class UserService {
  createUser(user) {
    return axios.post(url, user);
  }
}

export default new UserService();