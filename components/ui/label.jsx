import * as React from "react";
import { cn } from "@/lib/utils";

const labelVariants = (variant) => {
  switch (variant) {
    case "primary":
      return "text-primary";
    case "secondary":
      return "text-secondary";
    default:
      return "text-default";
  }
};

const Label = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "block text-sm font-medium leading-5",
        labelVariants(variant),
        className
      )}
      {...props}
    />
  );
});
Label.displayName = "Label";

export { Label };