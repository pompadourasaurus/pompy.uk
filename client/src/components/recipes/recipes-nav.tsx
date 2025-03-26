"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { RecipesNavConfig, SidebarNavItem, SidebarNavSubItem } from "@/config/recipes-nav"
import { cn } from "@/lib/utils"

export function RecipesNav({ config }: { config: RecipesNavConfig }) {
  const pathname = usePathname()

  const items = config.sidebarNav
  if (items.length === 0) return null

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <RecipesNavItem key={item.slug} item={item} pathname={pathname} />
      ))}
    </div>
  )
}

function RecipesNavItem({
  item,
  pathname,
}: {
  item: SidebarNavItem
  pathname: string | null
}) {
  if (item.href != null) throw Error("top-level sidebar nav items linking to places is not implemented") // todo: AssertionError / assert

  return (
    <div className="flex flex-col gap-1">
      <h4 className="rounded-md px-2 py-1 text-sm font-semibold">{item.title}</h4>
      <RecipesNavSubItems items={item.items} pathname={pathname} />
    </div>
  )
}

function RecipesNavSubItems({
  items,
  pathname,
}: {
  items: readonly SidebarNavSubItem[]
  pathname: string | null
}) {
  if (items.length === 0) return null

  return (
    <div className="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item) => (
        <RecipesNavSubItem key={item.slug} item={item} pathname={pathname} />
      ))}
    </div>
  )
}

function RecipesNavSubItem({
  item,
  pathname,
}: {
  item: SidebarNavSubItem
  pathname: string | null
}) {
  if (item.href == null || item.disabled === true) return <NavComment item={item} />
  return <NavLink item={item} pathname={pathname} />
}

function NavLink({
  item,
  pathname,
}: {
  item: SidebarNavSubItem
  pathname: string | null
}) {
  if (item.href == null) throw Error("NavLink nav items require a href") // todo: AssertionError / assert
  if (item.disabled === true) throw Error("NavLink cannot render a disabled nav item, use a NavComment") // todo: AssertionError / assert

  return (
    <Link
      href={item.href}
      className={cn(
        "group relative flex min-h-8 w-full items-center rounded-lg px-2",
        "after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg",
        "hover:bg-accent hover:text-accent-foreground",
        pathname === item.href ? "bg-accent font-medium text-accent-foreground" : "font-normal text-foreground",
      )}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
    >
      {item.title}
    </Link>
  )
}

function NavComment({ item }: { item: SidebarNavSubItem }) {
  return (
    <span
      className={cn(
        "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground",
        "hover:underline",
        item.disabled === true && "opacity-60",
      )}
    >
      {item.title}
    </span>
  )
}
