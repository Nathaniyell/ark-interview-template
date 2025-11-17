import { MetricCard } from "./metric-card";
import { Gift } from "lucide-react";

interface TotalProductsSoldCardProps {
  value?: string;
  change?: string;
}

export function TotalProductsSoldCard({
  value = "8,468",
  change = "13.31%",
}: TotalProductsSoldCardProps) {
  return (
    <MetricCard
      title="Total Products Sold"
      value={value}
      change={change}
      icon={<Gift size={24} />}
    />
  );
}

