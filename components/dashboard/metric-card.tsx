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
      <div className="flex items-center justify-betwee">
        <div className="flex flex-col gap-1 bg-red-500">
        <p className="text-2xl font-semibold leading-none">{value}</p>
        <h3 className="font-medium text-[#b0b3b8] leading-none">{title}</h3>
        </div>
        <div className="w-12 h-[45px] rounded-[5px] bg-[#272829] flex items-center justify-center">
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

