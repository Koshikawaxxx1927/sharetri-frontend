import { getPrefecture, getPrefectureList } from "./prefecture";
import {
  getAllTripList,
  getTripList,
  getTripImage,
  postTrip,
  putTrip,
  postTripImage,
  getTrip,
  getMyTripList,
} from "./trip";
import { getSpotList, postSpot, putSpot, postSpotImage } from "./spot";
import {
  postFavorite,
  getFavoritesByUid,
  getFavoritesByTripID,
  deleteFavoriteById,
  getFavoriteByUidTripId,
} from "./favorite";
import {
  getUser,
  getUserIcon,
  deleteLoginUser,
  putUser,
  postUserIcon,
} from "./user";
// import { fetchUserFromGoogle } from "./usergoogle";

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
  deleteLoginUser,
  putUser,
  postUserIcon,
  getTrip,
  getFavoriteByUidTripId,
  // fetchUserFromGoogle,
  getMyTripList,
};
