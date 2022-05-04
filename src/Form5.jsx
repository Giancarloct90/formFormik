import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchemat = Yup.object().shape({
  primerNombre: Yup.string("only string")
    .required("es obligatorio")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  correoElectronico: Yup.string()
    .email("inavlid email")
    .required("es obligatorio"),
});

const errorMessageLabel = (error) => <h3>{error}</h3>;

const Form5 = () => {
  return (
    <>
      <h1>form</h1>
      <Formik
        initialValues={{ primerNombre: "", correoElectronico: "" }}
        validationSchema={formSchemat}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <label htmlFor="primerNombre">Nombre</label>
              <Field name="primerNombre" id="primerNombre" />
              <ErrorMessage
                name="primerNombre"
                component={() => errorMessageLabel(errors.primerNombre)}
              />
            </div>
            <div>
              <label htmlFor="correoElectronico">correo</label>
              <Field name="correoElectronico" id="correoElectronico" />
              <ErrorMessage
                name="correoElectronico"
                component={errorMessageLabel(errors.correoElectronico)}
              />
            </div>
            <button>Send info</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Form5;
