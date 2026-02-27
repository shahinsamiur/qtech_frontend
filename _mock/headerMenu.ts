export const headerMenu: MenuItemType[] = [
  {
    name: "Find Jobs",
    href: "/",
  },
  {
    name: "Browse Companies",
    href: "/about",
  },
];

export interface MenuItemType {
  name: string;
  href: string;
  //   title: string;
}
