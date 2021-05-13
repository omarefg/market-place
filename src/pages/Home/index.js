import withShoppingCart from "domains/product/shoppingCart";
import withFeedback from "domains/feedback";
import HomePage from './Home'

export const Home = withFeedback(withShoppingCart(HomePage))