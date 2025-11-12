import { MetricCard } from "./metric-card";
import { ShoppingCart } from "lucide-react";

interface TotalOrdersCardProps {
  value?: string;
  change?: string;
}

export function TotalOrdersCard({
  value = "3,387",
  change = "10.11% over last month",
}: TotalOrdersCardProps) {
  return (
    <MetricCard
      title="Total Orders"
      value={value}
      change={change}
      icon={<ShoppingCart size={20} className="text-[#4de209]" />}
    />
  );
}

