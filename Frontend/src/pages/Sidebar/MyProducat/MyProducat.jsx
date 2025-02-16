import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../../CustomHooks/useAuth';

import MyProducatsTable from './myProducatsTable';
import useAxiosSecretBaseUrl from '../../../CustomHooks/useAxiosSecretBaseUrl';

const MyProducat = () => {
  const { user } = useAuth();
  console.log(user);

  const axiosSecrectUrl = useAxiosSecretBaseUrl();
  const {
    data: sellerproducat = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['sellerproducat', user?.email],
    queryFn: async () => {
      const res = await axiosSecrectUrl.get(`/sellerproducat/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl text-orange-700 my-2">My Products</h2>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
      <div className="rounded-lg border border-gray-200">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Seller Name
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Producat Photo
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Producat Title
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Price
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sellerproducat.map(myProducat => (
                <MyProducatsTable
                  key={myProducat._id}
                  myProducat={myProducat}
                  isLoading={isLoading}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block size-8 rounded-sm border-orange-600 bg-orange-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MyProducat;
