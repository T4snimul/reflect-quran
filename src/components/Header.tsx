import { Search } from "lucide-react";
import { Input } from "./ui/input";
import type { ChangeEvent } from "react";

type Props = {
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
};

export default function Header({ onSearchChange, searchText }: Props) {
  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center  gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-700">Assalamu 'alaikum</h2>
        <p className="text-gray-400 text-sm">What do you want to read today?</p>
      </div>
      <div className="relative w-full sm:w-72 sm:shrink-0">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search surah..."
          aria-label="Search surahs"
          className="pl-9 pr-3"
          value={searchText}
          onChange={(e) => onSearchChange(e)}
        />
      </div>
    </header>
  );
}
