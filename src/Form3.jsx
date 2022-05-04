import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  // nombre: Yup.string().required("required").nullable(),
  correo: Yup.string().email("Invalid email").required("Required"),
});

const Form3 = () => {
  return (
    <>
      <h1>form 3</h1>
      <Formik initialValues={{ nombre: "", correo: "" }} validate={userSchema}>
        {({ errors }) => (
          <Form>
            <label htmlFor="nombre">Nombre</label>
            <Field
              type="text"
              id="nombre"
              name="nombre"
              placeholder="John Doe"
            />
            <label htmlFor="correo">Correo</label>
            <Field
              type="text"
              id="correo"
              name="correo"
              placeholder="correo@correo.com"
            />
            <ErrorMessage
              name="correo"
              component={() => (
                <>
                  <h3>{errors.correo}</h3>
                </>
              )}
            />
            <button type="submit">click me</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Form3;
