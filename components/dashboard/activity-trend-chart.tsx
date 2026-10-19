"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ActivityPoint } from "@/types";

/**
 * Recharts preview of weekly development activity. Used on the landing page
 * and dashboard. Colors come from CSS chart tokens so it adapts to theme.
 */
export function ActivityTrendChart({ data }: { data: ActivityPoint[] }) {
  return (
    <div className="h-64 w-full" role="img" aria-label="Weekly development activity chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
          <defs>
            <linearGradient id="grad-commits" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-chart-1)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-chart-1)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="grad-prs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-chart-2)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-chart-2)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={40}
            tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-popover)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-popover-foreground)",
              fontSize: 12,
            }}
            cursor={{ stroke: "var(--color-border)" }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Area
            type="monotone"
            dataKey="commits"
            name="Commits"
            stroke="var(--color-chart-1)"
            strokeWidth={2}
            fill="url(#grad-commits)"
          />
          <Area
            type="monotone"
            dataKey="pullRequests"
            name="Pull requests"
            stroke="var(--color-chart-2)"
            strokeWidth={2}
            fill="url(#grad-prs)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
