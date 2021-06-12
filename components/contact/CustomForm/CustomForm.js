import styles from './CustomForm.module.scss';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import Error from './Error';
import Button from '@components/common/Button/Button';
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
  const onSubmit = (values) => {
    fetch('/api/whatsapp', {
      method: 'PUT',
      body: JSON.stringify({
        message: `
          Name: ${values.name},\nPhone: ${values.phone},\nMessage: ${values.message}.
        `,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((result) => {
      // console.log(result);
    });
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
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CustomForm;
