import React from "react";

export default function button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-foreground text-background px-4 py-2 cursor-pointer font-bold text-lg ${className}`}
    >
      {children}
    </button>
  );
}
