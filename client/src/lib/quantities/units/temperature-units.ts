import type { Unit } from "@/lib/types/unit"

export default [
  {
    slug: "celcius",
    type: "temperature",
    label: {
      singular: "Degree Celcius",
      plural: "Degrees Celcius",
      symbol: "°C",
    },
  },
  {
    slug: "kelvin",
    type: "temperature",
    label: {
      singular: "Kelvin",
      plural: "Kelvin",
      symbol: "K",
    },
  },
  {
    slug: "fahrenheit",
    type: "temperature",
    label: {
      singular: "Degree Fahrenheit",
      plural: "Degrees Fahrenheit",
      symbol: "°F",
    },
  },
] as const satisfies Unit[]
