import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxiosPublicUrl from '../../CustomHooks/useAxiosPublicUrl';
import Spinner from '../Spinner';
import { CiShare2, CiStar } from 'react-icons/ci';
import { TfiPlus } from 'react-icons/tfi';
import { CgBorderStyleSolid } from 'react-icons/cg';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublicUrl();
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(1);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data;
    },
  });

  const randomRating = Math.floor(Math.random() * 4) + 1; // ⭐ Rating as integer
  const producatUrl = `${window.location.origin}/products/${id}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: products?.product,
          text: 'Check out this Daraz-like product!',
          url: producatUrl, // ✅ Correct URL
        });
      } catch (error) {
        console.error('Error Sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(producatUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) return <Spinner />;
  const discountPrice = (products.price * 0.95).toFixed(2);
  return (
    <div className="flex flex-col md:flex-row flex-wrap p-4 my-8">
      {/* Product Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src={products?.photoUrl}
          alt={products?.product || 'Product'}
          className="w-full px-2 rounded-lg shadow-lg h-96 object-cover"
        />
      </div>

      {/* Product Details Section */}
      <div className="w-full md:w-1/2 border-l-2 border-orange-500 p-4 space-y-4">
        <h3 className="text-2xl font-semibold pl-2">{products?.product}</h3>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-lg font-semibold">
            {Array.from({ length: randomRating }, (_, i) => (
              <span key={i} className="text-yellow-500">
                ⭐
              </span>
            ))}
            {Array.from({ length: 5 - randomRating }, (_, i) => (
              <CiStar key={i} className="text-gray-400" />
            ))}
            <span className="pl-2">{randomRating} / 5.0</span>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="https://img.icons8.com/?size=100&id=DxIsF9smUsRE&format=png&color=000000"
              className="w-8 h-8 cursor-pointer"
              alt="wishlist icon"
            />
            <CiShare2
              className="text-2xl cursor-pointer hover:text-blue-500 transition"
              onClick={handleShare}
            />
            {copied && (
              <span className="text-green-500 text-sm">Link Copied!</span>
            )}
          </div>
        </div>

        <p className="pl-2">
          Brand: <span className="font-medium">{products?.brand}</span>
        </p>
        {/* price */}
        <div>
          <h3 className="pl-2 text-2xl text-orange-500 font-bold">
            ৳ {discountPrice}
          </h3>
          <p className="pl-2 line-through  font-bold">৳ {products?.price}</p>
        </div>
        <h3 className="pl-2">
          Stock:{' '}
          {products?.quantity > 0 ? (
            <span className="text-green-600">
              {products?.quantity} Available
            </span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </h3>

        {/* Quantity Counter */}
        <div className="flex gap-4 my-4 items-center">
          <h3 className="text-2xl">Quantity</h3>
          <button
            onClick={() => setCount(count - 1)}
            disabled={count <= 1}
            className={`px-2 py-1 border-2 ${
              count > 1
                ? ' text-orange-600'
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            <CgBorderStyleSolid />
          </button>
          <h3 className="text-2xl py-2 px-3 border-2 border-orange-600">
            {count}
          </h3>
          <button
            onClick={() => setCount(count + 1)}
            disabled={count >= products?.quantity}
            className={`px-2 py-1 border-2 ${
              count < products?.quantity
                ? ' text-orange-600'
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            <TfiPlus />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-6">
          <button className="w-full bg-blue-500 px-4 py-2.5 rounded text-white hover:bg-blue-600 transition cursor-pointer">
            Buy Now
          </button>
          <button className="w-full bg-orange-500 px-4 py-2.5 rounded text-white hover:bg-orange-600 transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
