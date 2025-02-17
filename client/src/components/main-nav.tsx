// https://github.com/shadcn-ui/ui/blob/4810f744e3b5ec23e7fcac14b8377448055e9560/apps/www/components/main-nav.tsx

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { getNavMatcherBySlug } from "@/config/nav-matchers"
import type { MainNavItem, RecipesNavConfig } from "@/config/recipes-nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function MainNav({ config }: { config: RecipesNavConfig }) {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <div className="h-6 w-6" /> {/* todo: favicon goes here */}
        <span className="hidden font-bold lg:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {config.mainNav.map((item) => (
          <MainNavLink key={item.slug} item={item} pathname={pathname} />
        ))}
      </nav>
    </div>
  )
}

function MainNavLink({ item, pathname }: { item: MainNavItem; pathname: string }) {
  if (item.href == null) throw Error("MainNavLink nav items require a href") // todo: AssertionError / assert
  if (item.disabled === true) return null

  const navMatcher = getNavMatcherBySlug(item.matcherSlug)

  return (
    <Link
      href={item.href}
      className={cn(
        "transition-colors hover:text-foreground/80",
        navMatcher.pathnameMatcher(pathname, item) ? "text-foreground" : "text-foreground/80",
      )}
    >
      Recipes
    </Link>
  )
}
