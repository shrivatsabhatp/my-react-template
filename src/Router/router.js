import React from "react";
import { Route, useParams, Link, Switch } from "react-router-dom";
import Pallet from "../components/Pallet/Pallet";

export default function Router() {
  // const { page } = useParams();
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/page1">page</Link>
      <Link to="/common">common</Link>
      <Link to="/child">child</Link> */}

      <Home />
      {/* <Switch>
        <Route>
        </Route>
      </Switch> */}
    </>
  );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Pallet>
        <header>name</header>
      </Pallet>
    </>
  );
}
