import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { CHART_DATA } from "@/src/constants/mockData";

/**
 * Overview chart showing revenue data using Recharts.
 * Data shape: Array of { name: string, total: number }
 */
export function OverviewChart() {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Overview</h3>
        <p className="text-sm text-slate-500">Revenue generated over the past year</p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={CHART_DATA}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              cursor={{ fill: '#f1f5f9' }}
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Bar
              dataKey="total"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              className="fill-indigo-600"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
