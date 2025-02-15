import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineFileUpload } from 'react-icons/md';
import { imageUpload } from '../../../components/CloudinaryUpload';
import { useAuth } from '../../../CustomHooks/useAuth';
import useAxiosPublicUrl from '../../../CustomHooks/useAxiosPublicUrl';
import toast from 'react-hot-toast';

const AddProducat = () => {
  const [file, setFile] = useState(null);
  const [imageError, setImageError] = useState('');
  const axiosPublic = useAxiosPublicUrl();
  const { user } = useAuth();
  const handleFileChanges = e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setImageError('Image file is required.');
    } else {
      setImageError('');
      setFile(selectedFile);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    if (!file) {
      setImageError('Image file is required.');
      return;
    }
    const photoUrl = await imageUpload(file);
    console.log(photoUrl);
    const formData = {
      ...data,
      photoUrl,
      name: user?.displayName,
      email: user?.email,
    };
    console.log(formData);
    try {
      await axiosPublic.post('/producat', formData);
      toast.success('add producats Sucessfully');
      // Reset the form
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-4 "
        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
      >
        <div className="flex gap-2">
          <div>
            <label className="text-sm mb-2">Product Title</label>
            <input
              {...register('product', { required: true })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Product title"
            />
            {errors.product && (
              <p className="text-red-500 text-sm">Product title is required.</p>
            )}
          </div>

          <div>
            <label className="text-sm mb-2">Product Brand</label>
            <input
              {...register('brand', { required: true })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Product Brand"
            />
            {errors.brand && (
              <p className="text-red-500 text-sm">Product Brand is required.</p>
            )}
          </div>
        </div>

        <div className="flex gap-4 my-3">
          <div className="w-full">
            <label className="text-sm mb-2">Product Price</label>
            <input
              {...register('price', { required: true, pattern: /\d+/ })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Product Price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">
                Please enter a valid price.
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="text-sm mb-2">Product Image</label>
            <div className="flex flex-col text-center border-1 w-full border-orange-700 rounded-lg">
              <input
                onChange={handleFileChanges}
                type="file"
                id="fileInput"
                className="hidden"
              />
              <label
                htmlFor="fileInput"
                className="my-2 text-center items-center cursor-pointer"
              >
                <div className="flex justify-center gap-2 text-center items-center">
                  {file ? (
                    'Upload Image'
                  ) : (
                    <>
                      <MdOutlineFileUpload className="text-2xl" />
                      <span>Choose File</span>
                    </>
                  )}
                </div>
              </label>
            </div>
            {imageError && <p className="text-red-500 text-sm">{imageError}</p>}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <label className="text-sm mb-2">Discount Price</label>
            <input
              {...register('discounted', { pattern: /\d+/ })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Discount Price"
            />
          </div>

          <div className="w-full">
            <label className="text-sm mb-2">Product Quantity</label>
            <input
              {...register('quantity', { required: true })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Quantity"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">
                Product Quantity is required.
              </p>
            )}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-orange-600 text-white hover:bg-amber-800 transition-all duration-300 ease-in-out transform py-3 my-2 rounded-md text-center"
        />
      </form>
    </>
  );
};

export default AddProducat;
