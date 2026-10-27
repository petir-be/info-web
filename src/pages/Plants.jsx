import { useState, useDeferredValue, useRef } from "react";
import PageIntro from "../components/PageIntro";
import PlantCard from "../components/PlantCard";
import { records, filterPlants } from "../data/catalog";
import { categories } from "../data/study";
import PlantTable from "../components/PlantTable";
import { Pagination } from "../components/Pagination";

export default function Plants({ onSelect }) {
  const resultsRef = useRef(null);
  const initial = Object.fromEntries(
    new URLSearchParams(window.location.hash.split("?")[1]),
  );
  const [filters, setFilters] = useState({
    collection: initial.category ? "food" : "",
    q: "",
    family: "",
    part: "",
    category: "",
    source: "",
    preparation: "",
    shared: "",
    view: "cards",
    sort: "local",
    direction: "asc",
    page: "1",
    ...initial,
  });
  const query = useDeferredValue(filters.q);
  function update(values) {
    const resetPage = Object.keys(values).some(key => key !== "page" && key !== "view");
    const next = { ...filters, ...values, page: resetPage ? "1" : values.page ?? filters.page };
    setFilters(next);
    const params = new URLSearchParams(
      Object.entries(next).filter(([, value]) => value),
    );
    window.history.replaceState(null, "", `#plants?${params}`);
  }
  const result = filterPlants({ ...filters, q: query }).sort((a, b) => {
    const order =
      filters.sort === "ur"
        ? (a.ur ?? -1) - (b.ur ?? -1)
        : String(a[filters.sort] || "").localeCompare(
            String(b[filters.sort] || ""),
          );
    return filters.direction === "desc" ? -order : order;
  });
  const pageCount = Math.max(1, Math.ceil(result.length / 15));
  const requestedPage = Number(filters.page);
  const page = Number.isInteger(requestedPage) ? Math.min(pageCount, Math.max(1, requestedPage)) : 1;
  const start = (page - 1) * 15;
  const visiblePlants = result.slice(start, start + 15);
  function goToPage(value) {
    update({ page: String(value) });
    resultsRef.current?.scrollIntoView({ block: "start" });
    resultsRef.current?.focus({ preventScroll: true });
  }
  const families = [
    ...new Set(
      records
        .filter(
          (p) => !filters.collection || p.collection === filters.collection,
        )
        .map((p) => p.family),
    ),
  ].sort();
  function collection(value) {
    update({
      collection: value,
      category: "",
      source: "",
      preparation: "",
      family: "",
      sort: "local",
      direction: "asc",
    });
  }
  function sort(key) {
    update({
      sort: key,
      direction:
        filters.sort === key && filters.direction === "asc" ? "desc" : "asc",
    });
  }
  return (
    <section className="container page-section atlas-explorer">
      <PageIntro
        eyebrow="THE TALAANDIG PLANT ATLAS"
        title="A world of plants to explore"
      >
        Discover food and medicinal knowledge documented in two studies from
        Lilingayon, Bukidnon. Begin with a familiar name, a family, or a plant
        part.
      </PageIntro>
      <div className="collection-tabs" aria-label="Plant collection">
        {[
          ["", "All plants"],
          ["food", "Food plants"],
          ["medicine", "Medicinal plants"],
        ].map(([value, label]) => (
          <button
            key={value}
            aria-pressed={filters.collection === value}
            onClick={() => collection(value)}
          >
            {label}
            <span>
              {filterPlants({ collection: value }).length}
            </span>
          </button>
        ))}
      </div>
      <div className="atlas-filters">
        <label className="atlas-search">
          Find a plant
          <input
            type="search"
            value={filters.q}
            onChange={(e) => update({ q: e.target.value })}
            placeholder="Try Kamote, Lagundi, leaves, or a scientific name…"
          />
        </label>
        <label>
          Family
          <select
            value={filters.family}
            onChange={(e) => update({ family: e.target.value })}
          >
            <option value="">All families</option>
            {families.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>
        <label>
          Plant part
          <select
            value={filters.part}
            onChange={(e) => update({ part: e.target.value })}
          >
            <option value="">All parts</option>
            {[
              "leaves",
              "root",
              "fruit",
              "bark",
              "flower",
              "seed",
              "stem",
              "latex",
            ].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>
      {filters.collection === "food" && (
        <a className="text-link" style={{color:"GrayText", fontSize:13, textDecoration:"underline"}} href="#categories">
          Explore the nine food-use categories 
        </a>
      )}
      <details className="more-filters">
        <summary>More filters</summary>
        <div className="atlas-filters">
          {filters.collection === "food" && (
            <>
              <label>
                Food category
                <select
                  value={filters.category}
                  onChange={(e) => update({ category: e.target.value })}
                >
                  <option value="">All food uses</option>
                  {categories.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Plant source
                <select
                  value={filters.source}
                  onChange={(e) => update({ source: e.target.value })}
                >
                  <option value="">All sources</option>
                  <option>Wild</option>
                  <option>Cultivated</option>
                </select>
              </label>
            </>
          )}
          {filters.collection === "medicine" && (
            <label>
              Preparation method
              <select
                value={filters.preparation}
                onChange={(e) => update({ preparation: e.target.value })}
              >
                <option value="">All methods</option>
                {[
                  ["D", "Decoction"],
                  ["DA", "Direct application"],
                  ["P", "Pounding"],
                  ["J", "Juice"],
                  ["In", "Infusion"],
                  ["C", "Concoction"],
                  ["H", "Heating"],
                  ["R", "Roasting"],
                  ["F", "Fumigation"],
                ].map(([v, l]) => (
                  <option value={v} key={v}>
                    {l}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label className="check-filter">
            <input
              type="checkbox"
              checked={Boolean(filters.shared)}
              onChange={(e) =>
                update({ shared: e.target.checked ? "yes" : "" })
              }
            />
            Species documented in both studies
          </label>
        </div>
      </details>
      <h2 className="sr-only">Matching plants</h2>
      <div className="atlas-toolbar" ref={resultsRef} tabIndex={-1}>
        <p role="status">
          Showing <b>{result.length ? start + 1 : 0}–{start + visiblePlants.length}</b> of {result.length} plants
        </p>
        <div className="atlas-tools">
          <label className="sort-label">
            Sort
            <select
              value={`${filters.sort}:${filters.direction}`}
              onChange={(e) => {
                const [key, direction] = e.target.value.split(":");
                update({ sort: key, direction });
              }}
            >
              <option value="local:asc">Local name A–Z</option>
              <option value="local:desc">Local name Z–A</option>
              <option value="scientific:asc">Scientific name A–Z</option>
              <option value="scientific:desc">Scientific name Z–A</option>
              <option value="family:asc">Family A–Z</option>
              <option value="family:desc">Family Z–A</option>
              {filters.collection === "food" && (
                <>
                  <option value="ur:desc">Most use reports</option>
                  <option value="ur:asc">Fewest use reports</option>
                </>
              )}
            </select>
          </label>
          <div className="view-switch" aria-label="Display style">
            {["cards", "table"].map((view) => (
              <button
                key={view}
                aria-pressed={filters.view === view}
                onClick={() => update({ view })}
              >
                {view === "cards" ? "Cards" : "Table"}
              </button>
            ))}
          </div>
          <button
            className="text-button"
            onClick={() =>
              update({
                collection: "",
                q: "",
                family: "",
                part: "",
                category: "",
                source: "",
                preparation: "",
                shared: "",
                sort: "local",
                direction: "asc",
              })
            }
          >
            Reset filters
          </button>
        </div>
      </div>
      <p className="atlas-caption">
        Food and medicinal records with matching species names are combined into
        one plant. Both uses and their original sources remain available.
      </p>
      {result.length ? (
        filters.view === "table" ? (
          <PlantTable
            plants={visiblePlants}
            collection={filters.collection}
            onSelect={onSelect}
            sort={filters.sort}
            direction={filters.direction}
            onSort={sort}
          />
        ) : (
          <div
            className="plant-grid results-enter"
            key={JSON.stringify([
              filters.collection,
              query,
              filters.family,
              filters.part,
              filters.category,
              filters.source,
              filters.preparation,
              filters.shared,
              page,
            ])}
          >
            {visiblePlants.map((p) => (
              <PlantCard key={p.id} plant={p} onSelect={onSelect} compact />
            ))}
          </div>
        )
      ) : (
        <div className="empty-state">
          <h2>No plants found</h2>
          <p>Try another name or reset the filters.</p>
        </div>
      )}
      <Pagination totalPages={result.length ? pageCount : 0} currentPage={page} onPageChange={goToPage} hideOnSinglePage />
      <p className="source-note">
        The food paper reports 91 species; its table lists 89 entries. Names and
        classifications follow each publication. Medicinal uses describe
        traditional knowledge, not tested treatments. Photo labels follow the
        supplied assets; images are not an identification guide.
      </p>
    </section>
  );
}
