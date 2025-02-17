// https://github.com/Lordfirespeed/lordfirespeed.dev/blob/5afc675f2c907e18be385ee3d7b0e4f84e20c93f/client/src/components/icons/github.tsx

import { type VariantProps, cva } from "class-variance-authority"
import type * as React from "react"

import { deepMerge } from "@/lib/deep-merge"
import { cn } from "@/lib/utils"
import { iconVariantsBaseOptions } from "@/variants/icons"

import "@/styles/components/icons.css"
import "@/styles/components/icons/github.css"

const githubVariantsOptions = deepMerge({}, iconVariantsBaseOptions, {
  variants: {
    variant: {
      "pride-hover": "",
    },
  },
})

const gitHubIconVariants = cva("icon", githubVariantsOptions)

type GitHubIconVariantProps = React.HTMLAttributes<SVGElement> & VariantProps<typeof gitHubIconVariants>

function GitHubIconPrideGradient() {
  return (
    <linearGradient id="github-pride" x1="0" x2="24" y1="5.7" y2="18.3" gradientUnits="userSpaceOnUse">
      <stop offset="15.0%" stopColor="#ef4b4c" />
      <stop offset="15.0%" stopColor="#f79b46" />
      <stop offset="32.5%" stopColor="#f79b46" />
      <stop offset="32.5%" stopColor="#faeb20" />
      <stop offset="50.0%" stopColor="#faeb20" />
      <stop offset="50.0%" stopColor="#7dc243" />
      <stop offset="67.5%" stopColor="#7dc243" />
      <stop offset="67.5%" stopColor="#5c92ce" />
      <stop offset="85.0%" stopColor="#5c92ce" />
      <stop offset="85.0%" stopColor="#855ca8" />
    </linearGradient>
  )
}

function GitHubIconPrideHover({ className, ...props }: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={gitHubIconVariants({ variant: "pride-hover", className })}
      {...props}
    >
      <defs>
        <GitHubIconPrideGradient />
        <mask id="github-invertocat" fill="black">
          <path
            fill="white"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </mask>
      </defs>
      <title>GitHub</title>
      <g mask="url(#github-invertocat)">
        <rect x="0" y="0" width="24" height="24" fill="currentColor" />
        <rect
          x="0"
          y="0"
          width="24"
          height="24"
          fill="url(#github-pride)"
          className="transition-opacity opacity-0 group-hover:opacity-100"
        />
      </g>
    </svg>
  )
}

// https://simpleicons.org/?q=github
export function GitHubIcon({ variant, className, ...props }: GitHubIconVariantProps) {
  className = cn("github-icon group", className)
  if (variant === "pride-hover") return <GitHubIconPrideHover className={className} {...props} />
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={gitHubIconVariants({ variant, className })}
      {...props}
    >
      <title>GitHub</title>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </svg>
  )
}
