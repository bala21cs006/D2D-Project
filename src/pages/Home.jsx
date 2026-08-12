import Hero from "../components/home/Hero";
import Category from "../components/home/Category";
import PromoBanner from "../components/home/PromoBanner";
// import Productcard from "../components/Dashboard/product/Productcard";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <PromoBanner />
      {/* <Productcard /> */}
    </>
  );
};

export default Home;