import withShoppingCart from "domains/product/subdomains/shoppingCart";
import withProduct from "domains/product";
import withLayout from "domains/layout";
import HomePage from "./Home";

export const Home = withProduct(withShoppingCart(withLayout(HomePage)));
