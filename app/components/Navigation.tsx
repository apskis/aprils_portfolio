"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/social", label: "Social" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary transition-colors hover:text-primary/80 cursor-pointer">
            April Parker
          </h1>
        </Link>
        <ul className="flex gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Button
                asChild
                variant={pathname === link.href ? "default" : "ghost"}
                size="sm"
                className={cn(
                  pathname === link.href && "bg-secondary hover:bg-secondary/90"
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

