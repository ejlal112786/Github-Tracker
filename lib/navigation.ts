import type { NavItem } from "@/types";
import {
  GitCompareArrows,
  LayoutDashboard,
  Lock,
  Package,
  Settings,
  UserRound,
} from "lucide-react";

/**
 * Single source of truth for dashboard navigation. Later phases can add real
 * route guards without touching layout components.
 */
export const dashboardNav: Array<NavItem & { icon: React.ComponentType<{ className?: string }> }> = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/activity", label: "Activity", icon: GitCompareArrows },
  { href: "/dashboard/repositories", label: "Repositories", icon: Package },
  { href: "/dashboard/security", label: "Security", icon: Lock },
  { href: "/dashboard/profile", label: "Profile", icon: UserRound },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];
