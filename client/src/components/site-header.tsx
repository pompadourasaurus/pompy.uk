// https://github.com/shadcn-ui/ui/blob/4810f744e3b5ec23e7fcac14b8377448055e9560/apps/www/components/site-header.tsx

import Link from "next/link"

import { CommandMenu } from "@/components/command-menu"
import { GitHubIcon } from "@/components/icons/github"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
import { Button } from "@/components/ui/button"
import type { RecipesNavConfig } from "@/config/recipes-nav"
import { siteConfig } from "@/config/site"

function GitHubLink() {
  return (
    <Button asChild variant="ghost" size="icon" className="h-8 w-8 px-0">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <GitHubIcon className="h-4 w-4" />
        <span className="sr-only">GitHub</span>
      </Link>
    </Button>
  )
}

export function SiteHeader({ navConfig }: { navConfig: RecipesNavConfig }) {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          {/* Left-aligned nav + mobile nav */}
          <MainNav config={navConfig} />
          <MobileNav config={navConfig} />
          {/* Left-aligned nav + mobile nav end */}

          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            {/* Right-aligned nav */}
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu config={navConfig} />
            </div>
            {/* Right-aligned nav end */}

            {/* Social links */}
            <nav className="flex items-center gap-0.5">
              <GitHubLink />
              <ModeSwitcher />
            </nav>
            {/* Social links end */}
          </div>
        </div>
      </div>
    </header>
  )
}
