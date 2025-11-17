import { MetricCard } from "./metric-card";
import { CircleDollarSign } from "lucide-react";

interface TotalRevenuesCardProps {
  value?: string;
  change?: string;
}

export function TotalRevenuesCard({
  value = "$84,687",
  change = "12.74%",
}: TotalRevenuesCardProps) {
  return (
    <MetricCard
      title="Total Revenues"
      value={value}
      change={change}
      icon={<CircleDollarSign size={24} />}
    />
  );
}

