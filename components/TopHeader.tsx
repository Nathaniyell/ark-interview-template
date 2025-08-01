import { useId } from "react";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

// import Logo from "@/components/navbar-components/logo";
import logo from "@/app/logo.svg";
import NotificationMenu from "@/components/navbar-components/notification-menu";
import UserMenu from "@/components/navbar-components/user-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Browsing History", active: true },
  { href: "#", label: "Garden of Eden", active: false },
  { href: "#", label: "Blessed Friday" },
  { href: "#", label: "Account" },
  { href: "#", label: "Lists", active: true },
  { href: "#", label: "Orders", active: false },
  { href: "#", label: "Payments" },
  { href: "#", label: "Returns" },
  { href: "#", label: "Shipping" },
  { href: "#", label: "Velocity" },
  { href: "#", label: "Coupons" },
  { href: "#", label: "Gift Cards" },
  { href: "#", label: "Ekklesia Support" },
];

export default function TopHeader() {
  const id = useId();

  return (
    <header className="border-b ">
      <div className="flex h-16 bg-secondary shadow-md items-center justify-between gap-4 px-4 md:px-6">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5"
                        active={link.active}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-primary hover:text-primary/90 flex items-center gap-1"
            >
              {/* <Logo /> */}
              <Image src={logo} alt="ARK Logo" className="w-8 h-8" />
              <p className="text-white/80 text-xs font-semibold">ARK</p>
            </a>
          </div>
        </div>
        {/* Middle area */}
        <div className="grow  hidden md:block">
          {/* Search form */}
          <div className="relative mx-auto w-full max-w-md">
            <Input
              id={id}
              className="peer h-8 ps-8 pe-10"
              placeholder="Search..."
              type="search"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
            <div className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2">
              <kbd className="text-muted-foreground/70 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4">
          {/* Notification */}

          {/* User menu */}
          <UserMenu />
          <NotificationMenu />
        </div>
      </div>
      {/* Bottom navigation */}
      <div className="border-t  bg-secondary py-1 max-md:hidden px-5">
        {/* Navigation menu */}
        <NavigationMenu className="w-full">
          <NavigationMenuList className=" flex justify-between w-full">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  active={link.active}
                  href={link.href}
                  className="text-white/80   hover:text-primary py-1.5 font-semibold text-xs"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
