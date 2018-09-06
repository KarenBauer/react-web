import React from 'react';
import { string, object } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {
  injectIntl,
  intlShape,
  defineMessages
} from 'react-intl';

import { parseInputErrors } from '../../utils/helpers';

const Input = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error },
  intl
}) => {
  // debugger;
  const messages = error && defineMessages({
    error: { id: parseInputErrors(error) },
  });
  const errorMessage = error && intl.formatMessage(messages.error);

  return (
    <div>
      <div>
        <TextField
          error={touched && errorMessage}
          label={errorMessage || label}
          {...input}
          {...{ placeholder, type }}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  input: object.isRequired,
  label: string,
  type: string.isRequired,
  placeholder: string,
  meta: object,
  intl: intlShape,
};

export default injectIntl(Input);
