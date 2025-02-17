export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  label?: string
}

export type NavItemWithChildren<ChildType extends NavItem = NavItem> = NavItem & {
  items: ChildType[]
}
