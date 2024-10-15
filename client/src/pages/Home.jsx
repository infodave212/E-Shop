import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Item from "../components/Item"
import NewItem from "../components/NewItem"
import WhyItem from "../components/WhyItem"
import GiftItem from "../components/GiftItem"
import Contacts from "../components/Contacts"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div className="container">
      <Hero/>
      {/* <CategoryMenu /> */}
      <Item/>
      <NewItem/>
      <WhyItem/>
      <GiftItem/>
      <Contacts/>

      {/* <ProductList /> */}
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
