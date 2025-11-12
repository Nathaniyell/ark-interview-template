import { MetricCard } from "./metric-card";
import { DollarSign } from "lucide-react";

interface TotalRevenuesCardProps {
  value?: string;
  change?: string;
}

export function TotalRevenuesCard({
  value = "$84,687",
  change = "12.74% over last month",
}: TotalRevenuesCardProps) {
  return (
    <MetricCard
      title="Total Revenues"
      value={value}
      change={change}
      icon={<DollarSign size={20} className="text-[#4de209]" />}
    />
  );
}

