import api from './apiService';

class Session {
  static login(user) {
    return api.post('/offerers/sign_in', user);
  }

  static logout() {
    return api.delete('/offerers/sign_out');
  }

  static signUp(user) {
    return api.post('/offerers', user);
  }
}

export default Session;
