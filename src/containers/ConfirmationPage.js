import React from 'react';
import { FormattedMessage } from 'react-intl';

const ConfirmationPage = () => (
  <div className="confirmation-box">
    <p className="confirmation-title"><FormattedMessage id="confirmation.title" /></p>
    <p><FormattedMessage id="confirmation.description" /></p>
  </div>
);

export default ConfirmationPage;
