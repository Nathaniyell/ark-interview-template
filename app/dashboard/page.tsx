import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen m-[50px] flex flex-col gap-[50px]">
      <h1 className="text-white font-bold text-5xl">Dashboard</h1>
      <DashboardNav />
    </div>
  );
};

export default Page;
