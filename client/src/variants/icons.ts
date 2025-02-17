// https://github.com/Lordfirespeed/lordfirespeed.dev/blob/5afc675f2c907e18be385ee3d7b0e4f84e20c93f/client/src/variants/icons.ts

import type * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"

export const iconVariantsBaseOptions = {
  variants: {
    variant: {
      brand: "icon-brand",
      "brand-hover": "icon-brand-hover transition-colors",
      inherit: "",
    },
  },
  defaultVariants: {
    variant: "inherit",
  },
} as const

export const iconVariants = cva("icon", iconVariantsBaseOptions)

export type IconVariantProps = VariantProps<typeof iconVariants>

export type IconProps = React.HTMLAttributes<SVGElement> & IconVariantProps
