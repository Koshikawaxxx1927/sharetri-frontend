import axios from "axios";
import { Prefecture } from "@/types/index";

const getPrefecture = async (prefectureid: string): Promise<Prefecture[]> => {
  const { data } = await axios.get(
    `http://localhost:8080/prefecture/${prefectureid}`
  );
  return data.prefecture;
};

const getPrefectureList = async (): Promise<Prefecture[]> => {
  const { data } = await axios.get(`http://localhost:8080/prefecturelist`);
  return data.prefectures;
};

export { getPrefecture, getPrefectureList };
