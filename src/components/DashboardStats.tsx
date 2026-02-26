import React from "react";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { DASHBOARD_STATS } from "@/src/constants/mockData";

const iconMap = {
  DollarSign,
  Users,
  CreditCard,
  Activity,
};

/**
 * Dashboard stats grid showing key performance indicators.
 * Data shape: Array of { title: string, value: string, description: string, icon: string }
 */
export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {DASHBOARD_STATS.map((stat) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <div key={stat.title} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-slate-500">{stat.title}</h3>
              <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
                <Icon size={18} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
