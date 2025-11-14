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
    <header className="w-full h-[97px] bg-[#272829] text-white rounded-[12px] pb-[24px] pt-[20px] px-[20px] shadow-lg">
      <nav className="bg-[#3a3b3c] lg:h-[32px] rounded-[10px] overflow-x-auto flex items-center">
        <ul className="flex flex-row items-center justify-between gap-[10px] flex-nowrap min-w-max mx-auto">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="flex-shrink-0 pl-10 pr-14 border-r-2 border-[#454545] last:border-r-0"
            >
              <Link
                href={link.href}
                onClick={() => setActive(link.title)}
                className={cn(
                  "block text-[14.5px] font-medium cursor-pointer transition-colors whitespace-nowrap duration-200 hover:text-[#4de209]",
                  active === link.title ? "text-[#4de209]" : "text-white/80"
                )}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="mt-[12px] text-[13px] lg:w-3/4 overflow-x-auto flex-nowrap lg:mx-auto flex flex-row items-center justify-around gap-6">
        <li className="flex-shrink-0 whitespace-nowrap hover:text-[#4de209] cursor-pointer">
          Edit Account/Profile/Password
        </li>
        <li className="flex-shrink-0 whitespace-nowrap hover:text-[#4de209] cursor-pointer">
          Get Verified
        </li>
        <li className="flex-shrink-0 whitespace-nowrap hover:text-[#4de209] cursor-pointer">
          Open a Store
        </li>
        <li className="flex-shrink-0 whitespace-nowrap hover:text-[#4de209] cursor-pointer">
          Gift Certificates
        </li>
        <li className="flex-shrink-0 whitespace-nowrap hover:text-[#4de209] cursor-pointer">
          Create Newsletters
        </li>
        <li className="flex-shrink-0 whitespace-nowrap hover:text-[#4de209] cursor-pointer">
          Send Praise Report
        </li>
        <li className="flex-shrink-0 whitespace-nowrap hover:text-[#4de209] cursor-pointer">
          Contact Support
        </li>
      </ul>
    </header>
  );
}
