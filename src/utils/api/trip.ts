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

const getMyTripList = async (
  userid: string,
  offset: number,
  limit: number
): Promise<TripType[]> => {
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${userid}/triplist?offset=${offset}&limit=${limit}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
  const data = await res.json();
  if (data.trips === undefined) {
    return [];
  }
  data.trips.map((trip: TripType) => {
    trip.startdate = trip.startdate.split("T")[0];
  });
  data.trips.map((trip: TripType) => {
    trip.enddate = trip.enddate.split("T")[0];
  });
  return data.trips;
};

const getTripImage = async (tripid: string): Promise<string> => {
  const res = await fetch(`http://localhost:8080/tripimage/${tripid}`, {
    // mode: "no-cors"
  });
  const blob = await res.blob();
  const src = URL.createObjectURL(blob);
  return src;
};

const postTrip = async (
  userid: string,
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
  const res = await fetch(`http://localhost:8080/login/api/v1/${userid}/trip`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      // "Access-Control-Allow-Origin": "http://localhost:8080/",
      // "Access-Control-Allow-Credentials": "true",
    },
    body: JSON.stringify(bodyData),
  });
  const data = await res.json();
  data.trip.startdate = data.trip.startdate.split("T")[0];
  data.trip.enddate = data.trip.enddate.split("T")[0];
  return data.trip;
};

const getTrip = async (tripid: string): Promise<TripType> => {
  const res = await fetch(`http://localhost:8080/trip/${tripid}`);
  const data = await res.json();
  data.trip.startdate = data.trip.startdate.split("T")[0];
  data.trip.enddate = data.trip.enddate.split("T")[0];
  return data.trip;
};

const putTrip = async (
  userid: string,
  tripid: string,
  title: string,
  startdate: string,
  enddate: string,
  prefectureid: string,
  memo: string,
  ispublic: boolean,
  favorite: number
): Promise<TripType> => {
  const bodyData = {
    prefectureid: `${prefectureid}`,
    title: title,
    startdate: `${startdate}T00:00:00.000+09:00`,
    enddate: `${enddate}T00:00:00.000+09:00`,
    memo: memo,
    ispublic: ispublic,
    favorite: favorite,
  };
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${userid}/trip/${tripid}`,
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
  data.trip.startdate = data.trip.startdate.split("T")[0];
  data.trip.enddate = data.trip.enddate.split("T")[0];
  return data.trip;
};

const deleteTrip = async (
  userid: string,
  tripid: string
): Promise<TripType[]> => {
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${userid}/trip/${tripid}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
  const data = await res.json();
  data.trip.startdate = data.trip.startdate.split("T")[0];
  data.trip.enddate = data.trip.enddate.split("T")[0];
  return data.trips;
};

const postTripImage = async (
  tripimage: File,
  tripid: string,
  userid: string
) => {
  const formData = new FormData();
  formData.append("image", tripimage, "image.png");
  const res = await fetch(
    `http://localhost:8080/login/api/v1/${userid}/tripimage/${tripid}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: formData,
    }
  );
  const data = await res.json();
  data.trip.startdate = data.trip.startdate.split("T")[0];
  data.trip.enddate = data.trip.enddate.split("T")[0];
  return data.trip;
};

export {
  getAllTripList,
  getTripList,
  getTripImage,
  postTrip,
  putTrip,
  deleteTrip,
  postTripImage,
  getTrip,
  getMyTripList,
};
