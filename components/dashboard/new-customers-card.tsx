import { MetricCard } from "./metric-card";
import { Users } from "lucide-react";

interface NewCustomersCardProps {
  value?: string;
  change?: string;
}

export function NewCustomersCard({
  value = "328",
  change = "9.97%",
}: NewCustomersCardProps) {
  return (
    <MetricCard
      title="New Customers"
      value={value}
      change={change}
      icon={<Users size={24} />}
    />
  );
}

