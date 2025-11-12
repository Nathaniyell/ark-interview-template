import { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  className?: string;
}

export function MetricCard({
  title,
  value,
  change,
  icon,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "bg-[#353637] rounded-[15px] p-6 text-white flex flex-col gap-4",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white/80">{title}</h3>
        <div className="w-10 h-10 rounded-full bg-[#4de209]/20 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-3xl font-bold">{value}</p>
        <div className="flex items-center gap-1 text-[#4de209] text-sm">
          <ArrowUp size={16} />
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
}

