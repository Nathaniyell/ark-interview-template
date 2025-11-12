"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function DashboardNav() {
  const [active, setActive] = useState("Admin Home");

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
    <header className="w-full h-[129px] bg-[#353637] text-white rounded-[15px] p-[24px] shadow-lg">
      <nav className="bg-[#818588] rounded-[15px] overflow-x-auto">
        <ul className="flex flex-row items-center justify-around gap-6 px-6 py-2 flex-nowrap min-w-max">
          {navLinks.map((link) => (
            <li key={link.title} className="flex-shrink-0">
              <Link
                href={link.href}
                onClick={() => setActive(link.title)}
                className={cn(
                  "block text-sm font-medium cursor-pointer transition-colors py-2 whitespace-nowrap duration-200 hover:text-[#4de209]",
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
      <ul className="mt-[14px] lg:w-3/4 overflow-x-auto flex-nowrap lg:mx-auto flex flex-row items-center justify-around gap-6">
        <li className="flex-shrink-0 whitespace-nowrap">Edit Account/Profile/Password</li>
        <li className="flex-shrink-0 whitespace-nowrap">Get Verified</li>
        <li className="flex-shrink-0 whitespace-nowrap">Open a Store</li>
        <li className="flex-shrink-0 whitespace-nowrap">Gift Certificates</li>
        <li className="flex-shrink-0 whitespace-nowrap">Create Newsletters</li>
        <li className="flex-shrink-0 whitespace-nowrap">Send Praise Report</li>
        <li className="flex-shrink-0 whitespace-nowrap">Contact Support</li>
      </ul>
    </header>
  );
}
