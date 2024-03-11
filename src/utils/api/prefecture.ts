import { Prefecture } from "@/types/index";

const getPrefecture = async (prefectureid: string): Promise<Prefecture[]> => {
  const res = await fetch(`http://localhost:8080/prefecture/${prefectureid}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.prefecture;
};

const getPrefectureList = async (): Promise<Prefecture[]> => {
  const res = await fetch(`http://localhost:8080/prefecturelist`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data.prefectures;
};

export { getPrefecture, getPrefectureList };
