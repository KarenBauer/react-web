import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';

import sessionApi from '../api/sessionApi';

export const signUp = offerer =>
  () =>
    sessionApi.signUp({ offerer }).then(({ offerer }) => {
      debugger;
      sessionService.saveUser(offerer);
    }).catch((err) => {
      throw new SubmissionError(err.errors);
    });
