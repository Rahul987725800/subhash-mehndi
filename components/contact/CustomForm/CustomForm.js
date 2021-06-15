import styles from './CustomForm.module.scss';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import Error from './Error';
import Button from '@components/common/Button/Button';
import Loader from '@components/common/CustomImage/Loader';
import { useState } from 'react';

import * as ga from '@lib/ga';
const initialValues = {
  name: '',
  phone: '',
  message: '',
};

const validate = (values) => {
  let errors = {};

  if (!values.phone) {
    errors.phone = 'Please enter your phone number';
  } else if (
    !/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(values.phone)
  ) {
    errors.phone = 'Invalid format';
  }
  return errors;
};
const MyTextArea = (props) => {
  const [field, meta] = useField(props);
  // console.log(field);
  // console.log(meta);
  return (
    <>
      <textarea {...field} {...props} />
    </>
  );
};
function CustomForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState();
  const search = (message) => {
    ga.event({
      action: 'query form submitted',
      params: {
        search_term: message,
      },
    });
  };
  const onSubmit = async (values, actions) => {
    console.log('submmit clicked');
    if (isSubmitting) return;
    // console.log(values);
    setIsSubmitting(true);
    setFormSent(false);
    const message = `
    Name: ${values.name},\nPhone: ${values.phone},\nMessage: ${values.message}.
  `;
    search(message);
    fetch('/api/whatsapp', {
      method: 'PUT',
      body: JSON.stringify({
        message,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => [console.log(e)]);

    // console.log(whatsappRes);
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({ ...values, subject: 'Mehndi Booking' }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => [console.log(e)]);
    // console.log(emailRes);
    fetch('/api/sms', {
      method: 'POST',
      body: JSON.stringify({
        message,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => [console.log(e)]);

    setIsSubmitting(false);
    setFormSent(true);

    actions.resetForm();
  };
  return (
    <div className={styles.form}>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="phone">
              Phone No. <span className={styles.mandatory}>*</span>
            </label>
            <Field type="number" id="phone" name="phone" />
            <ErrorMessage name="phone" component={Error} />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="message">Message</label>
            <MyTextArea label="Message" id="message" name="message" rows="6" />
          </div>
          <div className={styles.button}>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            {isSubmitting && <Loader />}
          </div>
        </Form>
      </Formik>
      {formSent && (
        <div className={styles.response}>
          Your response is recorded, we will contact you soon.
        </div>
      )}
      {error && (
        <div className={styles.response}>
          Some error occurred, your response could not be recorded, please try
          again or contact manually.
        </div>
      )}
    </div>
  );
}

export default CustomForm;
