import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineFileUpload } from 'react-icons/md';
const AddProducat = () => {
  const [file, setFile] = useState(null);
  const [imageError, imageErrorMess] = useState(file);
  const handleFileChanges = e => {
    setFile(e.target.files[0]);
  };
  console.log(file);
  if (!imageError) {
    imageErrorMess('Image File not required');
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const formData = await { ...data, file };
    console.log(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-4 "
        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
      >
        <div className="flex gap-2">
          {/* title */}
          <div>
            <label className="text-sm mb-2">Producat Title</label>
            <input
              {...register('producat', { required: true })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Producat title"
            />
            {errors.producat && (
              <p className="text-red-500 text-sm">
                Producat title is required.
              </p>
            )}
          </div>

          {/* Producat Brand */}
          <div>
            <label className="text-sm mb-2"> Producat Brand</label>
            <input
              {...register('brand', { required: true })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Producat Brand"
            />
            {errors.brand && (
              <p className="text-red-500 text-sm ">
                Proudact Brand is required.
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 my-3">
          {/* price */}
          <div className="w-full">
            <label className="text-sm mb-2">Producat Price</label>
            <input
              {...register('price', { required: true }, { pattern: /\d+/ })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Producat Brand"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">
                Please enter Price for age.
              </p>
            )}
          </div>

          {/* image */}

          <div className="w-full">
            <label className="text-sm mb-2">Producat Image</label>
            <div className="flex flex-col text-center border-2 border-dashed w-full border-orange-700 rounded-lg">
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
                  {' '}
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
            <p className="text-red-500 text-sm">{imageError}</p>
          </div>
        </div>

        <div className="flex gap-4">
          {/* discounts */}

          <div className="w-full">
            <label className="text-sm mb-2"> Discount Producat</label>
            <input
              {...register('discounted', { pattern: /\d+/ })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Producat Brand"
            />
          </div>

          <div className="w-full">
            <label className="text-sm mb-2">Producat Quantity</label>
            <input
              {...register('quantity', { required: true })}
              className="w-full rounded-lg border-orange-700 p-3 text-sm"
              placeholder="Quantity title"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">
                Producat Quantity is required.
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
