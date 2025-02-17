import type { NavItem } from "@/lib/types/nav"

type NavMatcher<SpecificNavItem extends NavItem = NavItem> = {
  slug: string
  pathnameMatcher: (pathname: string, navItem: SpecificNavItem) => boolean
}

const pathnameMatchers = [
  {
    slug: "default",
    pathnameMatcher: (pathname, navItem) => {
      return pathname === navItem.href
    },
  },
] as const satisfies NavMatcher[]

export type NavMatcherSlug = (typeof pathnameMatchers)[number]["slug"]

const navMatchersMap = new Map<string, NavMatcher>(
  pathnameMatchers.map((pathnameMatcher) => [pathnameMatcher.slug, pathnameMatcher]),
)

export function getNavMatcherBySlug(slug: NavMatcherSlug): NavMatcher
export function getNavMatcherBySlug(slug: string): NavMatcher | undefined
export function getNavMatcherBySlug(slug: string) {
  return navMatchersMap.get(slug)
}
