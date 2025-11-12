"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  User,
  MessageSquare,
  Package,
  BarChart3,
  Settings,
  List,
  Clock,
  MessageCircle,
  Smartphone,
} from "lucide-react";

const navItems = [
  { icon: User, label: "User Profile", id: "profile" },
  { icon: MessageSquare, label: "Messages", id: "messages" },
  { icon: Package, label: "Products", id: "products" },
  { icon: BarChart3, label: "Reports", id: "reports" },
  { icon: Settings, label: "Settings", id: "settings" },
  { icon: List, label: "Lists", id: "lists" },
  { icon: Clock, label: "History", id: "history" },
  { icon: MessageCircle, label: "Chat", id: "chat" },
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
        "w-16 bg-[#353637] flex flex-col items-center py-6 gap-6",
        fixed ? "fixed left-0 top-0 h-screen z-50" : "h-full"
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
              "w-12 h-12 flex items-center justify-center rounded-lg transition-colors",
              isActive
                ? "bg-[#4de209] text-black"
                : "text-white hover:bg-[#4de209]/20"
            )}
            title={item.label}
          >
            <Icon size={24} />
          </button>
        );
      })}
    </aside>
  );
}

