// https://github.com/shadcn-ui/ui/blob/779517a1d46f567c8e3fa8fcdea4c75c65ad4eb4/apps/www/lib/toc.ts#L73

"use client"

import * as React from "react"

import { LinkTree, type LinkTreeRootSpec } from "@/components/link-tree"

export type TableOfContentsProps = {
  toc: LinkTreeRootSpec
}

const filterIds = Boolean<string> as (id?: string | undefined) => id is string

export function TableOfContents({ toc }: TableOfContentsProps) {
  const itemIds = React.useMemo(() => {
    if (toc.children == null) return []
    return toc.children
      .flatMap((item) => [item.href, item.children?.map((item) => item.href)])
      .flat()
      .filter(filterIds)
      .map((id) => id.slice(id.lastIndexOf("#")))
  }, [toc])
  const activeHeading = useActiveItem(itemIds)

  if (!toc.children?.length) {
    return null
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <LinkTree rootSpec={toc} activeItemHref={activeHeading} />
    </div>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setActiveId(entry.target.id)
        }
      },
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin
      // only observe the uppermost 20% of the screen
      { rootMargin: "0% 0% -80% 0%" },
    )

    for (const id of itemIds) {
      const element = document.getElementById(id)
      if (!element) continue
      observer.observe(element)
    }

    return () => {
      for (const id of itemIds) {
        const element = document.getElementById(id)
        if (!element) continue
        observer.unobserve(element)
      }
    }
  }, [itemIds])

  return activeId
}
