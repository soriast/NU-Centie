import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { lazy, Suspense } from "react";
import ViewStory from "./innovator_components/SeeMore/ViewStory";
const Payment = lazy(() =>
  import("./product_components/pages/Payment/Payment")
);
//components
const Products = lazy(() => import("./product_components/pages/Products"));
const ProductView = lazy(() =>
  import("./product_components/pages/ProductView/ProductView")
);
const Cart = lazy(() => import("./product_components/pages/Cart/Cart"));
const Checkout = lazy(() =>
  import("./product_components/pages/Checkout/Checkout")
);

const Home = lazy(() => import("./innovator_components/Home"));
const Main = lazy(() => import("./innovator_components/main"));
const ViewMore = lazy(() => import("./innovator_components/SeeMore/ViewStory"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products/innovations" />
          </Route>
          <Route path="/products/:category" component={Products} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment" component={Payment} />

          <Route path="/innovator" component={Home} />
          <Route path="/main" component={Main} />
          <Route path="/ViewStory" component={ViewStory} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
