import * as React from "react"

import type { LinkTreeNodeSpec, LinkTreeRootSpec } from "@/components/link-tree"

export function useSections(element: HTMLElement | null): LinkTreeRootSpec {
  const [sectionsTreeRootSpec, setSectionsTreeRootSpec] = React.useState<LinkTreeRootSpec>({})

  React.useEffect(() => {
    if (element == null) {
      setSectionsTreeRootSpec({})
      return
    }

    const sectionsTreeRootsSpecs = getChildNodeSpecs(element)
    setSectionsTreeRootSpec({ children: sectionsTreeRootsSpecs })
  }, [element])

  return sectionsTreeRootSpec
}

function getChildSections(element: HTMLElement | null): HTMLDivElement[] {
  if (element == null) return []
  return Array.from(element.querySelectorAll(":scope > section"))
}

function getChildNodeSpecs(element: HTMLElement | null): LinkTreeNodeSpec[] | undefined {
  if (element == null) return undefined
  return getChildSections(element)
    .map(compileSectionTreeNode)
    .filter(Boolean<LinkTreeNodeSpec> as (nodeSpec: LinkTreeNodeSpec | null) => nodeSpec is LinkTreeNodeSpec)
}

function compileSectionTreeNode(section: HTMLDivElement): LinkTreeNodeSpec | null {
  const { id } = section
  if (id === "") return null
  const firstChild = section.firstElementChild
  if (!(firstChild instanceof HTMLHeadingElement)) return null
  const { innerText: title } = firstChild

  return {
    title,
    href: `#${id}`,
    children: getChildNodeSpecs(section),
  }
}
