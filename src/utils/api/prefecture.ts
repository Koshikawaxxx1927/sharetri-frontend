import { PrefectureType } from "@/types/index";

const getPrefecture = async (
  prefectureid: string
): Promise<PrefectureType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/prefecture/${prefectureid}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.prefecture;
};

const getPrefectureList = async (): Promise<PrefectureType[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_END_POINT}/prefecturelist`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data.prefectures;
};

export { getPrefecture, getPrefectureList };
