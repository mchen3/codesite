
import AppPage from "App.jsx";
import SandboxPage from "components/Sandbox/Sandbox.jsx";

var indexRoutes = [
  { path: "/sandbox", name: "Sandbox Page", component: SandboxPage },
  { path: "/", name: "Loading Page", component: AppPage },
];

export default indexRoutes;
