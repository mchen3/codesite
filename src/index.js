import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
//import indexRoutes from "./routes/index.jsx";

var hist = createBrowserHistory();

// ReactDOM.render(
//   <Router history={hist}>
//     <Switch>
//       {indexRoutes.map((prop, key) => {
//         return <Route path={prop.path} key={key} component={prop.component} />;
//       })}
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
