import { Formik } from "formik";

const Form2 = () => {
  return (
    <>
      <Formik
        initialValues={{}}
        validate={(valores) => {
          let errores = {};
          if (!valores.nombre) {
            errores.nombre = "Escriba un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "el nombre solo puede tener letras ";
          }

          if (!valores.email) {
            errores.email = "el email no puede estar vacio";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "tiene que ser un email valido";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          console.log(valores);
          resetForm();
          console.log("hello");
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <form action="" className="formDiv" onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                placeholder="nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
            </div>
            <div className="correo">
              <label htmlFor="">Correo</label>
              <input
                type="text"
                placeholder="correo@correo"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <button> addd info</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form2;
