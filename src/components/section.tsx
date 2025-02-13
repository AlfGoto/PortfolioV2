import { ReactNode } from "react";

export default function Section({
  full = false,
  children,
  className,
  containerClassName,
}: {
  full?: boolean;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={`w-full min-h-[500px] flex justify-center bg-[--background] items-center ${
        containerClassName || ""
      }`}
    >
      <div
        className={`${
          full ? "" : "max-w-[--max-layout-width]"
        } min-h-[500px] w-full h-auto flex justify-center items-center ${
          className || ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}
