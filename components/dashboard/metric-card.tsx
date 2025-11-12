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
        "bg-transparent border-[#4a4a4a] border-2 rounded-[15px] p-6 text-white flex flex-col gap-4 h-full",
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
        <div className="flex items-center gap-1 text-[#4de209] text-sm bg-[#353637] h-[40px] rounded-[10px] px-4 w-fit">
          <ArrowUp size={16} />
          <span>{change}</span> <span className="text-white/80">over last month</span>
        </div>
      </div>
    </div>
  );
}

