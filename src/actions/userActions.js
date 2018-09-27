import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';

import sessionApi from '../api/sessionApi';

export const signUp = offerer =>
  () =>
    sessionApi.signUp({ offerer }).then(({ offerer }) => {
      sessionService.saveUser(offerer);
      sessionService.saveSession();
    }).catch((err) => {
      throw new SubmissionError(err.errors);
    });
