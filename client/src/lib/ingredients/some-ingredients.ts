import type { IngredientInput } from "@/lib/types/ingredient"

export default [
  {
    slug: "butter",
    label: {
      countable: false,
      noun: "Butter",
    },
  },
  {
    slug: "light-brown-sugar",
    label: {
      countable: false,
      noun: "Light Brown Sugar",
    },
  },
  {
    slug: "caster-sugar",
    label: {
      countable: false,
      noun: "Caster Sugar",
    },
  },
  {
    slug: "cream-cheese",
    label: {
      countable: false,
      noun: "Cream Cheese",
    },
  },
  {
    slug: "eggs",
    label: {
      countable: true,
      singular: "Egg",
      plural: "Eggs",
    },
  },
  {
    slug: "vanilla-extract",
    label: {
      countable: false,
      noun: "Vanilla Extract",
    },
  },
  {
    slug: "almond-extract",
    label: {
      countable: false,
      noun: "Almond Extract",
    },
  },
  {
    slug: "cornstarch",
    label: {
      countable: false,
      noun: "Cornstarch",
    },
  },
  {
    slug: "baking-powder",
    label: {
      countable: false,
      noun: "Baking Powder",
    },
  },
  {
    slug: "baking-soda",
    label: {
      countable: false,
      noun: "Baking Soda",
    },
  },
  {
    slug: "salt",
    label: {
      countable: false,
      noun: "Salt",
    },
  },
  {
    slug: "plain-flour",
    label: {
      countable: false,
      noun: "Plain Flour",
    },
  },
  {
    slug: "white-chocolate",
    label: {
      countable: false,
      noun: "White Chocolate",
    },
  },
  {
    slug: "frozen-raspberries",
    label: {
      countable: false,
      noun: "Frozen Raspberries",
    },
  },
] as const satisfies IngredientInput[]
