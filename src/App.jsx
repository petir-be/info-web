import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import PlantProfile from "./pages/PlantProfile";
import About from "./pages/About";
import "./App.css";
import "./atlas.css";
const pages = {
  home: Home,
  plants: Plants,
  categories: FoodCategories,
  community: Community,
  findings: Findings,
  heritage: Heritage,
  gallery: Gallery,
  research: Research,
  plant: PlantProfile,
  about: About,
};
function route() {
  return window.location.hash.slice(1) || "home";
}
export default function App() {
  const [routeKey, setRouteKey] = useState(route);
  const page = routeKey.split("?")[0];
  const positions = useRef(new Map());

  useEffect(() => {
    const change = (event) => {
      positions.current.set(
        new URL(event.oldURL).hash.slice(1) || "home",
        window.scrollY,
      );
      setRouteKey(route());
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);

  useLayoutEffect(() => {
    document.getElementById("main")?.focus({ preventScroll: true });
    window.scrollTo(0, positions.current.get(routeKey) || 0);
  }, [routeKey]);

  useEffect(() => {
    document.title = `${page === "home" ? "Knowledge, plants & living heritage" : page === "about" ? "About Us" : page.charAt(0).toUpperCase() + page.slice(1)} | Kalaki Pamulahen`;
  }, [page]);

  const Page = pages[page];

  function selectPlant(plant) {
    positions.current.set(route(), window.scrollY);
    const from =
      page === "plant"
        ? new URLSearchParams(window.location.hash.split("?")[1]).get("from") ||
          "#plants"
        : window.location.hash || "#home";
    window.location.hash = `plant?${new URLSearchParams({ id: plant.id, from })}`;
  }
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
      <Header page={page === "plant" ? "plants" : page} />
      <main id="main" tabIndex={-1}>
        {Page ? (
          <Page key={routeKey} onSelect={selectPlant} />
        ) : (
          <section className="container page-intro">
            <h1>Page not found</h1>
            <a href="#home">Return home</a>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
