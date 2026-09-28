import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const marketingPreferences = [
  {
    "id": 1,
    "name": "Email Marketing"
  },
  {
    "id": 2,
    "name": "SMS Marketing"
  },
  {
    "id": 3,
    "name": "Newsletter"
  },
  {
    "id": 4,
    "name": "Product Updates"
  }
]

// create a validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid Email Address').required('Email is required'),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Please provide a password"),
  confirmPassword: Yup.string().oneOf([
    Yup.ref('password'), null
  ], "The password must match").required('Confirm password is required'),
  salutation: Yup.string().required("Please enter a salutation")
})

function RegisterPage() {

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    salutation: "",
    marketingPreferences: []
  }

  const handleSubmit = (values, formikHelpers) => {
    console.log(values);

    // todo: call a RESTFul Endpoint to actually create the user
    setTimeout(() => {
      formikHelpers.setSubmitting(false);
    }, 3000);
  }

  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <p>This is where users can create a new account.</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >

        {
          (formik) => (
            <Form>

              <div className="mb-3">
                <label className="form-label">Name:</label>
                <Field type="text"
                  className="form-control"
                  id="name"
                  name="name" />
              </div>
              <ErrorMessage name="name" component="div" className="text-danger"/>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <Field type="email"
                  className="form-control"
                  id="name"
                  name="email" />
              </div>
              <ErrorMessage name="email" component="div" className="text-danger"/>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <Field type="password"
                  className="form-control"
                  id="password"
                  name="password" />
              </div>
              <ErrorMessage name="password" component="div" className="text-danger"/>


              {/* Confirm Password */}
              <div className="mb-3">
                <label className="form-label">Confirm Password:</label>
                <Field type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword" />
              </div>
              <ErrorMessage name="confirmPassword" component="div" className="text-danger"/>

              {/* Salutation */}
              <div className="mb-3">
                <label className="form-label">Salutation</label>
                <div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="salutation"
                      id="mr"
                      value="Mr"
                    />
                    <label className="form-check-label" htmlFor="mr">Mr</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="salutation"
                      id="ms"
                      value="Ms"
                    />
                    <label className="form-check-label" htmlFor="ms">Ms</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="salutation"
                      id="mrs"
                      value="Mrs"
                    />
                    <label className="form-check-label" htmlFor="mrs">Mrs</label>
                  </div>
                </div>
              </div>
              <ErrorMessage name="salutation" component="div" className="text-danger"/>


              {/* Checkboxes */}
              <div className="mb-3">
                <label className="form-label">Marketing Preferences</label>

                {
                  marketingPreferences.map(function (p) {
                    return (<div className="form-check" key={p.id}>
                      <Field
                        type="checkbox"
                        name="marketingPreferences"
                        value={String(p.id)}
                        className="form-check-input"
                        id={`marketing-preferences-${p.id}`}
                      />
                      <label className="form-check-label">
                         {p.name}
                      </label>
                    </div>)
                  })
                }
              </div>


              <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>Register</button>

            </Form>
          )
        }


      </Formik>
    </div>
  );
}

export default RegisterPage;
