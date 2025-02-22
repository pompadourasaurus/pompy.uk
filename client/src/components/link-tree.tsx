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
      <InnerLinkTree rootSpec={rootSpec} />
    </LinkTreeContext.Provider>
  )
}
//endregion

//region InnerLinkTree
type InnerLinkTreeProps = {
  rootSpec: LinkTreeRootSpec
}

const InnerLinkTree = React.memo(({ rootSpec }: InnerLinkTreeProps) => {
  if (rootSpec.children == null) return null
  if (rootSpec.children.length === 0) return null

  return (
    <ul className="m-0 list-none">
      {rootSpec.children.map((item) => (
        <LinkSubtree key={item.href} rootSpec={item} />
      ))}
    </ul>
  )
})
InnerLinkTree.displayName = "InnerLinkTree"
//endregion

//region LinkSubtree
type LinkSubtreeProps = {
  rootSpec: LinkTreeNodeSpec
  level?: number
}

function LinkSubtree({ rootSpec, level = 1 }: LinkSubtreeProps) {
  if (rootSpec.children == null) return null
  if (rootSpec.children.length === 0) return null
  if (level >= 3) return null

  return rootSpec.children.map((item) => (
    <li key={item.href} className="mt-0 pt-2">
      <LinkTreeNode nodeSpec={rootSpec} />
      <ul className="m-0 list-none pl-4">
        <LinkSubtree rootSpec={item} level={level + 1} />
      </ul>
    </li>
  ))
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
