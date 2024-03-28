import { getPrefecture, getPrefectureList } from "./prefecture";
import {
  getAllTripList,
  getTripList,
  getTripImage,
  postTrip,
  putTrip,
  postTripImage,
  // putFavoriteTrip,
} from "./trip";
import { getSpotList, postSpot, putSpot, postSpotImage } from "./spot";
import {
  postFavorite,
  getFavoritesByUid,
  getFavoritesByTripID,
  deleteFavoriteById,
} from "./favorite";
import { getUser, getUserIcon } from "./user";

export {
  getPrefecture,
  getPrefectureList,
  getAllTripList,
  getTripList,
  getTripImage,
  getSpotList,
  postTrip,
  postSpot,
  putTrip,
  putSpot,
  postTripImage,
  postSpotImage,
  postFavorite,
  getFavoritesByUid,
  getFavoritesByTripID,
  deleteFavoriteById,
  getUser,
  getUserIcon,
};
