import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProviters';

const Login = ({ openRegisterModal }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = 'Password must contain at least one lowercase letter';
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = 'Password must contain at least one number';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      console.log(values); // Handle login submission
    },
  });

  return (
    <div className="min-w-sm mx-auto max-w-md  bg-white rounded-lg shadow-md mt-10 p-10">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Please enter your email"
            className={`w-full py-2 px-3 border ${
              formik.errors.email ? 'border-red-500' : 'border-orange-500'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Please enter your password"
            className={`w-full py-2 px-3 border ${
              formik.errors.password ? 'border-red-500' : 'border-orange-500'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 py-2 px-4 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
        >
          LOG IN
        </button>
      </form>

      <p className="text-center text-gray-500 mt-4">
        Dont have an account?{' '}
        <button
          onClick={openRegisterModal}
          className="text-sky-500 hover:underline"
        >
          Sign up
        </button>
      </p>

      <p className="py-2 text-center text-gray-500">Or, log in with</p>
      <div className="flex justify-center mt-2 items-center gap-2">
        <button className="flex items-center justify-center gap-3 w-full px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google Logo"
          />
          <span className="text-lg font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

Login.propTypes = {
  openRegisterModal: PropTypes.func,
};

export default Login;
