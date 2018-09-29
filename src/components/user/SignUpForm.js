import React from 'react';
import { func, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from 'react-intl';

import Loading from '../common/Loading';
import Input from '../common/Input';
import { validations, signUp } from '../../utils/constraints';

const messages = defineMessages({
  firstName: { id: 'signup.form.firstname' },
  lastName: { id: 'signup.form.lastname' },
  email: { id: 'login.form.email' },
  username: { id: 'signup.form.username' },
  address: { id: 'signup.form.address' },
  phone: { id: 'signup.form.phone' },
  document: { id: 'signup.form.document' },
  password: { id: 'login.form.password' },
  passConfirmation: { id: 'signup.form.passconfirmation' }
});

const SignUpForm = ({ handleSubmit, submitting, intl }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-field-container">
      <Field
        name="firstName"
        label={intl.formatMessage(messages.firstName)}
        component={Input}
        type="text"
        placeholder="Nombre"
      />
    </div>
    <div className="form-field-container">
      <Field
        name="lastName"
        label={intl.formatMessage(messages.lastName)}
        component={Input}
        type="text"
        placeholder="Apellido"
      />
    </div>
    <div className="form-field-container">
      <Field
        name="email"
        label={intl.formatMessage(messages.email)}
        component={Input}
        type="email"
        placeholder="Email"
      />
    </div>
    <div className="form-field-container">
      <Field
        name="username"
        label={intl.formatMessage(messages.username)}
        component={Input}
        type="text"
        placeholder="Nombre de usuario"
      />
    </div>
    <div className="form-field-container">
      <Field
        name="address"
        label={intl.formatMessage(messages.address)}
        component={Input}
        type="text"
        placeholder="Dirección"
      />
    </div>
    <div className="form-field-container">
      <Field
        name="phone"
        label={intl.formatMessage(messages.phone)}
        component={Input}
        type="text"
        placeholder="Teléfono"
      />
    </div>
    <div className="form-field-container">
      <Field
        name="document"
        label={intl.formatMessage(messages.document)}
        component={Input}
        type="text"
        placeholder="Documento"
      />
    </div>
    <div className="form-field-container">
      <Field
        name="password"
        label={intl.formatMessage(messages.password)}
        component={Input}
        type="password"
        placeholder="Password"
      />
    </div>
    <div className="form-field-container">
      <Field
        name="passwordConfirmation"
        label={intl.formatMessage(messages.passConfirmation)}
        component={Input}
        type="password"
        placeholder="Password Confirmation"
      />
    </div>
    <button type="submit">
      <FormattedMessage id="login.form.submit" />
    </button>
    {submitting && <Loading />}
  </form>
);

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
  intl: intlShape.isRequired,
};

export default reduxForm({
  form: 'signUp',
  validate: validations(signUp, { fullMessages: false })
})(injectIntl(SignUpForm));
