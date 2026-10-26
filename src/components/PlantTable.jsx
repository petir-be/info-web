import { plantStudies } from "../data/catalog";

export default function PlantTable({
  plants,
  collection,
  onSelect,
  sort,
  direction,
  onSort,
}) {
  return (
    <div
      className="table-scroll"
      tabIndex="0"
      role="region"
      aria-label="Plant research table; scroll horizontally on small screens"
    >
      <table className="atlas-table">
        <thead>
          <tr>
            {[
              ["local", "Local name"],
              ["scientific", "Scientific name"],
              ["family", "Family"],
            ].map(([key, label]) => (
              <th
                key={key}
                scope="col"
                aria-sort={
                  sort === key
                    ? direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                <button onClick={() => onSort(key)}>
                  {label}{" "}
                  {sort === key ? (direction === "asc" ? "↑" : "↓") : "↕"}
                </button>
              </th>
            ))}
            <th scope="col">Plant parts</th>
            {collection === "food" ? (
              <th
                scope="col"
                aria-sort={
                  sort === "ur"
                    ? direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                <button onClick={() => onSort("ur")}>UR ↕</button>
              </th>
            ) : (
              <th scope="col">Uses</th>
            )}
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => {
            const studies = plantStudies(plant);
            return (
              <tr
                key={plant.id}
                onClick={(event) => {
                  if (!event.target.closest("a")) onSelect(plant);
                }}
              >
                <th scope="row">
                  <a
                    className="table-name"
                    href={`#plant?${new URLSearchParams({ id: plant.id, from: window.location.hash || "#plants" })}`}
                  >
                    {plant.local}
                  </a>
                </th>
                <td>
                  <i>{plant.scientific}</i>
                </td>
                <td>{plant.family}</td>
                <td>
                  {studies.map((p) => (
                    <div key={p.id}>
                      {studies.length > 1 && (
                        <b>
                          {p.collection === "food" ? "Food: " : "Medicinal: "}
                        </b>
                      )}
                      {p.parts}
                    </div>
                  ))}
                </td>
                <td>
                  {collection === "food" ? (
                    plant.ur
                  ) : (
                    <span className="collection-labels">
                      {studies.map((p) => (
                        <span
                          key={p.id}
                          className={`collection-badge ${p.collection}`}
                        >
                          {p.collection === "food" ? "Food" : "Medicinal"}
                        </span>
                      ))}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
