import food from "../plants.json";
import medicinal from "./medicinal.json";
import images from "./images.json";

export const medicineCitation =
  "Odchimar, N. M. O., Nuñeza, O. M., Uy, M. M., & Senarath, W. T. P. S. K. (2017). Ethnobotany of medicinal plants used by the Talaandig Tribe in Brgy. Lilingayon, Valencia City, Bukidnon, Philippines. Asian Journal of Biological and Life Sciences, 6(1), 358–364.";
export const medicinePdf = "/Ethnobotanyofmedicinalplants.pdf";
export const medicalNote =
  "These are traditionally reported uses documented in the study, not evidence of safety or effectiveness, identification advice, or instructions for treatment.";
export const preparationNames = {
  D: "Decoction",
  DA: "Direct application",
  In: "Infusion",
  J: "Juice",
  P: "Pounding",
  C: "Concoction",
  H: "Heating",
  R: "Roasting",
  F: "Fumigation",
  OR: "Oral",
  Ex: "External",
};
export function describePreparation(value) {
  return value.replace(
    /\b(DA|OR|Ex|In|D|J|P|C|H|R|F)\b/g,
    (code) => preparationNames[code],
  );
}
export const records = [
  ...food.map((plant, index) => ({
    ...plant,
    id: `food-${index + 1}`,
    collection: "food",
  })),
  ...medicinal.map((plant) => ({
    ...plant,
    collection: "medicine",
    categories: [],
  })),
];
export const findPlant = (id) => records.find((plant) => plant.id === id);
// Only exact species-level names link studies; genus-only records remain separate.
export function counterpart(plant) {
  if (/\bspp?\./i.test(plant.scientific)) return undefined;
  return records.find(
    (other) =>
      other.collection !== plant.collection &&
      other.scientific.toLowerCase() === plant.scientific.toLowerCase(),
  );
}
export function mergedPlant(plant) {
  return plant?.collection === "medicine" ? counterpart(plant) || plant : plant;
}
export function plantStudies(plant) {
  const primary = mergedPlant(plant);
  const other = counterpart(primary);
  return other ? [primary, other] : [primary];
}
export const catalogPlants = records.filter((p) => mergedPlant(p) === p);
export function plantImage(plant) {
  const primary = mergedPlant(plant);
  return images[primary.id] || images[counterpart(primary)?.id];
}
export function sourceLink(plant) {
  return plant.collection === "medicine"
    ? `${medicinePdf}#page=${plant.page}`
    : "/talaandig-food-ethnobotany.pdf#page=9";
}
export function filterPlants({
  collection = "",
  q = "",
  family = "",
  part = "",
  category = "",
  source = "",
  preparation = "",
  shared = false,
}) {
  const query = q.trim().toLowerCase();
  return catalogPlants.filter(
    (plant) =>
      (!shared || counterpart(plant)) &&
      plantStudies(plant).some(
        (p) =>
          (!collection || p.collection === collection) &&
          (!family || p.family === family) &&
          (!part || p.parts.toLowerCase().includes(part)) &&
          (!category || p.categories.includes(category)) &&
          (!source || p.source === source) &&
          (!preparation ||
            p.reportedUses?.some((u) =>
              u.preparation.split(/[^A-Za-z]+/).includes(preparation),
            )) &&
          plantStudies(plant).some((record) =>
            `${record.local} ${record.scientific} ${record.family} ${record.parts} ${record.reportedUses?.map((u) => u.use).join(" ") || ""}`
              .toLowerCase()
              .includes(query),
          ),
      ),
  );
}
export const medicineCharts = [
  {
    title: "How the plants grow",
    subtitle: "Published share of plant habits (%)",
    source: "Figure 2 · p. 362",
    rows: [
      ["Tree", 34],
      ["Shrub", 25],
      ["Herb", 21],
      ["Vine", 11],
      ["Grass", 9],
    ],
    note: "Figure 2 shows herbs at 21%; the accompanying prose says 20%. Values here follow the figure.",
  },
  {
    title: "Plant parts in traditional use",
    subtitle: "Published share of plant parts (%)",
    source: "Figure 3 · p. 362",
    rows: [
      ["Leaves", 49],
      ["Roots", 20],
      ["Bark", 10],
      ["Fruit", 7],
      ["Flower", 4],
      ["Latex", 4],
      ["Thorns", 3],
      ["Whole plant", 1],
      ["Seed", 1],
      ["Trunk", 1],
    ],
  },
  {
    title: "Recorded preparation methods",
    subtitle: "Published share of preparation methods (%)",
    source: "Figure 4 · p. 362",
    rows: [
      ["Decoction", 35],
      ["Direct application", 21],
      ["Pounding", 15],
      ["Juice", 14],
      ["Concoction", 4],
      ["Infusion", 4],
      ["Roasting", 3],
      ["Heating", 3],
      ["Scraping", 1],
    ],
  },
  {
    title: "Recorded administration",
    subtitle: "Published share of administration routes (%)",
    source: "Results · p. 362",
    rows: [
      ["Internal / oral", 51],
      ["External", 49],
    ],
  },
];
