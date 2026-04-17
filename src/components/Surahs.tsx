import { Tabs } from "@/components/ui/tabs";
import SurahNav from "./SurahNav";
import type { ReactNode } from "react";
import { tabOptions } from "@/utils";

type Props = {
  children: ReactNode;
};

export default function Surahs({ children }: Props) {
  return (
    <Tabs
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
      defaultValue={tabOptions[0].value}
    >
      <SurahNav tabOptions={tabOptions} />
      {children}
    </Tabs>
  );
}
