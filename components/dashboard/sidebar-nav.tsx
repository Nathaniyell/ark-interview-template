"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  CircleUserRound,
  Mail,
  Package,
  BarChart3,
  ChartNoAxesCombined,
  ClipboardList,
  Timer,
  MessageCircleMore,
  GraduationCap,
  Smartphone,
} from "lucide-react";

const navItems = [
  { icon: CircleUserRound, label: "User Profile", id: "profile" },
  { icon: Mail, label: "Messages", id: "messages" },
  { icon: Package, label: "Products", id: "products" },
  { icon: BarChart3, label: "Reports", id: "reports" },
  { icon: ChartNoAxesCombined, label: "Settings", id: "settings" },
  { icon: ClipboardList, label: "Lists", id: "lists" },
  { icon: GraduationCap, label: "Graduation", id: "Graduation" },
  { icon: Timer, label: "History", id: "history" },
  { icon: MessageCircleMore, label: "Chat", id: "chat" },
  { icon: Smartphone, label: "Mobile App", id: "mobile" },
];

interface SidebarNavProps {
  fixed?: boolean;
}

export function SidebarNav({ fixed = false }: SidebarNavProps) {
  const [active, setActive] = useState("profile");

  return (
    <aside
      className={cn(
        "w-12 lg:w-[53px] bg-[#272829] rounded-[12px] flex flex-col items-center justify-center py-4 place-items-center gap-4 lg:gap-8 flex-shrink-0",
        fixed ? "fixed left-0 top-0 h-screen z-50" : "h-auto"
      )}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg transition-colors",
              isActive
                ? "text-[#4de209]"
                : "text-white hover:text-[#4de209]"
            )}
            title={item.label}
          >
            <Icon className="w-5 h-5 lg:w-[23px] lg:h-[23px]" />
          </button>
        );
      })}
    </aside>
  );
}

