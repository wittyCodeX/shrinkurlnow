import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Input = React.forwardRef(
  ({ className, label, name, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <Label htmlFor={name}>{label}</Label>}
        <input
          id={name}
          name={name}
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
