import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Plants from "./pages/Plants";
import FoodCategories from "./pages/FoodCategories";
import Community from "./pages/Community";
import Findings from "./pages/Findings";
import Gallery from "./pages/Gallery";
import Research from "./pages/Research";
import Heritage from "./pages/Heritage";
import PlantDetail from "./components/PlantDetail";
import "./App.css";
const pages = {
  home: Home,
  plants: Plants,
  categories: FoodCategories,
  community: Community,
  findings: Findings,
  heritage: Heritage,
  gallery: Gallery,
  research: Research,
};
function route() {
  return window.location.hash.slice(1) || "home";
}
export default function App() {
  const [routeKey, setRouteKey] = useState(route);
  const page = routeKey.split("?")[0];
  const [plant, setPlant] = useState(null);
  useEffect(() => {
    const change = () => {
      setRouteKey(route());
      setPlant(null);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    document.title = `${page === "home" ? "Plants, people & a living heritage" : page.charAt(0).toUpperCase() + page.slice(1)} | Talaandig`;
  }, [page]);
  const Page = pages[page];
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main").focus();
        }}
      >
        Skip to content
      </a>
      <Header page={page} />
      <main id="main" tabIndex={-1}>
        {Page ? (
          <Page key={routeKey} onSelect={setPlant} />
        ) : (
          <section className="container page-intro">
            <h1>Page not found</h1>
            <a href="#home">Return home</a>
          </section>
        )}
      </main>
      <Footer />
      <PlantDetail plant={plant} onClose={() => setPlant(null)} />
    </>
  );
}
