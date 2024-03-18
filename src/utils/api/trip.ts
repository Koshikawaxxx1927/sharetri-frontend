import { TripType } from "@/types/index";

const getAllTripList = async (): Promise<TripType[]> => {
  const res = await fetch("http://localhost:8080/tripalllist", {
    cache: "no-store",
  });
  const data = await res.json();
  data.trips.map((trip: TripType) => {
    trip.startdate = trip.startdate.split("T")[0];
  });
  data.trips.map((trip: TripType) => {
    trip.enddate = trip.enddate.split("T")[0];
  });
  return data.trips;
};

const getTripList = async (
  offset: number,
  limit: number
): Promise<TripType[]> => {
  const res = await fetch(
    `http://localhost:8080/triplist?offset=${offset}&limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  data.trips.map((trip: TripType) => {
    trip.startdate = trip.startdate.split("T")[0];
  });
  data.trips.map((trip: TripType) => {
    trip.enddate = trip.enddate.split("T")[0];
  });
  return data.trips;
};

const getTripImage = async (tripid: number): Promise<string> => {
  const res = await fetch(`http://localhost:8080/tripimage/${tripid}`);
  const blob = await res.blob();
  const src = URL.createObjectURL(blob);
  return src;
};

const postTrip = async (
  userid: number,
  title: string,
  startdate: string,
  enddate: string,
  prefectureid: string,
  memo: string,
  ispublic: boolean
): Promise<TripType> => {
  const bodyData = {
    prefectureid: `${prefectureid}`,
    title: title,
    startdate: `${startdate}T00:00:00.000+09:00`,
    enddate: `${enddate}T00:00:00.000+09:00`,
    memo: memo,
    imagepath: "",
    ispublic: ispublic,
  };
  const res = await fetch(`http://localhost:8080/trip/${userid}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  const data = await res.json();
  data.trip.startdate = data.trip.startdate.split("T")[0];
  data.trip.enddate = data.trip.enddate.split("T")[0];
  return data.trip;
};

const putTrip = async (
  tripid: number,
  title: string,
  startdate: string,
  enddate: string,
  prefectureid: string,
  memo: string,
  ispublic: boolean
): Promise<TripType> => {
  const bodyData = {
    prefectureid: `${prefectureid}`,
    title: title,
    startdate: `${startdate}T00:00:00.000+09:00`,
    enddate: `${enddate}T00:00:00.000+09:00`,
    memo: memo,
    ispublic: ispublic,
  };
  const res = await fetch(`http://localhost:8080/trip/${tripid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  const data = await res.json();
  data.trip.startdate = data.trip.startdate.split("T")[0];
  data.trip.enddate = data.trip.enddate.split("T")[0];
  return data.trip;
};

const deleteTrip = async (trip: TripType): Promise<TripType[]> => {
  const res = await fetch(`http://localhost:8080/trip/${trip.ID}`, {
    method: "DELETE",
  });
  const data = await res.json();
  data.trip.startdate = data.trip.startdate.split("T")[0];
  data.trip.enddate = data.trip.enddate.split("T")[0];
  return data.trips;
};

export {
  getAllTripList,
  getTripList,
  getTripImage,
  postTrip,
  putTrip,
  deleteTrip,
};
