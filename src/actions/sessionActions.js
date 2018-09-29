import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';

import sessionApi from '../api/sessionApi';

export const login = offerer =>
  () =>
    sessionApi.login({ offerer }).then(({ offerer }) => {
      sessionService.saveUser(offerer);
    }).catch((err) => {
      throw new SubmissionError({
        _error: err.errors
      });
    });

export const logout = () =>
  () =>
    sessionApi.logout().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
    }).catch((err) => {
      throw (err);
    });