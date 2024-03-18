import { SpotType } from "@/types";

const getSpotList = async (
  tripid: number,
  offset: number,
  limit: number
): Promise<SpotType[]> => {
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

const postSpot = async (
  tripid: number,
  name: string,
  starttime: string,
  endtime: string,
  cost: number,
  memo: string
): Promise<SpotType> => {
  const bodyData = {
    tripid: `${tripid}`,
    name: name,
    starttime: `${starttime}:00.000+09:00`,
    endtime: `${endtime}:00.000+09:00`,
    cost: Number(cost),
    memo: memo,
  };
  const res = await fetch(`http://localhost:8080/spot/${tripid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  const data = await res.json();
  return data.spot;
};

const putSpot = async (
  tripid: string | undefined,
  spotid: number,
  name: string,
  starttime: string,
  endtime: string,
  cost: number,
  memo: string
): Promise<SpotType> => {
  const bodyData = {
    tripid: `${tripid}`,
    name: name,
    starttime: `${starttime}+09:00`,
    endtime: `${endtime}+09:00`,
    cost: Number(cost),
    memo: memo,
  };

  const res = await fetch(`http://localhost:8080/spot/${spotid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  console.log(JSON.stringify(bodyData));
  const data = await res.json();
  return data.spot;
};

const deleteSpot = async (spot: SpotType): Promise<SpotType[]> => {
  const res = await fetch(`http://localhost:8080/spot/${spot.ID}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data.spots;
};

export { getSpotList, getSpotImage, postSpot, deleteSpot, putSpot };
