import axios from "axios";
import { Trip } from "@/types/index";

const getTripList = async (): Promise<Trip[]> => {
  const { data } = await axios.get("http://localhost:8080/triplist");
  return data.trips;
};

export { getTripList };
