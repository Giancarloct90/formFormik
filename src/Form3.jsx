import { Formik, Form, Field, ErrorMessage } from "formik";

const Form3 = () => {
  return (
    <>
      <h1>form 3</h1>

      <Formik
        initialValues={{ nombre: "", correo: "" }}
        validate={(valores) => {
          let errors = {};
          if (!valores.nombre) {
            errors.nombre = "Escriba un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errors.nombre = "el nombre solo puede tener letras ";
          }

          if (!valores.correo) {
            errors.correo = "el correo no puede estar vacio";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errors.correo = "tiene que ser un correo valido";
          }
          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          console.log(valores.nombre);
          console.log(valores.correo);
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="John Doe"
              />
              <br />

              <br />
              <ErrorMessage
                name="nombre"
                component={() => (
                  <>
                    <h3>{errors.nombre}</h3>
                  </>
                )}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
              />
              {/* {touched && errors && (
                <>
                  <h3>{errors.correo}</h3>
                </>
              )} */}
              <ErrorMessage
                name="correo"
                component={() => (
                  <>
                    <h3>{errors.correo}</h3>
                  </>
                )}
              />
            </div>
            <button type="submit">click me</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Form3;
