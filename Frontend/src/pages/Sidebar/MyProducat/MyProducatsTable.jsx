import PropTypes from 'prop-types';
import { CiEdit } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import useAxiosSecretBaseUrl from '../../../CustomHooks/useAxiosSecretBaseUrl';
import { useState } from 'react';
import ModelProducatUpadte from './ModelProducatUpadte';

const MyProducatsTable = ({ myProducat, refetch }) => {
  const axiosSecrectUrl = useAxiosSecretBaseUrl();
  const { product, price, photoUrl, name, _id } = myProducat;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  console.log(myProducat);
  const handleDelete = async id => {
    console.log(id);
    try {
      const res = await axiosSecrectUrl.delete(`/producat/${id}`);
      console.log(res);
      refetch();
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const producatUpdate = async () => {
  //   try {
  //     const updatedData = {
  //       product,
  //       price,
  //       photoUrl,
  //       name,
  //       brand,
  //       discounted,
  //       email,
  //       quantity,
  //     };
  //     console.log(updatedData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const discountPrice = (price * 0.95).toFixed(2);
  return (
    <>
      <tr onClick={() => setIsEditMode(false)}>
        <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
          {name}
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          <img src={photoUrl} alt="" className="w-10 h-10 rounded-full" />
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {product.slice(0, 20)}...
        </td>
        <td className="px-4 py-2 whitespace-nowrap text-gray-700">
          {discountPrice}
        </td>
        <td className="flex px-4 py-2 whitespace-nowrap text-gray-700 gap-4">
          <CiEdit
            className="cursor-pointer text-2xl"
            onClick={() => setIsEditMode(true)}
          />
          <FaRegTrashAlt
            className="cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </td>
      </tr>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="deleteModal"
          className="overflow-y-auto fixed top-[35%] right-0 left-0 z-50 justify-center items-center w-full h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-md h-full mx-auto  md:h-auto">
            <div className="relative  p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <svg
                className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
              </svg>
              <p className="mb-4 text-gray-500 dark:text-gray-300">
                Are you sure you want to delete this item?
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  type="submit"
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Yes, I am sure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* setEditeModel */}
      {isEditMode && (
        <div
          id="editModal"
          className="overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-modal md:h-full"
        >
          <ModelProducatUpadte />
        </div>
      )}
    </>
  );
};

MyProducatsTable.propTypes = {
  myProducat: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default MyProducatsTable;
