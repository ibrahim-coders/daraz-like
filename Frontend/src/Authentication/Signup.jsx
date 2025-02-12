import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CiRead, CiUnread } from 'react-icons/ci';
import { AuthContext } from '../AuthContext/AuthProviters';

const Signup = ({ openLoginModal }) => {
  const { UserRegister } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      const result = await UserRegister(data.email, data.password);
      console.log(result.user); // Handle success
    } catch (error) {
      console.log(error.message); // Handle error
    }
  };
  return (
    <div className="min-w-sm mx-auto max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-xl font-semibold text-gray-700">
        Signup Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1 - Personal Details */}
        {step === 1 && (
          <>
            {/* First & Last Name */}
            <div className="flex flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 pb-1.5">
                  First Name
                </label>
                <input
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                  placeholder="First Name"
                  className="w-full py-2 px-3 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 pb-1.5">
                  Last Name
                </label>
                <input
                  {...register('lastName', {
                    required: 'Last name is required',
                  })}
                  placeholder="Last Name"
                  className="w-full py-2 px-3 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* File Upload & Email */}
            <div className="flex flex-row gap-4 py-2">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 pb-1.5">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register('image', {
                    required: 'Profile image is required',
                  })}
                  className="w-full py-2 px-3 border border-orange-500 rounded-md"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">{errors.image.message}</p>
                )}
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 pb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder="Enter your email"
                  className="w-full py-2 px-3 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Next
            </button>
          </>
        )}

        {/* Step 2 - Password Fields */}
        {step === 2 && (
          <>
            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 pb-1.5">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                placeholder="Enter password"
                className="w-full py-2 px-3 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              >
                {showPassword ? <CiRead /> : <CiUnread />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative my-3">
              <label className="block text-sm font-medium text-gray-700 pb-1.5">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: value =>
                    value === watch('password') || 'Passwords do not match',
                })}
                placeholder="Confirm Password"
                className="w-full py-2 px-3 border border-orange-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              >
                {showConfirmPassword ? <CiRead /> : <CiUnread />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="w-full flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Back
              </button>

              <button>
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full py-2 px-3 bg-green-500 text-white rounded-md hover:bg-green-600 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
              </button>
            </div>
          </>
        )}
      </form>

      {/* Login Option */}
      <p className="text-center text-gray-500 mt-4">
        Already have an account?{' '}
        <button
          onClick={openLoginModal}
          className="text-sky-500 hover:underline"
        >
          Log in
        </button>
      </p>

      {/* Google Sign Up */}
      <p className="py-2 text-center text-gray-500">Or, sign up with</p>
      <div className="flex justify-center mt-2">
        <button className="flex items-center gap-3 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
            alt="Google Logo"
          />
          <span className="text-lg font-medium">Sign up with Google</span>
        </button>
      </div>
    </div>
  );
};

Signup.propTypes = {
  openLoginModal: PropTypes.func.isRequired,
};

export default Signup;
