import React from "react";
import { RECENT_SALES } from "@/src/constants/mockData";

/**
 * Recent sales list showing latest transactions.
 * Data shape: Array of { name: string, email: string, amount: string, initials: string }
 */
export function RecentSales() {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Recent Sales</h3>
        <p className="text-sm text-slate-500">You made 265 sales this month.</p>
      </div>
      <div className="space-y-8">
        {RECENT_SALES.map((sale) => (
          <div key={sale.email} className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">
              {sale.initials}
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none text-slate-900">{sale.name}</p>
              <p className="text-sm text-slate-500">{sale.email}</p>
            </div>
            <div className="text-sm font-medium text-slate-900">{sale.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
