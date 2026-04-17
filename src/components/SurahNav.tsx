import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SurahNav({ tabOptions }: any) {
  return (
    <TabsList className="mx-auto my-2">
      {tabOptions.map((option: any) => (
        <TabsTrigger key={option.id} value={option.value}>
          {option.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
