// import { useState } from 'react';
// import { MdOutlineFileUpload } from 'react-icons/md';
// import axios from 'axios';

// export default function CloudinaryUpload() {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const handleFileChange = e => {
//     setFile(e.target.files[0]);
//   };
//   const handleUpload = async () => {
//     if (!file) return;
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append(
//       'upload_preset',
//       import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
//     );
//     setUploading(true);
//     try {
//       const response = await axios.post(
//         `https://api.cloudinary.com/v1_1/${
//           import.meta.env.VITE_api_key
//         }/image/upload`,
//         formData
//       );
//       console.log(response.data.url);
//       setUploading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="flex flex-col items-center p-5 space-y-5 mt-56">
//       <div className="border-2 border-dashed border-gray-500 rounded-lg py-10 w-80 text-center">
//         <input
//           type="file"
//           id="fileInput"
//           onChange={handleFileChange}
//           className="hidden"
//         />

//         <div className="flex flex-col text-center ">
//           <label
//             htmlFor="fileInput"
//             className="my-2 flex flex-col text-center cursor-pointer"
//           >
//             <div className="text-center items-center">
//               {' '}
//               <MdOutlineFileUpload className=" text-2xl" />
//             </div>
//             Choose File
//           </label>
//         </div>
//       </div>
//       <button
//         onClick={handleUpload}
//         className={`px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-800 ${
//           !file || uploading ? 'opacity-50 cursor-not-allowed' : ''
//         }`}
//         disabled={!file || uploading}
//       >
//         {uploading ? 'Uploading..' : 'Upload'}
//       </button>
//     </div>
//   );
// }

import axios from 'axios';

// export const imageUpload = async imageData => {
//   const formData = new FormData();
//   formData.append('file', imageData);
//   formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

//   try {
//     const response = await axios.post(
//       `https://api.cloudinary.com/v1_1/${
//         import.meta.env.VITE_API_KEY
//       }/image/upload`,
//       formData
//     );
//     return response.data.secure_url; // Use secure_url for a secure image link
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     throw error; // You can handle the error as needed
//   }
// };

export const imageUpload = async imageData => {
  if (!imageData) {
    console.error('No image selected!');
    return null;
  }

  const formData = new FormData();
  formData.append('file', imageData);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_API_KEY
      }/image/upload`,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    console.error(
      'Error uploading image:',
      error.response ? error.response.data : error.message
    );
    return null;
  }
};
