import { IoIosSearch } from 'react-icons/io';
import useAxiosPublicUrl from '../../CustomHooks/useAxiosPublicUrl';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { useState } from 'react';
const Shop = () => {
  const axiosPublic = useAxiosPublicUrl();
  const [query, setQuery] = useState('');
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/search?query=${query}`);
      return res.data;
    },
    enabled: !!query,
  });
  if (isLoading) return <Spinner />;
  console.log(query);
  const handleSearch = () => {
    refetch();
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-4 pb-4">
        <div className="relative w-72 my-10">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none bg-white text-gray-700 pr-10"
          />
          <button
            onClick={handleSearch}
            aria-label="Search"
            className="py-3 px-4 absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 rounded-md text-white cursor-pointer"
          >
            <IoIosSearch className=" text-white text-2xl ge-600" />
          </button>
        </div>
      </div>
      <div className="w-full grid  grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-2">
        {products?.map(product => {
          const discountedPrice = (product.price * 0.95).toFixed(2);

          return (
            <Link to={`/producat/${product._id}`} key={product._id}>
              <div className="card bg-base-100 w-full  hover:shadow-2xl my-1.5">
                <figure className="w-full">
                  <img src={product.photoUrl} alt={product.title} />
                </figure>
                <div className="card-body p-2">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <div className="flex gap-2 items-center">
                    <p className="text-orange-600 text-xl font-semibold">
                      ${discountedPrice}
                    </p>
                    <p className="text-gray-500 line-through text-sm">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
