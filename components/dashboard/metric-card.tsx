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
        "bg-transparent border-[#bfbfbf]/75 border rounded-[15px] px-4 py-3 text-[#d8d8d8] flex flex-col gap-[20px] h-full",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
        <p className="text-3xl font-bold">{value}</p>
        <h3 className="font-medium text-[#d8d8d8]">{title}</h3>
        </div>
        <div className="w-12 h-12 rounded-[8px] bg-[#272829] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-2">        
        <div className="flex items-center gap-1 text-[#4de209] text-sm bg-[#272829] h-[40px] rounded-[10px] px-4 w-fit lg:w-full">
          <ArrowUp size={16} />
          <span>{change}</span> <span className="text-[#d8d8d8]">over last month</span>
        </div>
      </div>
    </div>
  );
}

