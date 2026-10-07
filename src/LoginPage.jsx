import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';
import { useJWT } from './UserStore';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
});

export default function LoginPage() {
    const [, setLocation] = useLocation();
    const { showMessage } = useFlashMessage();
    const {setJWT} = useJWT();

    const initialValues = {
        email: '',
        password: ''
    };

    const handleSubmit = async function (values, formikHelpers) {
        try {
            console.log(values);
            const response = await axios.post(import.meta.env.VITE_API_URL + '/users/login', values);
            const token = response.data.token;
            setJWT(token);
            formikHelpers.setSubmitting(false);
            showMessage("Login Successful")
            setLocation('/');
        } catch (e) {
            console.error(e);
            showMessage("Unable to login, please try again", "danger");
        }

    };

    return (
        <div className="container">
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {formik => (
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <Field type="email" id="email" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <Field type="password" id="password" name="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary mt-3 mb-3"
                            disabled={formik.isSubmitting}
                        >
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}