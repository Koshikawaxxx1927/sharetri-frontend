import { PrefectureType } from "@/types/index";

const getPrefecture = async (
  prefectureid: string
): Promise<PrefectureType[]> => {
  const res = await fetch(`http://localhost:8080/prefecture/${prefectureid}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.prefecture;
};

const getPrefectureList = async (): Promise<PrefectureType[]> => {
  const res = await fetch(`http://localhost:8080/prefecturelist`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data.prefectures;
};

export { getPrefecture, getPrefectureList };
