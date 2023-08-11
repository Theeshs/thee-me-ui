import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Newsletter } from './Newsletter';
import {
  REACT_APP_MAILCHIMP_ID,
  REACT_APP_MAILCHIMP_U,
  REACT_APP_MAILCHIMP_URL,
} from '../config';

export const MailchimpForm = () => {
  const postUrl = `${REACT_APP_MAILCHIMP_URL}?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};
