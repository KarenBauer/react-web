import React from 'react';
import { string, object } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {
  injectIntl,
  intlShape,
  defineMessages
} from 'react-intl';

import { parseInputErrors } from '../../utils/helpers';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#911e1e',
    }
  },
});

const Input = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error },
  intl
}) => {
  const messages = error && defineMessages({
    error: { id: parseInputErrors(error) },
  });
  const errorMessage = error && intl.formatMessage(messages.error);

  return (
    <MuiThemeProvider theme={theme}>
      <TextField
        className="input-no-shadow"
        error={touched && Boolean(error)}
        label={label}
        helperText={touched && errorMessage}
        {...input}
        {...{ placeholder, type }}
      />
    </MuiThemeProvider>
  );
};

Input.propTypes = {
  input: object.isRequired,
  label: string,
  type: string.isRequired,
  placeholder: string,
  meta: object,
  intl: intlShape,
};

export default injectIntl(Input);
