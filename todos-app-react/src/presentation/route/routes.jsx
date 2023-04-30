import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";

export const routes = [
  {
    path: "/",
    exact: true,
    children: Home,
  },
  {
    path: "/about",
    exact: true,
    children: About,
  },
  {
    path: "/contact",
    exact: true,
    children: Contact,
  },
];
/**
 * This code is not working yet
 */
