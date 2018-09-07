import api from './apiService';

class Session {
  static login(offerer) {
    return api.post('/offerers/sign_in', offerer);
  }

  static logout() {
    return api.delete('/offerers/sign_out');
  }

  static signUp(offerer) {
    debugger;
    return api.post('/offerers', offerer);
  }
}

export default Session;
