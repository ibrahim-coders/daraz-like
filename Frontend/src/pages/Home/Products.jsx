import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import useAxiosPublicUrl from '../../CustomHooks/useAxiosPublicUrl';

const Products = () => {
  const axiosPublic = useAxiosPublicUrl();

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get('/products');
      return res.data;
    },
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h2 className="text-start text-xl font-bold py-4">Flash Sale</h2>
        <Link
          to="/shop"
          className="text-orange-500 px-2 py-3 border-2 border-orange-500 text-xl"
        >
          SHOP ALL PRODUCTS
        </Link>
      </div>

      {/* Render fetched products with 5% discount */}
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

export default Products;
