import React from "react";
import { cn } from "@/lib/utils";
import { integralCF, satoshi } from "@/styles/fonts";

type BrandNameProps = {
  text?: string | null;
  fallback?: string;
  className?: string;
};

const BrandName = ({
  text,
  fallback = "FASHION",
  className,
}: BrandNameProps) => {
  const displayText = text?.trim() || fallback;

  return (
    <span className={cn(integralCF.className, className)}>
      {Array.from(displayText).map((char, index) =>
        char === "'" ? (
          <span
            key={`${char}-${index}`}
            className={cn(
              satoshi.className,
              "relative -top-[0.08em] inline-block"
            )}
          >
            &#39;
          </span>
        ) : (
          <React.Fragment key={`${char}-${index}`}>{char}</React.Fragment>
        )
      )}
    </span>
  );
};

export default BrandName;
