import { Spot } from "@/types";

const getSpotList = async (
  tripid: number,
  offset: number,
  limit: number
): Promise<Spot[]> => {
  const res = await fetch(
    `http://localhost:8080/spotlist/${tripid}?offset=${offset}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.spots;
};

const getSpotImage = async (spotid: number): Promise<string> => {
  const res = await fetch(`http://localhost:8080/spotimage/${spotid}`);
  const blob = await res.blob();
  const src = URL.createObjectURL(blob);
  return src;
};
export { getSpotList, getSpotImage };
