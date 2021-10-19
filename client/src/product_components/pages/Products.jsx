import { Helmet } from "react-helmet";
import { Redirect, Route, Switch, useParams } from "react-router";
import Filter from "../../product_components/components/Products/Filter";
import Gallery from "../../product_components/components/Products/Gallery";
import Heading from "../../product_components/components/Products/Heading";
import NavBar from "../../NavbarFooter/NavBar";
// import Footer from "../../../NavbarFooter/Footer";

function Products() {
  let { category } = useParams();

  return (
    <Switch>
      <Route path="/products/innovations">
        <Helmet>
          <title>Innovations | </title>
        </Helmet>
        <NavBar />

        <Heading category={category} />

        <Gallery props={category} />
      </Route>
      <Route path="/products/books">
        <Helmet>
          <title>Books | </title>
        </Helmet>
        {/* <img src={Navbar} alt="" style={{ width: "100%" }} /> */}
        <NavBar />
        <Heading category={category} />
        <Gallery props={category} />
      </Route>
      <Route path="/products/souvenirs">
        <Helmet>
          <title>Souvenirs | </title>
        </Helmet>
        {/* <img src={Navbar} alt="" style={{ width: "100%" }} /> */}
        <NavBar />
        <Heading category={category} />
        <Gallery props={category} />
      </Route>
      <Route path="/products/">
        <Redirect to="/products/innovations" />
      </Route>
    </Switch>
  );
}

export default Products;
