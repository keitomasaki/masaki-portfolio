import React from "react";
import { Route, Switch, Link } from "react-router-dom";

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page_a">Page A</Link>
        </li>
        <li>
          <Link to="/page_b">Page B</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page_a" component={PageA} />
      <Route path="/page_b" component={PageB} />
    </Switch>
  </main>
);

const Home = () => (
  <div>
    <h1> Home!!!!! </h1>
  </div>
);

const PageA = () => (
  <div>
    <h1> Page A!!!!! </h1>
  </div>
);

const PageB = () => (
  <div>
    <h1> Page B!!!!! </h1>
  </div>
);

export default App;
