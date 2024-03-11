import { Trip } from "@/types/index";

const getAllTripList = async (): Promise<Trip[]> => {
  const res = await fetch("http://localhost:8080/tripalllist", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.trips;
};

const getTripList = async (offset: number, limit: number): Promise<Trip[]> => {
  const res = await fetch(
    `http://localhost:8080/triplist?offset=${offset}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.trips;
};

const getTripImage = async (tripid: number): Promise<string> => {
  const res = await fetch(`http://localhost:8080/tripimage/${tripid}`);
  const blob = await res.blob();
  const src = URL.createObjectURL(blob);
  return src;
};

export { getAllTripList, getTripList, getTripImage };
