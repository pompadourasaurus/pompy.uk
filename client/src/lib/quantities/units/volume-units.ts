// see: https://en.wikipedia.org/wiki/Cooking_weights_and_measures

import type { UnitInput } from "@/lib/types/unit"

// region English volume units
/**
 * https://en.wikipedia.org/wiki/English_units
 */
const englishVolumes = [
  {
    slug: "tsp",
    type: "volume",
    label: {
      singular: "Teaspoon",
      plural: "Teaspoons",
      symbol: "tsp.",
    },
  },
  {
    slug: "dsp",
    type: "volume",
    label: {
      singular: "Dessert spoon",
      plural: "Dessert spoons",
      symbol: "dsp.",
    },
  },
  {
    slug: "tbsp",
    type: "volume",
    label: {
      singular: "Tablespoon",
      plural: "Tablespoons",
      symbol: "tbsp.",
    },
  },
] as const satisfies UnitInput[]
// endregion

// region Imperial volume units
/**
 * https://en.wikipedia.org/wiki/Imperial_units
 */
const imperialVolumes = [
  {
    slug: "fluid-ounces",
    type: "volume",
    label: {
      singular: "Fluid Ounce",
      plural: "Fluid Ounces",
      symbol: "fl. oz.",
    },
  },
  {
    slug: "pints",
    type: "volume",
    label: {
      singular: "Pint",
      plural: "Pints",
      symbol: "pt.",
    },
  },
  {
    slug: "quarts",
    type: "volume",
    label: {
      singular: "Quart",
      plural: "Quarts",
      symbol: "qt.",
    },
  },
  {
    slug: "gallons",
    type: "volume",
    label: {
      singular: "Gallon",
      plural: "Gallons",
      symbol: "gal.",
    },
  },
] as const satisfies UnitInput[]
// endregion

// region US Customary volume units
/**
 * https://en.wikipedia.org/wiki/United_States_customary_units
 */
const customaryVolumes = [
  {
    slug: "shots",
    type: "volume",
    label: {
      singular: "Shot",
      plural: "Shots",
    },
  },
  {
    slug: "cups",
    type: "volume",
    label: {
      singular: "Cup",
      plural: "Cups",
      symbol: "C",
    },
  },
] as const satisfies UnitInput[]
// endregion

// region Metric volume units
const metricVolumes = [
  {
    slug: "millilitres",
    type: "volume",
    label: {
      singular: "Millilitre",
      plural: "Millilitres",
      symbol: "mL",
    },
  },
  {
    slug: "centilitres",
    type: "volume",
    label: {
      singular: "Centilitre",
      plural: "Centilitres",
      symbol: "cL",
    },
  },
  {
    slug: "litres",
    type: "volume",
    label: {
      singular: "Litre",
      plural: "Litres",
      symbol: "L",
    },
  },
] as const satisfies UnitInput[]
// endregion

export default [
  ...englishVolumes,
  ...imperialVolumes,
  ...customaryVolumes,
  ...metricVolumes,
] as const satisfies UnitInput[]
