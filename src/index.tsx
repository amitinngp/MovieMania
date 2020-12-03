import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { movieStore } from "./store/ConfigureStore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from "./components/pagenotfound/NotFoundPage";
const MovieLayout = lazy(() => import("./layout/MovieLayout"));
const DetailsComponent = lazy(() => import("./components/details/DetailComponent"));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={movieStore}>
        <Suspense fallback={<div>loading...</div>}>
        <Router>
            <>
              <Switch>
                <Route exact strict path="/" component={MovieLayout} />
                <Route exact  path="/details/:id" component={DetailsComponent} />
                <Route component={NotFoundPage} />
              </Switch>
            </>
          </Router>
        </Suspense>
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
