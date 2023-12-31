"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Button } from "./ui/button";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  // this will be directed to settings page
  const routes = [
    {
      href: `/${params.storeId}`,
      label: `Sales`,
      active: pathname === `/${params.storeId}`,
    },

    {
      href: `/${params.storeId}/billboards`,
      label: `Billboards`,
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: `Categories`,
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: `Sizes`,
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: `Colors`,
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: `Products`,
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: `Orders`,
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/users`,
      label: `Users`,
      active: pathname === `/${params.storeId}/users`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: `Settings`,
      active: pathname === `/${params.storeId}/settings`,
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          <Button variant="link" className="p-1.5 pb-0 pt-0">
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
}
