import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import DeliveryBanner from "../components/DeliveryBanner";
import Newsletter from "../components/Newsletter";
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <DeliveryBanner />
      <Newsletter />
    </>
  );
}
export default Home;