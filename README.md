# Kalaki Pamulahen

Kalaki means knowledge; Pamulahen means plant. The site retains its existing sprout logo and presents documented Talaandig plant knowledge. The About Us page (`#about`) explains the name and credits the 14 project team members.

A responsive React/Vite atlas based on the supplied food study by Adlaon et al. (2026) and medicinal study by Odchimar et al. (2017). Forest green and muted teal distinguish the collections on warm ivory backgrounds.

## Run locally

- `npm install` if dependencies are not already installed.
- `npm run dev` starts the local website.
- `npm run build` creates the production files in `dist`.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the source.

## Pages and components

Eight primary destinations cover Overview, Plant Explorer, Community, Research & Findings, Living Heritage, Gallery, Sources, and About Us. Food-use categories remain accessible from the food explorer. The explorer paginates cards and tables at 15 plants per page, with two card columns on mobile. Filters and sorting reset pagination; the page is stored in the URL. Plant profiles have shareable hash URLs; returning preserves explorer filters, view, sorting, and scroll position.

- `src/plants.json`: 89 food-table entries.
- `src/data/medicinal.json`: 66 medicinal records, manually transcribed from Table 1 (printed pp. 359–361), including merged-cell use associations.
- `src/data/catalog.js`: shared catalog, filtering, exact-species links, preparation labels, and published medicinal chart data.
- `src/data/images.json`: explicit image mapping and original filenames. The explorer, gallery, and related-plant lists merge exact species-name matches into one entry, with both source records preserved in profiles and table details. Old study-specific profile links still resolve. Genus-only names and unverified synonyms are not merged across studies.
- `src/components/StudyChart.jsx`: accessible CSS bar charts, sortable data-table alternatives, and CSV export.
- `src/atlas.css`: collection layouts and reduced-motion-aware card, filter, profile, and chart animations. No new runtime dependencies.

## Source and data notes

Source: *Quantitative Analysis on Food Ethnobotany of Talaandig Indigenous People in Sitio Tandacol, Barangay Lilingayon, Valencia City, Philippines*, Journal of Tropical Biology and Conservation 23, 132–149. DOI: https://doi.org/10.51200/jtbc.v23i.6373.

The source reports 91 species, but its Table 2 lists 89 entries. The explorer preserves those 89 entries rather than inventing records. Published summary counts, classifications, names, parts, and use values are retained; discrepancies are explained on the relevant pages. This website is an independent educational adaptation, not an official community site or a preparation guide.

The medicinal source is *Ethnobotany of medicinal plants used by the Talaandig Tribe in Brgy. Lilingayon, Valencia City, Bukidnon, Philippines*, Asian Journal of Biological and Life Sciences 6(1), 358–364 (2017), available at `public/Ethnobotanyofmedicinalplants.pdf`. Its Figure 2 shows herbs as 21% while the prose says 20%. The transcribed table has 37 distinct family labels versus 38 reported; Asteraceae contains six table entries versus five in the narrative. Preserve these differences rather than silently correcting the publication.

Plant photographs use one WebP file per displayed image, at a maximum 960px dimension, in `public/plants`. Cards and profiles share these files; the 480px copies and unused variants have been removed. Original uploads were removed after optimization. The attempted temporary original-file archive did not persist beyond its sandbox; a durable backup of the retained 960px assets, PDFs, and source workbook was saved outside the repository. The supplied Badjang fern photo is withheld and the matching food Alocasia image is used instead.

`sources/Talaandig Website.xlsx` is preserved as the input workbook, outside the public website assets. `sources/image-provenance.json` records its sheet/cell references, original links, resolved publisher pages, named credits where verified, and unresolved sources. Runtime credits are in `src/data/images.json` and appear beside images and in Sources. Google share links resolve to original publishers; Google/Bing thumbnail-only links are not treated as authors. Exact iNaturalist photo matches were checked against public photo metadata. Publisher credit does not establish a photographer or reuse permission. Known license terms are displayed; the food paper’s license is not applied to third-party images.

The active image set has 136 photographs: 129 linked source credits, including 14 verified named credits. The ten added images use corrected links from `sources/Talaandig Website-updated.xlsx`; name-based matching preserves associations despite changed row numbering. Seven images have no identifiable original publisher from the supplied links and retain an explicit unresolved label.

Fonts are requested from Google Fonts with local Arial/Georgia fallbacks. Research content, PDFs, and plant images are local. Traditionally reported medicinal uses are educational records, not treatment instructions or efficacy claims.

## Validation

- `npm run build`: production build.
- `npm run lint`: ESLint.
- `npm run check:atlas`: catalog totals, use associations, preparation filters, exact-species matching, image credits and paths, single-resolution asset integrity, chart totals, and server-rendered routes/profiles.
- Browser checks: collection search, shared-species profile and return path, table sorting, chart tables, mobile navigation, 375px portrait and 812px landscape overflow, and reduced-motion rendering.
- `graphify update .`: refresh the code graph after changes.

## Static plant hero

The Overview hero displays a static sweet-potato illustration from `public/plants/sweet-potato-poster.webp`. The image has fixed dimensions and descriptive alternative text, with responsive layouts for desktop and mobile. There is no WebGL renderer, model download, scroll-driven sequence, or motion controls.

`src/components/PlantHero.jsx` and `PlantHero.css` provide the layout. The editable illustration source remains in `public/artwork/`. The illustration is a visual interpretation of *Ipomoea batatas*, not a validated identification guide.
