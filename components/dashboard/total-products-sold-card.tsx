import { MetricCard } from "./metric-card";
import { Package } from "lucide-react";

interface TotalProductsSoldCardProps {
  value?: string;
  change?: string;
}

export function TotalProductsSoldCard({
  value = "8,468",
  change = "13.31% over last month",
}: TotalProductsSoldCardProps) {
  return (
    <MetricCard
      title="Total Products Sold"
      value={value}
      change={change}
      icon={<Package size={20} className="text-[#4de209]" />}
    />
  );
}

