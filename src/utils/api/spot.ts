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
  data.spots.map((spot: SpotType) => {
    spot.starttime =
      spot.starttime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  });
  data.spots.map((spot: SpotType) => {
    spot.endtime =
      spot.endtime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  });
  return data.spots;
};

const getSpotImage = async (spotid: string): Promise<string> => {
  const res = await fetch(`http://localhost:8080/spotimage/${spotid}`);
  const blob = await res.blob();
  const src = URL.createObjectURL(blob);
  return src;
};

const postSpot = async (
  userid: string,
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
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${userid}/spot/${tripid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(bodyData),
    }
  );
  const data = await res.json();
  data.spot.starttime =
    data.spot.starttime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  data.spot.endtime =
    data.spot.endtime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  return data.spot;
};

const putSpot = async (
  userid: string,
  tripid: string,
  spotid: string,
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

  const res = await fetch(
    `http://localhost:8080/login/api/v1/${userid}/spot/${spotid}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(bodyData),
    }
  );
  const data = await res.json();
  data.spot.starttime =
    data.spot.starttime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  data.spot.endtime =
    data.spot.endtime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  return data.spot;
};

const deleteSpot = async (
  userid: string,
  spot: SpotType
): Promise<SpotType[]> => {
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${userid}/spot/${spot.ID}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
  const data = await res.json();
  data.spot.starttime =
    data.spot.starttime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  data.spot.endtime =
    data.spot.endtime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  return data.spots;
};

const postSpotImage = async (
  spotimage: File,
  spotid: string,
  userid: string
) => {
  const formData = new FormData();
  formData.append("image", spotimage, "image.png");
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${userid}/spotimage/${spotid}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: formData,
    }
  );
  const data = await res.json();
  data.spot.starttime =
    data.spot.starttime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  data.spot.endtime =
    data.spot.endtime.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0] ?? "";
  return data.spot;
};

export {
  getSpotList,
  getSpotImage,
  postSpot,
  deleteSpot,
  putSpot,
  postSpotImage,
};
