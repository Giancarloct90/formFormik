import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const Form4 = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors }) => (
        <Form>
          <Field name="firstName" />

          <ErrorMessage
            name="firstName"
            component={() => (
              <>
                <h3>{errors.firstName}</h3>
              </>
            )}
          />
          <Field name="lastName" />

          <Field name="email" type="email" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
