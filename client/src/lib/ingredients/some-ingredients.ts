import type { IngredientInput } from "@/lib/types/ingredient"

export default [
  {
    slug: "unsalted-butter",
    label: {
      countable: false,
      noun: "Unsalted Butter",
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
    slug: "self-raising-flour",
    label: {
      countable: false,
      noun: "Self-Raising Flour",
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
    slug: "milk-chocolate",
    label: {
      countable: false,
      noun: "Milk Chocolate",
    },
  },
  {
    slug: "frozen-raspberries",
    label: {
      countable: false,
      noun: "Frozen Raspberries",
    },
  },
  {
    slug: "bananas",
    label: {
      countable: true,
      singular: "Banana",
      plural: "Bananas",
    },
  },
] as const satisfies IngredientInput[]
