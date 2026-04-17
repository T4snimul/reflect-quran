import type { Surah } from "@/types";
const api = "https://api.alquran.cloud/v1";

type Result = {
  code: number;
  status: string;
  data: Surah[];
};

export async function getSurahs(): Promise<Result> {
  const res = await fetch(`${api}/surah`);
  return res.json();
}
