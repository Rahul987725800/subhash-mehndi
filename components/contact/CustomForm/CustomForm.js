import styles from './CustomForm.module.scss';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import Error from './Error';
import Button from '@components/common/Button/Button';
import Loader from '@components/common/CustomImage/Loader';
import { useState } from 'react';
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
  const onSubmit = async (values, actions) => {
    console.log('submmit clicked');
    if (isSubmitting) return;
    // console.log(values);
    setIsSubmitting(true);
    setFormSent(false);
    const whatsappRes = await (
      await fetch('/api/whatsapp', {
        method: 'PUT',
        body: JSON.stringify({
          message: `
          Name: ${values.name},\nPhone: ${values.phone},\nMessage: ${values.message}.
        `,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
    ).json();
    console.log(whatsappRes);
    const emailRes = await (
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ ...values, subject: 'Mehndi Booking' }),
        headers: {
          'content-type': 'application/json',
        },
      })
    ).json();
    console.log(emailRes);
    const smsRes = await (
      await fetch('/api/sms', {
        method: 'POST',
        body: JSON.stringify({
          message: `
          Name: ${values.name},\nPhone: ${values.phone},\nMessage: ${values.message}.
        `,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
    ).json();
    console.log(smsRes);
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
    </div>
  );
}

export default CustomForm;
