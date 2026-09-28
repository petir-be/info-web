# Talaandig food ethnobotany infoweb

A responsive React/Vite website based on the supplied article by Adlaon et al. (2026). Forest green is the primary color, white is the background, and muted red is the secondary accent.

## Run locally

- `npm install` if dependencies are not already installed.
- `npm run dev` starts the local website.
- `npm run build` creates the production files in `dist`.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the source.

## Pages and components

Each of the eight navigation destinations has its own file in `src/pages`: Home, Plants, FoodCategories, Community, Findings, Heritage, Gallery, and Research. Shared navigation, footer, page introductions, plant cards, plant dialog, and SVG icons live in `src/components`.

`src/data/study.js` contains summary metrics, food categories, and the citation. `src/plants.json` contains all 89 entries transcribed from Table 2. Hash navigation supports direct page links and browser back/forward without server rewrite rules. Food-category links preselect the relevant plant filter. Search, source/category filters, sorting, detail dialogs, citation copying, and PDF viewing/download are included.

## Source and data notes

Source: *Quantitative Analysis on Food Ethnobotany of Talaandig Indigenous People in Sitio Tandacol, Barangay Lilingayon, Valencia City, Philippines*, Journal of Tropical Biology and Conservation 23, 132–149. DOI: https://doi.org/10.51200/jtbc.v23i.6373.

The source reports 91 species, but its Table 2 lists 89 entries. The explorer preserves those 89 entries rather than inventing records. Published summary counts, classifications, names, parts, and use values are retained; discrepancies are explained on the relevant pages. This website is an independent educational adaptation, not an official community site or a preparation guide.

The original PDF is available at `public/talaandig-food-ethnobotany.pdf`. Images in `public/images` are extracted figures from that PDF. Hero and plant-card crops are made in CSS. Source images and text are attributed to Adlaon et al. (2026), under the article's CC BY-NC 4.0 license; Medinilla photography is acknowledged to Grisielou Caylan by the paper. Respect attribution and noncommercial restrictions when reusing these materials.

Fonts are requested from Google Fonts, with local Arial/Georgia fallbacks. All research content and field images are local.

## Validation

Production build and ESLint pass. Browser preview access was declined, so visual and interactive browser checks have not been completed. The repository requests `graphify update .`, but Graphify is unavailable in this environment and no existing graph was found.
