"use client"

import * as React from "react"

import type { LinkTreeRootSpec } from "@/components/link-tree"
import { TableOfContents } from "@/components/table-of-contents"

export type TableOfContentsContextProps = {
  rootSpec: LinkTreeRootSpec
  setRootSpec: React.Dispatch<LinkTreeRootSpec>
}

const TableOfContentsContext = React.createContext<TableOfContentsContextProps | null>(null)

export function useTableOfContents(): TableOfContentsContextProps {
  const state = React.useContext(TableOfContentsContext)
  if (state == null) throw Error("useTableOfContents() should only be used within <ContextualTableOfContents />")
  return state
}

export function TableOfContentsContextProvider({ children }: { children?: React.ReactNode }) {
  const [rootSpec, setRootSpec] = React.useState<LinkTreeRootSpec>({})

  return (
    <TableOfContentsContext.Provider
      value={{
        rootSpec,
        setRootSpec,
      }}
    >
      {children}
    </TableOfContentsContext.Provider>
  )
}

export function ContextualTableOfContents() {
  const { rootSpec } = useTableOfContents()

  return <TableOfContents rootSpec={rootSpec} />
}
