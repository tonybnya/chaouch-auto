import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Accueil", href: "/" },
  { name: "Catalogue", href: "catalogue" },
  { name: "À propos", href: "a-propos" },
  { name: "Contact", href: "contact" },
];

export const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {menuState && (
        <div
          onClick={() => setMenuState(false)}
          className="fixed inset-0 z-10 bg-black/95 backdrop-blur-sm lg:hidden"
        />
      )}

      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 text-white lg:py-4">
            {/* Logo + Hamburger (mobile only) */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link
                to="/"
                aria-label="accueil"
                className="flex items-center space-x-2"
              >
                <img
                  src="/logo.png"
                  alt="Chaouch Auto logo"
                  className="h-10 w-20"
                />
              </Link>

              {/* Hamburger visible uniquement sur mobile */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 p-2.5"
                >
                  <Menu
                    className={cn(
                      "m-auto size-6 duration-200",
                      menuState && "rotate-180 scale-0 opacity-0",
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 m-auto size-6 rotate-180 scale-0 opacity-0 duration-200",
                      menuState && "rotate-0 scale-100 opacity-100",
                    )}
                  />
                </button>
              </div>
            </div>

            {/* Desktop menu aligned to the right */}
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm items-center">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span className="py-2 px-4 rounded-md hover:border-2 hover:border-[#f6d44c]">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile dropdown menu */}
            <div
              className={cn(
                "bg-background hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 lg:hidden",
                menuState && "block",
              )}
            >
              <ul className="space-y-6 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
