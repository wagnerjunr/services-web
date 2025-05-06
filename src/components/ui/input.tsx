import * as React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {Icon && (
          <span className="absolute left-3">
            <Icon size={18} className="stroke-neutral/25 " />
          </span>
        )}
        <input
          type={type}
          className={cn(
            `flex w-full h-10 rounded-[8px] bg-surface border border-border px-3 py-2 ${
              Icon ? "pl-9" : "pl-3"
            } text-[16px] 
            md:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-neutral/25 focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-primary first-line:focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
