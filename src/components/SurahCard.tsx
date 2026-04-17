import { Card } from "@/components/ui/card";
import type { Surah } from "@/types";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

type Props = {
  surah: Surah;
};

export default function SurahCard({ surah }: Props) {
  return (
    <Card className="grid grid-cols-[2.125rem_1fr_5.5rem_1.5rem] items-center gap-2 px-4 hover:bg-gray-50 cursor-pointer">
      <div className="px-2 font-medium text-gray-700 text-xs sm:text-base">
        {surah.number}
      </div>
      <div className="px-4 md:px-8 lg:px-12">
        <h3 className="font-bold sm:text-lg  text-gray-700">
          {surah.englishName}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          {surah.englishNameTranslation}
        </p>
      </div>
      <div className="justify-self-end text-xs sm:text-sm text-gray-400  px-2">
        {surah.numberOfAyahs} ayahs
      </div>
      <div>
        <ChevronRight size={16} className="text-gray-500" />
      </div>
    </Card>
  );
}

export function SurahSkeleton({ count }: any) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          className="grid grid-cols-[2.125rem_1fr_5.5rem_1.5rem] items-center gap-4 my-2"
          key={index}
        >
          <Skeleton className="h-6" />
          <Skeleton className="h-12" />
          <Skeleton className="h-6" />
          <Skeleton className="h-4" />
        </div>
      ))}
    </>
  );
}
