export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export type NavItemWithChildren<ChildType extends NavItem = NavItem> = NavItem & {
  items: ChildType[]
}
