import validate from 'validate.js';

import validateCi from './ci';

validate.validators.validCi = validateCi;

export const login = {
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' },
  },
  password: {
    presence: { message: 'password.presence' },
  }
};

export const signUp = {
  firstName: {
    presence: { message: 'firstName.presence' },
    length: {
      minimum: 3,
      message: 'firstName.length'
    }
  },
  lastName: {
    presence: { message: 'lastName.presence' },
    length: {
      minimum: 3,
      message: 'lastName.length'
    }
  },
  email: {
    presence: { message: 'email.presence' },
    email: { message: 'email.invalid' }
  },
  username: {
    presence: { message: 'username.presence' },
    length: {
      minimum: 3,
      message: 'username.length'
    }
  },
  address: {
    presence: { message: 'address.presence' }
  },
  phone: {
    presence: { message: 'phone.presence' },
  },
  document: {
    presence: { message: 'document.presence' },
    validCi: { message: 'document.validCi' }
  },
  password: {
    presence: { message: 'password.presence' },
    length: {
      minimum: 8,
      message: 'password.length'
    }
  },
  passwordConfirmation: {
    presence: { message: 'passwordConfirmation.presence' },
    equality: { attribute: 'password', message: 'passwordConfirmation.equality' }
  }
};

export const validations = (constraints, props = {}) =>
  data => validate(data.toJS(), constraints, props) || {};
