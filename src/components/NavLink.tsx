import Link from "next/link";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

type NavLinkCompatProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  to: ComponentPropsWithoutRef<typeof Link>["href"];
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ to, ...props }, ref) => {
    return <Link ref={ref} href={to} {...props} />;
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
