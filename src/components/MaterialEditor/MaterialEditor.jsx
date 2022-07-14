import { Formik, Form, Field } from 'formik';

export const MaterialEditor = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      <Form>
        <label>
          Title
          <Field name="title" type="text"></Field>
        </label>

        <label>
          Link
          <Field name="link" type="text"></Field>
        </label>

        <button type="submit">Add material</button>
      </Form>
    </Formik>
  );
};
