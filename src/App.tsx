import { useEffect, useState, type ChangeEvent } from "react";
import Header from "./components/Header";
import Surahs from "./components/Surahs";
import type { Surah } from "./types";
import { getSurahs } from "./api";
import SurahList from "./components/SurahList";
import SurahCard, { SurahSkeleton } from "./components/SurahCard";
import { TabsContent } from "./components/ui/tabs";
import { tabOptions } from "./utils";

export default function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const meccanSurahs = surahs.filter(
    (surah) => surah.revelationType === "Meccan",
  );
  const medinanSurahs = surahs.filter(
    (surah) => surah.revelationType === "Medinan",
  );

  const [allSurahs, meccan, medinan] = tabOptions;

  useEffect(() => {
    let cancelled = false;

    (async function () {
      setLoading(true);
      setError(null);

      try {
        const result = await getSurahs();
        if (!cancelled) setSurahs(result.data);
      } catch {
        if (!cancelled) setError("Failed to load surahs. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const tabs = [
    { value: allSurahs.value, items: surahs },
    { value: meccan.value, items: meccanSurahs },
    { value: medinan.value, items: medinanSurahs },
  ];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setQuery(searchText.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(id);
  }, [searchText]);

  return (
    <main>
      <Header onSearchChange={handleSearch} searchText={searchText} />
      <Surahs>
        <>
          {error && <p className="text-sm text-red-600">{error}</p>}

          {tabs.map((tab) => (
            <TabsContent value={tab.value} key={tab.value}>
              <SurahList>
                {loading ? (
                  <SurahSkeleton count={4} />
                ) : tab.items.length > 0 ? (
                  tab.items
                    .filter(
                      (surah) =>
                        surah.englishName.toLowerCase().includes(query) ||
                        surah.englishNameTranslation
                          .toLowerCase()
                          .includes(query) ||
                        surah.name.toLowerCase().includes(query) ||
                        surah.number.toString().includes(query),
                    )
                    .map((surah) => (
                      <SurahCard surah={surah} key={surah.number} />
                    ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No surahs found.
                  </p>
                )}
              </SurahList>
            </TabsContent>
          ))}
        </>
      </Surahs>
    </main>
  );
}
