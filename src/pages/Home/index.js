import withShoppingCart from "domains/product/subdomains/shoppingCart";
import withPokemon from "domains/product/subdomains/pokemon";
import withRickAndMorty from "domains/product/subdomains/rickAndMorty";
import withProduct from "domains/product";
import withLayout from "domains/layout";
import HomePage from "./Home";

export const Home = withProduct(withShoppingCart(withLayout(withRickAndMorty(withPokemon(HomePage)))));
