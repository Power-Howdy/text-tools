"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-warm-900 disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02]";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-dark dark:bg-accent-light dark:hover:bg-accent",
    secondary:
      "bg-warm-200 dark:bg-warm-700 text-warm-900 dark:text-warm-100 hover:bg-warm-300 dark:hover:bg-warm-600",
    ghost:
      "hover:bg-warm-200 dark:hover:bg-warm-800 text-warm-700 dark:text-warm-300",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
