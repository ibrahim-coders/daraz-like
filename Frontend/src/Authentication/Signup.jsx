// import { useState } from 'react';
// import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log('Signup Data:', formData);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h3 className="text-lg font-bold mb-4">Sign Up</h3>
//         <form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="mb-6">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-500 py-2 px-4 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-xl text-center text-gray-500 mt-4">
//           Already have an account?
//           <Link to="/login" className="text-sky-500 hover:underline">
//             Log in Now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

const Signup = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
        </div>
        <p className="text-xl text-center text-gray-500 mt-4">
          Already have an account?
          <Link to="/login" className="text-sky-500 hover:underline">
            Log in Now
          </Link>
        </p>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default Signup;
