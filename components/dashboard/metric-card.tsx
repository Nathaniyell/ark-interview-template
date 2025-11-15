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
        "bg-transparent border-[#bfbfbf]/25 border rounded-[12px] px-4 justify-center text-[#d8d8d8] flex flex-col gap-[19px] h-[159px]",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">{value}</p>
        <h3 className="font-medium text-[#d8d8d8]">{title}</h3>
        </div>
        <div className="w-12 h-12 rounded-[5px] bg-[#272829] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-2">        
        <div className="flex items-center gap-1 text-[#4de209] text-sm bg-[#272829] h-[30px] rounded-[5px] px-4 w-fit lg:w-full">
          <ArrowUp size={16} />
          <span>{change}</span> <span className="text-[#d8d8d8]">over last month</span>
        </div>
      </div>
    </div>
  );
}

