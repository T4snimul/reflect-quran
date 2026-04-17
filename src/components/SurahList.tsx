import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SurahList({ children }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 items-center justify-center">
      {children}
    </div>
  );
}
