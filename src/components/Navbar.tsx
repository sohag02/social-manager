import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "About",
    href: "/about",
  },
];

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-5xl px-4 py-4"
      >
        <div className="glass-morphism flex items-center justify-between rounded-full px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Social Manager</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button className="rounded-full" size="sm">
                Login <LogIn className="ml-2 h-4 w-4" />
              </Button>
            </SignedOut>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
