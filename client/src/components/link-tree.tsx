// https://github.com/shadcn-ui/ui/blob/779517a1d46f567c8e3fa8fcdea4c75c65ad4eb4/apps/www/lib/toc.ts#L73

"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

//region Spec types
export type LinkTreeNodeSpec = {
  title: string
  href: string
  children?: LinkTreeNodeSpec[]
}

export type LinkTreeRootSpec = {
  children?: LinkTreeNodeSpec[]
}
//endregion

//region LinkTreeContext
type LinkTreeContextProps = {
  activeItemHref?: string | null
}

const LinkTreeContext = React.createContext<LinkTreeContextProps | null>(null)

function useLinkTree(): LinkTreeContextProps {
  const state = React.useContext(LinkTreeContext)
  if (state == null) throw Error("useLinkTree() should only be used within <LinkTree />")
  return state
}
//endregion

//region LinkTree
export type LinkTreeProps = {
  rootSpec: LinkTreeRootSpec
  activeItemHref?: string | null
}

export function LinkTree({ rootSpec, activeItemHref }: LinkTreeProps) {
  if (rootSpec.children == null) return null
  if (rootSpec.children.length === 0) return null

  return (
    <LinkTreeContext.Provider value={{ activeItemHref }}>
      <InnerLinkTree nodeSpec={rootSpec} />
    </LinkTreeContext.Provider>
  )
}
//endregion

//region LinkNodeDescendants
type LinkNodeDescendantsProps = {
  nodeSpec: LinkTreeRootSpec
  level?: number
}

function LinkNodeDescendants({ nodeSpec, level = 1 }: LinkNodeDescendantsProps) {
  if (nodeSpec.children == null) return null
  if (nodeSpec.children.length === 0) return null

  return (
    <ul className={cn("m-0 list-none", { "pl-4": level > 1 })}>
      {nodeSpec.children.map((childSpec) => (
        <LinkSubtree key={childSpec.href} rootSpec={childSpec} level={level} />
      ))}
    </ul>
  )
}
//endregion

//region InnerLinkTree
const InnerLinkTree = React.memo(LinkNodeDescendants)
InnerLinkTree.displayName = "InnerLinkTree"
//endregion

//region LinkSubtree
type LinkSubtreeProps = {
  rootSpec: LinkTreeNodeSpec
  level: number
}

function LinkSubtree({ rootSpec, level }: LinkSubtreeProps) {
  if (level >= 3) return null // maximum rendered 'depth' is 2

  return (
    <li className="mt-0 pt-2">
      <LinkTreeNode nodeSpec={rootSpec} />
      <LinkNodeDescendants nodeSpec={rootSpec} level={level + 1} />
    </li>
  )
}
//endregion

//region LinkTreeNode
type LinkTreeNodeProps = {
  nodeSpec: LinkTreeNodeSpec
}

function LinkTreeNode({ nodeSpec }: LinkTreeNodeProps) {
  const { activeItemHref } = useLinkTree()

  return (
    <a
      href={nodeSpec.href}
      className={cn(
        "inline-block no-underline transition-colors hover:text-foreground",
        nodeSpec.href === `#${activeItemHref}` ? "font-medium text-foreground" : "text-muted-foreground",
      )}
    >
      {nodeSpec.title}
    </a>
  )
}
//endregion
