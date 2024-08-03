import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationPage.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 digits")
    .required("Required"),
});

export default function RegistrationPage() {
  const id = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registration(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={`name-${id}`}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={`name-${id}`}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.container}>
          <label htmlFor={`email-${id}`}>Email</label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id={`email-${id}`}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.container}>
          <label htmlFor={`password-${id}`}>Password</label>
          <Field
            className={css.field}
            type="password"
            name="password"
            id={`password-${id}`}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>

        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
