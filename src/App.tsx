/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Layout } from "./components/Layout";
import { DashboardStats } from "./components/DashboardStats";
import { OverviewChart } from "./components/OverviewChart";
import { RecentSales } from "./components/RecentSales";
import { Download, Calendar } from "lucide-react";

export default function App() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h2>
            <p className="text-slate-500">Welcome back to your admin overview.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              <Calendar size={16} />
              Jan 20, 2024 - Feb 09, 2024
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
              <Download size={16} />
              Download Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <DashboardStats />
        </motion.div>

        {/* Charts & Lists Section */}
        <div className="grid gap-6 lg:grid-cols-7">
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <OverviewChart />
          </motion.div>
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <RecentSales />
          </motion.div>
        </div>

        {/* Additional Info / Table Placeholder */}
        <motion.div
          className="bg-white p-6 rounded-xl border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">System Activity</h3>
              <p className="text-sm text-slate-500">Monitor real-time system performance and logs.</p>
            </div>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all logs</button>
          </div>
          <div className="h-48 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center bg-slate-50">
            <p className="text-slate-400 text-sm">Activity log visualization coming soon...</p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

