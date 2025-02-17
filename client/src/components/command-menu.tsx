// https://github.com/shadcn-ui/ui/blob/4810f744e3b5ec23e7fcac14b8377448055e9560/apps/www/components/command-menu.tsx

"use client"

import { Circle, File, Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import type { MainNavItem, RecipesNavConfig, SidebarNavItem, SidebarNavSubItem } from "@/config/recipes-nav"
import { type KeyboardTrigger, buildCompositeKeyboardTrigger } from "@/lib/keyboard-triggers"
import { cn } from "@/lib/utils"

type AppRouter = ReturnType<typeof useRouter>
type ActionProps = Readonly<{
  router: AppRouter
}>
type Action = (props: ActionProps) => unknown
type ActionRunner = (action: Action) => void

const isCmdKPressed: KeyboardTrigger = (e) => {
  return e.key === "k" && (e.metaKey || e.ctrlKey)
}
const isSlashPressed: KeyboardTrigger = (e) => {
  return e.key === "/"
}
const isCommandMenuTriggered = buildCompositeKeyboardTrigger({
  triggers: [isCmdKPressed, isSlashPressed],
})

export function CommandMenu({ config }: { config: RecipesNavConfig }) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    /**
     * when (CMD + K) or the slash key is pressed, open the command menu
     */
    const down = (e: KeyboardEvent) => {
      if (!isCommandMenuTriggered(e)) return
      e.preventDefault()
      setOpen((open) => !open)
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand: ActionRunner = React.useCallback(
    (command: Action) => {
      setOpen(false)
      command({
        router,
      })
    },
    [router],
  )

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64",
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search recipes...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <MainNavCommandGroup items={config.mainNav} run={runCommand} />
          <SidebarNavCommandGroups items={config.sidebarNav} run={runCommand} />
          <CommandSeparator />
          <ThemeCommandGroup run={runCommand} />
        </CommandList>
      </CommandDialog>
    </>
  )
}

function MainNavCommandGroup({
  items,
  run,
}: {
  items: readonly MainNavItem[]
  run: ActionRunner
}) {
  return (
    <CommandGroup heading="Links">
      {items
        .filter((item) => !item.external)
        .map((item) => (
          <MainNavItemCommand key={item.slug} item={item} run={run} />
        ))}
    </CommandGroup>
  )
}

function MainNavItemCommand({
  item,
  run,
}: {
  item: MainNavItem
  run: ActionRunner
}) {
  if (item.href == null) throw Error("MainNavItemCommand nav items require a href") // todo: AssertionError / assert
  if (item.disabled === true) return null

  const href = item.href

  return (
    <CommandItem
      key={item.slug}
      value={item.title}
      onSelect={() => {
        run(({ router }) => router.push(href))
      }}
    >
      <File />
      {item.title}
    </CommandItem>
  )
}

function SidebarNavCommandGroups({
  items,
  run,
}: {
  items: readonly SidebarNavItem[]
  run: ActionRunner
}) {
  return items.map((group) => <SidebarNavItemCommandGroup key={group.slug} item={group} run={run} />)
}

function SidebarNavItemCommandGroup({
  item,
  run,
}: {
  item: SidebarNavItem
  run: ActionRunner
}) {
  return (
    <CommandGroup heading={item.title}>
      {item.items.map((subItem) => (
        <SidebarNavSubItemCommand key={subItem.slug} item={subItem} run={run} />
      ))}
    </CommandGroup>
  )
}

function SidebarNavSubItemCommand({
  item,
  run,
}: {
  item: SidebarNavSubItem
  run: ActionRunner
}) {
  if (item.href == null) throw Error("SidebarNavSubItemCommand nav items require a href") // todo: AssertionError / assert
  if (item.disabled === true) return null

  const href = item.href

  return (
    <CommandItem
      key={item.slug}
      value={item.title}
      onSelect={() => {
        run(({ router }) => router.push(href))
      }}
    >
      <div className="mr-2 flex h-4 w-4 items-center justify-center">
        <Circle className="h-3 w-3" />
      </div>
      {item.title}
    </CommandItem>
  )
}

function ThemeCommandGroup({ run }: { run: ActionRunner }) {
  const { setTheme } = useTheme()

  return (
    <CommandGroup heading="Theme">
      <CommandItem onSelect={() => run(() => setTheme("light"))}>
        <Sun />
        Light
      </CommandItem>
      <CommandItem onSelect={() => run(() => setTheme("dark"))}>
        <Moon />
        Dark
      </CommandItem>
      <CommandItem onSelect={() => run(() => setTheme("system"))}>
        <Laptop />
        System
      </CommandItem>
    </CommandGroup>
  )
}
