import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="container mx-auto mt-20 border-t border-white/10 px-4 py-16">
      <div className="mb-12 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-4 font-semibold">Social Manager</h3>
          <p className="text-muted-foreground text-sm">
            Your all-in-one solution for social media management and scheduling.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Product</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Company</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-muted-foreground text-sm transition-colors hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
        <p className="text-muted-foreground text-sm">
          © 2025 Social Manager. All rights reserved.
        </p>
        <div className="mt-4 flex gap-4 md:mt-0">
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-white"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-white"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-white"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
