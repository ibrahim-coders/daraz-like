import Banner from '../../components/Banner/Banner';
import Products from './Products';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
