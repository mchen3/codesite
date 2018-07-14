
// import FortyPage from "App.jsx";

/* Bug here
When I uncomment the SandboxPage, the hyperPage imports the forty/Sandbox.css
Go to localhost:3000/hyper, and check the head styles, it imports from forty
why?
*/
import SandboxPage from "components/forty/Sandbox/Sandbox.jsx";
import HyperPage from "components/hyperspace/HyperApp.jsx";
import FortyPage from "components/forty/FortyApp.jsx";

var indexRoutes = [
  //  { path: "/sandbox", name: "Sandbox Page", component: SandboxPage },
    { path: "/forty", name: "Forty Page", component: FortyPage },
  { path: "/hyper", name: "Hyper Page", component: HyperPage },
];

export default indexRoutes;
