import { cn } from "@/lib/utils";

/** Simple inline alert for validation / error / success messaging. */
export function Alert({
  variant = "info",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "info" | "error" | "success" | "warning";
}) {
  const styles: Record<string, string> = {
    info: "border-sky-500/30 bg-sky-500/10 text-sky-800 dark:text-sky-300",
    error:
      "border-destructive/40 bg-destructive/10 text-destructive dark:text-red-300",
    success:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
    warning:
      "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300",
  };
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={cn(
        "flex items-start gap-2 rounded-lg border px-3 py-2 text-sm",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
