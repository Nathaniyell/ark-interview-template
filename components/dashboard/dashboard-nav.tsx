"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function DashboardNav() {
  const [active, setActive] = useState("Admin Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: "Admin Home", href: "#" },
    { title: "Messages", href: "#" },
    { title: "Selling & Sales", href: "#" },
    { title: "Orders", href: "#" },
    { title: "Ratings & Reviews", href: "#" },
    { title: "ARKai Ads", href: "#" },
    { title: "ARKcoupons", href: "#" },
    { title: "Lists", href: "#" },
    { title: "RSS", href: "#" },
  ];

  return (
    <header className="w-full h-[129px] bg-[#353637] text-white rounded-[15px] shadow-lg">
      <div className="flex items-center justify-end px-6 py-4">

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-white hover:text-green-400 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    
      <nav
        className={cn(
          "bg-[#818588] rounded-b-[15px] lg:rounded-[9px] mx-4 transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-[500px]" : "max-h-0 lg:max-h-none"
        )}
      >
        <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-around lg:gap-6 px-6">
          {navLinks.map((link) => (
            <li key={link.title} className="w-full lg:w-auto">
              <Link
                href={link.href}
                onClick={() => {
                  setActive(link.title);
                  setMenuOpen(false);
                }}
                className={cn(
                  "block text-sm font-medium transition-colors py-2 text-center duration-200 hover:text-[#4de209]",
                  active === link.title
                    ? "text-[#4de209]"
                    : "text-white/80"
                )}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
